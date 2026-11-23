import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionsKey() {
  return ['actions'] as const
}

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getBoardsKey() {
  return ['boards'] as const
}

export function getCardsKey() {
  return ['cards'] as const
}

export function getChecklistsKey() {
  return ['checklists'] as const
}

export function getCustomFieldsKey() {
  return ['customFields'] as const
}

export function getEmojiKey() {
  return ['emoji'] as const
}

export function getEnterprisesKey() {
  return ['enterprises'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getMembersKey() {
  return ['members'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getActionsIdQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
) {
  return ['actions', '/actions/:id', args] as const
}

export function getActionsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.actions)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdQueryKey>
  >({
    queryKey: getActionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutActionsIdMutationKey() {
  return ['actions', '/actions/:id', 'PUT'] as const
}

export function getPutActionsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.actions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutActionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':id']['$put']>) {
      return parseResponse(client.actions[':id'].$put(args, options))
    },
  })
}

export function usePutActionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.actions)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutActionsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteActionsIdMutationKey() {
  return ['actions', '/actions/:id', 'DELETE'] as const
}

export function getDeleteActionsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':id']['$delete']>) {
      return parseResponse(client.actions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteActionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.actions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteActionsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getActionsIdFieldQueryKey(
  args: InferRequestType<(typeof client.actions)[':id'][':field']['$get']>,
) {
  return ['actions', '/actions/:id/:field', args] as const
}

export function getActionsIdFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdFieldQueryKey>
  >({
    queryKey: getActionsIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getActionsIdBoardQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['board']['$get']>,
) {
  return ['actions', '/actions/:id/board', args] as const
}

export function getActionsIdBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdBoardQueryKey>
  >({
    queryKey: getActionsIdBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].board.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getActionsIdCardQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['card']['$get']>,
) {
  return ['actions', '/actions/:id/card', args] as const
}

export function getActionsIdCardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdCardQueryKey>
  >({
    queryKey: getActionsIdCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].card.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionsIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['card']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIdCardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['card']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIdCardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getActionsIdListQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['list']['$get']>,
) {
  return ['actions', '/actions/:id/list', args] as const
}

export function getActionsIdListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdListQueryKey>
  >({
    queryKey: getActionsIdListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIdListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIdListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getActionsIdMemberQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['member']['$get']>,
) {
  return ['actions', '/actions/:id/member', args] as const
}

export function getActionsIdMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdMemberQueryKey>
  >({
    queryKey: getActionsIdMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].member.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionsIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['member']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIdMemberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['member']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIdMemberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getActionsIdMemberCreatorQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>,
) {
  return ['actions', '/actions/:id/memberCreator', args] as const
}

export function getActionsIdMemberCreatorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdMemberCreatorQueryKey>
  >({
    queryKey: getActionsIdMemberCreatorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].memberCreator.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionsIdMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdMemberCreatorQueryKey>
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
      ...getActionsIdMemberCreatorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionsIdMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdMemberCreatorQueryKey>
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
      ...getActionsIdMemberCreatorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getActionsIdOrganizationQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['organization']['$get']>,
) {
  return ['actions', '/actions/:id/organization', args] as const
}

export function getActionsIdOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdOrganizationQueryKey>
  >({
    queryKey: getActionsIdOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionsIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['organization']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdOrganizationQueryKey>
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
      ...getActionsIdOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionsIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['organization']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdOrganizationQueryKey>
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
      ...getActionsIdOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutActionsIdTextMutationKey() {
  return ['actions', '/actions/:id/text', 'PUT'] as const
}

export function getPutActionsIdTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['text']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':id']['text']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutActionsIdTextMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.actions)[':id']['text']['$put']>) {
      return parseResponse(client.actions[':id'].text.$put(args, options))
    },
  })
}

export function usePutActionsIdText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':id']['text']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actions)[':id']['text']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutActionsIdTextMutationOptions<TError, TOnMutateResult>(
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

export function getActionsIdActionReactionsQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>,
) {
  return ['actions', '/actions/:idAction/reactions', args] as const
}

export function getActionsIdActionReactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionReactionsQueryKey>
  >({
    queryKey: getActionsIdActionReactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].reactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionsIdActionReactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdActionReactionsQueryKey>
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
      ...getActionsIdActionReactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionsIdActionReactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdActionReactionsQueryKey>
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
      ...getActionsIdActionReactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostActionsIdActionReactionsMutationKey() {
  return ['actions', '/actions/:idAction/reactions', 'POST'] as const
}

export function getPostActionsIdActionReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionsIdActionReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']>,
    ) {
      return parseResponse(client.actions[':idAction'].reactions.$post(args, options))
    },
  })
}

export function usePostActionsIdActionReactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionsIdActionReactionsMutationOptions<TError, TOnMutateResult>(
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

export function getActionsIdActionReactionsIdQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>,
) {
  return ['actions', '/actions/:idAction/reactions/:id', args] as const
}

export function getActionsIdActionReactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionReactionsIdQueryKey>
  >({
    queryKey: getActionsIdActionReactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].reactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionsIdActionReactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdActionReactionsIdQueryKey>
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
      ...getActionsIdActionReactionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionsIdActionReactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdActionReactionsIdQueryKey>
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
      ...getActionsIdActionReactionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteActionsIdActionReactionsIdMutationKey() {
  return ['actions', '/actions/:idAction/reactions/:id', 'DELETE'] as const
}

export function getDeleteActionsIdActionReactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteActionsIdActionReactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>,
    ) {
      return parseResponse(client.actions[':idAction'].reactions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteActionsIdActionReactionsId<
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
                ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteActionsIdActionReactionsIdMutationOptions<
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

export function getActionsIdActionReactionsSummaryQueryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>,
) {
  return ['actions', '/actions/:idAction/reactionsSummary', args] as const
}

export function getActionsIdActionReactionsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdActionReactionsSummaryQueryKey>
  >({
    queryKey: getActionsIdActionReactionsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':idAction'].reactionsSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useActionsIdActionReactionsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdActionReactionsSummaryQueryKey>
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
      ...getActionsIdActionReactionsSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseActionsIdActionReactionsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdActionReactionsSummaryQueryKey>
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
      ...getActionsIdActionReactionsSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApplicationsKeyComplianceQueryKey(
  args: InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>,
) {
  return ['applications', '/applications/:key/compliance', args] as const
}

export function getApplicationsKeyComplianceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsKeyComplianceQueryKey>
  >({
    queryKey: getApplicationsKeyComplianceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':key'].compliance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsKeyCompliance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsKeyComplianceQueryKey>
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
      ...getApplicationsKeyComplianceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationsKeyCompliance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsKeyComplianceQueryKey>
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
      ...getApplicationsKeyComplianceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBatchQueryKey(args: InferRequestType<typeof client.batch.$get>) {
  return ['batch', '/batch', args] as const
}

export function getBatchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.batch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchQueryKey>
  >({
    queryKey: getBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBatch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.batch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBatch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.batch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>,
) {
  return ['boards', '/boards/:id/memberships', args] as const
}

export function getBoardsIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdMembershipsQueryKey>
  >({
    queryKey: getBoardsIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdMembershipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsIdQueryKey(args: InferRequestType<(typeof client.boards)[':id']['$get']>) {
  return ['boards', '/boards/:id', args] as const
}

export function getBoardsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.boards)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdQueryKey>
  >({
    queryKey: getBoardsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBoardsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutBoardsIdMutationKey() {
  return ['boards', '/boards/:id', 'PUT'] as const
}

export function getPutBoardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['$put']>) {
      return parseResponse(client.boards[':id'].$put(args, options))
    },
  })
}

export function usePutBoardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBoardsIdMutationKey() {
  return ['boards', '/boards/:id', 'DELETE'] as const
}

export function getDeleteBoardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['$delete']>) {
      return parseResponse(client.boards[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBoardsIdFieldQueryKey(
  args: InferRequestType<(typeof client.boards)[':id'][':field']['$get']>,
) {
  return ['boards', '/boards/:id/:field', args] as const
}

export function getBoardsIdFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdFieldQueryKey>
  >({
    queryKey: getBoardsIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsBoardIdActionsQueryKey(
  args: InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>,
) {
  return ['boards', '/boards/:boardId/actions', args] as const
}

export function getBoardsBoardIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdActionsQueryKey>
  >({
    queryKey: getBoardsBoardIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':boardId'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsBoardIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsBoardIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsBoardIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsBoardIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsBoardIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsBoardIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsBoardIdBoardStarsQueryKey(
  args: InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>,
) {
  return ['boards', '/boards/:boardId/boardStars', args] as const
}

export function getBoardsBoardIdBoardStarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdBoardStarsQueryKey>
  >({
    queryKey: getBoardsBoardIdBoardStarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':boardId'].boardStars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsBoardIdBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsBoardIdBoardStarsQueryKey>
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
      ...getBoardsBoardIdBoardStarsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBoardsBoardIdBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsBoardIdBoardStarsQueryKey>
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
      ...getBoardsBoardIdBoardStarsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBoardsIdChecklistsQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>,
) {
  return ['boards', '/boards/:id/checklists', args] as const
}

export function getBoardsIdChecklistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdChecklistsQueryKey>
  >({
    queryKey: getBoardsIdChecklistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].checklists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdChecklistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdChecklistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdChecklistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdChecklistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsIdCardsQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['cards']['$get']>,
) {
  return ['boards', '/boards/:id/cards', args] as const
}

export function getBoardsIdCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdCardsQueryKey>
  >({
    queryKey: getBoardsIdCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBoardsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['cards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['cards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsIdCardsFilterQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>,
) {
  return ['boards', '/boards/:id/cards/:filter', args] as const
}

export function getBoardsIdCardsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdCardsFilterQueryKey>
  >({
    queryKey: getBoardsIdCardsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].cards[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdCardsFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdCardsFilterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdCardsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdCardsFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdCardsFilterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsIdCustomFieldsQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>,
) {
  return ['boards', '/boards/:id/customFields', args] as const
}

export function getBoardsIdCustomFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdCustomFieldsQueryKey>
  >({
    queryKey: getBoardsIdCustomFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].customFields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdCustomFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdCustomFieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdCustomFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdCustomFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdCustomFieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsIdLabelsQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$get']>,
) {
  return ['boards', '/boards/:id/labels', args] as const
}

export function getBoardsIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdLabelsQueryKey>
  >({
    queryKey: getBoardsIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBoardsIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdLabelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBoardsIdLabelsMutationKey() {
  return ['boards', '/boards/:id/labels', 'POST'] as const
}

export function getPostBoardsIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['labels']['$post']>) {
      return parseResponse(client.boards[':id'].labels.$post(args, options))
    },
  })
}

export function usePostBoardsIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdListsQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$get']>,
) {
  return ['boards', '/boards/:id/lists', args] as const
}

export function getBoardsIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdListsQueryKey>
  >({
    queryKey: getBoardsIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].lists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBoardsIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBoardsIdListsMutationKey() {
  return ['boards', '/boards/:id/lists', 'POST'] as const
}

export function getPostBoardsIdListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['lists']['$post']>) {
      return parseResponse(client.boards[':id'].lists.$post(args, options))
    },
  })
}

export function usePostBoardsIdLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['lists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdListsMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdListsFilterQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>,
) {
  return ['boards', '/boards/:id/lists/:filter', args] as const
}

export function getBoardsIdListsFilterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdListsFilterQueryKey>
  >({
    queryKey: getBoardsIdListsFilterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].lists[':filter'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdListsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdListsFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdListsFilterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdListsFilter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdListsFilterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdListsFilterQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBoardsIdMembersQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$get']>,
) {
  return ['boards', '/boards/:id/members', args] as const
}

export function getBoardsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdMembersQueryKey>
  >({
    queryKey: getBoardsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBoardsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutBoardsIdMembersMutationKey() {
  return ['boards', '/boards/:id/members', 'PUT'] as const
}

export function getPutBoardsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['members']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['members']['$put']>) {
      return parseResponse(client.boards[':id'].members.$put(args, options))
    },
  })
}

export function usePutBoardsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['members']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['members']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdMembersIdMemberMutationKey() {
  return ['boards', '/boards/:id/members/:idMember', 'PUT'] as const
}

export function getPutBoardsIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].members[':idMember'].$put(args, options))
    },
  })
}

export function usePutBoardsIdMembersIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMembersIdMemberMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBoardsIdMembersIdMemberMutationKey() {
  return ['boards', '/boards/:id/members/:idMember', 'DELETE'] as const
}

export function getDeleteBoardsIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.boards[':id'].members[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsIdMembersIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsIdMembersIdMemberMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdMembershipsIdMembershipMutationKey() {
  return ['boards', '/boards/:id/memberships/:idMembership', 'PUT'] as const
}

export function getPutBoardsIdMembershipsIdMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMembershipsIdMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].memberships[':idMembership'].$put(args, options))
    },
  })
}

export function usePutBoardsIdMembershipsIdMembership<
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
                ReturnType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMembershipsIdMembershipMutationOptions<
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

export function getPutBoardsIdMyPrefsEmailPositionMutationKey() {
  return ['boards', '/boards/:id/myPrefs/emailPosition', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsEmailPositionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsEmailPositionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.emailPosition.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsEmailPosition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsEmailPositionMutationOptions<
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

export function getPutBoardsIdMyPrefsIdEmailListMutationKey() {
  return ['boards', '/boards/:id/myPrefs/idEmailList', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsIdEmailListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsIdEmailListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.idEmailList.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsIdEmailList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsIdEmailListMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdMyPrefsShowSidebarMutationKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebar', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsShowSidebarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsShowSidebarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.showSidebar.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsShowSidebar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsShowSidebarMutationOptions<TError, TOnMutateResult>(
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

export function getPutBoardsIdMyPrefsShowSidebarActivityMutationKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarActivity', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsShowSidebarActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsShowSidebarActivityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']
      >,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.showSidebarActivity.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsShowSidebarActivity<
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
                ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsShowSidebarActivityMutationOptions<
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

export function getPutBoardsIdMyPrefsShowSidebarBoardActionsMutationKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarBoardActions', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsShowSidebarBoardActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsShowSidebarBoardActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']
      >,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.showSidebarBoardActions.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsShowSidebarBoardActions<
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
                  (typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']
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
  const mutationDefaults = getPutBoardsIdMyPrefsShowSidebarBoardActionsMutationOptions<
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

export function getPutBoardsIdMyPrefsShowSidebarMembersMutationKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarMembers', 'PUT'] as const
}

export function getPutBoardsIdMyPrefsShowSidebarMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBoardsIdMyPrefsShowSidebarMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']
      >,
    ) {
      return parseResponse(client.boards[':id'].myPrefs.showSidebarMembers.$put(args, options))
    },
  })
}

export function usePutBoardsIdMyPrefsShowSidebarMembers<
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
                ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBoardsIdMyPrefsShowSidebarMembersMutationOptions<
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

export function getPostBoardsIndexMutationKey() {
  return ['boards', '/boards/', 'POST'] as const
}

export function getPostBoardsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.boards.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.boards.index.$post>) {
      return parseResponse(client.boards.index.$post(args, options))
    },
  })
}

export function usePostBoardsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.boards.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBoardsIdCalendarKeyGenerateMutationKey() {
  return ['boards', '/boards/:id/calendarKey/generate', 'POST'] as const
}

export function getPostBoardsIdCalendarKeyGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdCalendarKeyGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>,
    ) {
      return parseResponse(client.boards[':id'].calendarKey.generate.$post(args, options))
    },
  })
}

export function usePostBoardsIdCalendarKeyGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdCalendarKeyGenerateMutationOptions<
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

export function getPostBoardsIdEmailKeyGenerateMutationKey() {
  return ['boards', '/boards/:id/emailKey/generate', 'POST'] as const
}

export function getPostBoardsIdEmailKeyGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdEmailKeyGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>,
    ) {
      return parseResponse(client.boards[':id'].emailKey.generate.$post(args, options))
    },
  })
}

export function usePostBoardsIdEmailKeyGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdEmailKeyGenerateMutationOptions<TError, TOnMutateResult>(
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

export function getPostBoardsIdIdTagsMutationKey() {
  return ['boards', '/boards/:id/idTags', 'POST'] as const
}

export function getPostBoardsIdIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['idTags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['idTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdIdTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['idTags']['$post']>) {
      return parseResponse(client.boards[':id'].idTags.$post(args, options))
    },
  })
}

export function usePostBoardsIdIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['idTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['idTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPostBoardsIdMarkAsViewedMutationKey() {
  return ['boards', '/boards/:id/markAsViewed', 'POST'] as const
}

export function getPostBoardsIdMarkAsViewedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['markAsViewed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdMarkAsViewedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']>,
    ) {
      return parseResponse(client.boards[':id'].markAsViewed.$post(args, options))
    },
  })
}

export function usePostBoardsIdMarkAsViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['markAsViewed']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdMarkAsViewedMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdBoardPluginsQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>,
) {
  return ['boards', '/boards/:id/boardPlugins', args] as const
}

export function getBoardsIdBoardPluginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdBoardPluginsQueryKey>
  >({
    queryKey: getBoardsIdBoardPluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].boardPlugins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdBoardPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdBoardPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdBoardPluginsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdBoardPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdBoardPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdBoardPluginsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBoardsIdBoardPluginsMutationKey() {
  return ['boards', '/boards/:id/boardPlugins', 'POST'] as const
}

export function getPostBoardsIdBoardPluginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdBoardPluginsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']>,
    ) {
      return parseResponse(client.boards[':id'].boardPlugins.$post(args, options))
    },
  })
}

export function usePostBoardsIdBoardPlugins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdBoardPluginsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBoardsIdBoardPluginsIdPluginMutationKey() {
  return ['boards', '/boards/:id/boardPlugins/:idPlugin', 'DELETE'] as const
}

export function getDeleteBoardsIdBoardPluginsIdPluginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdBoardPluginsIdPluginMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>,
    ) {
      return parseResponse(client.boards[':id'].boardPlugins[':idPlugin'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsIdBoardPluginsIdPlugin<
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
                ReturnType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsIdBoardPluginsIdPluginMutationOptions<
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

export function getBoardsIdPluginsQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>,
) {
  return ['boards', '/boards/:id/plugins', args] as const
}

export function getBoardsIdPluginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdPluginsQueryKey>
  >({
    queryKey: getBoardsIdPluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].plugins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBoardsIdPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBoardsIdPluginsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBoardsIdPlugins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBoardsIdPluginsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBoardsIdExportsMutationKey() {
  return ['boards', '/boards/:id/exports', 'POST'] as const
}

export function getPostBoardsIdExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['exports']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBoardsIdExportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.boards)[':id']['exports']['$post']>) {
      return parseResponse(client.boards[':id'].exports.$post(args, options))
    },
  })
}

export function usePostBoardsIdExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['exports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['exports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsIdExportsMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdExportsIdExportQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>,
) {
  return ['boards', '/boards/:id/exports/:idExport', args] as const
}

export function getBoardsIdExportsIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdExportsIdExportQueryKey>
  >({
    queryKey: getBoardsIdExportsIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].exports[':idExport'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdExportsIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdExportsIdExportQueryKey>
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
      ...getBoardsIdExportsIdExportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBoardsIdExportsIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdExportsIdExportQueryKey>
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
      ...getBoardsIdExportsIdExportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteBoardsIdExportsIdExportMutationKey() {
  return ['boards', '/boards/:id/exports/:idExport', 'DELETE'] as const
}

export function getDeleteBoardsIdExportsIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBoardsIdExportsIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>,
    ) {
      return parseResponse(client.boards[':id'].exports[':idExport'].$delete(args, options))
    },
  })
}

export function useDeleteBoardsIdExportsIdExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsIdExportsIdExportMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsIdExportsIdExportDownloadQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>,
) {
  return ['boards', '/boards/:id/exports/:idExport/download', args] as const
}

export function getBoardsIdExportsIdExportDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdExportsIdExportDownloadQueryKey>
  >({
    queryKey: getBoardsIdExportsIdExportDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].exports[':idExport'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdExportsIdExportDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.boards)[':id']['exports'][':idExport']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdExportsIdExportDownloadQueryKey>
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
      ...getBoardsIdExportsIdExportDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBoardsIdExportsIdExportDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.boards)[':id']['exports'][':idExport']['download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdExportsIdExportDownloadQueryKey>
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
      ...getBoardsIdExportsIdExportDownloadQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBoardsIdExportsMostRecentQueryKey(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>,
) {
  return ['boards', '/boards/:id/exports/mostRecent', args] as const
}

export function getBoardsIdExportsMostRecentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsIdExportsMostRecentQueryKey>
  >({
    queryKey: getBoardsIdExportsMostRecentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.boards[':id'].exports.mostRecent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBoardsIdExportsMostRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdExportsMostRecentQueryKey>
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
      ...getBoardsIdExportsMostRecentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBoardsIdExportsMostRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBoardsIdExportsMostRecentQueryKey>
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
      ...getBoardsIdExportsMostRecentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCardsMutationKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function getPostCardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cards.$post>) {
      return parseResponse(client.cards.$post(args, options))
    },
  })
}

export function usePostCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
        TError,
        InferRequestType<typeof client.cards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsIdQueryKey(args: InferRequestType<(typeof client.cards)[':id']['$get']>) {
  return ['cards', '/cards/:id', args] as const
}

export function getCardsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.cards)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdQueryKey>
  >({
    queryKey: getCardsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCardsIdMutationKey() {
  return ['cards', '/cards/:id', 'PUT'] as const
}

export function getPutCardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['$put']>) {
      return parseResponse(client.cards[':id'].$put(args, options))
    },
  })
}

export function usePutCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCardsIdMutationKey() {
  return ['cards', '/cards/:id', 'DELETE'] as const
}

export function getDeleteCardsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['$delete']>) {
      return parseResponse(client.cards[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsIdFieldQueryKey(
  args: InferRequestType<(typeof client.cards)[':id'][':field']['$get']>,
) {
  return ['cards', '/cards/:id/:field', args] as const
}

export function getCardsIdFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdFieldQueryKey>
  >({
    queryKey: getCardsIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCardsIdActionsQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['$get']>,
) {
  return ['cards', '/cards/:id/actions', args] as const
}

export function getCardsIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdActionsQueryKey>
  >({
    queryKey: getCardsIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCardsIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>,
) {
  return ['cards', '/cards/:id/attachments', args] as const
}

export function getCardsIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdAttachmentsQueryKey>
  >({
    queryKey: getCardsIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdAttachmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdAttachmentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCardsIdAttachmentsMutationKey() {
  return ['cards', '/cards/:id/attachments', 'POST'] as const
}

export function getPostCardsIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdAttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['attachments']['$post']>) {
      return parseResponse(client.cards[':id'].attachments.$post(args, options))
    },
  })
}

export function usePostCardsIdAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['attachments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdAttachmentsMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdAttachmentsIdAttachmentQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>,
) {
  return ['cards', '/cards/:id/attachments/:idAttachment', args] as const
}

export function getCardsIdAttachmentsIdAttachmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdAttachmentsIdAttachmentQueryKey>
  >({
    queryKey: getCardsIdAttachmentsIdAttachmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].attachments[':idAttachment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdAttachmentsIdAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdAttachmentsIdAttachmentQueryKey>
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
      ...getCardsIdAttachmentsIdAttachmentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCardsIdAttachmentsIdAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdAttachmentsIdAttachmentQueryKey>
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
      ...getCardsIdAttachmentsIdAttachmentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCardsIdAttachmentsIdAttachmentMutationKey() {
  return ['cards', '/cards/:id/attachments/:idAttachment', 'DELETE'] as const
}

export function getDeleteCardsIdAttachmentsIdAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdAttachmentsIdAttachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']
      >,
    ) {
      return parseResponse(client.cards[':id'].attachments[':idAttachment'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdAttachmentsIdAttachment<
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
                ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdAttachmentsIdAttachmentMutationOptions<
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

export function getCardsIdBoardQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['board']['$get']>,
) {
  return ['cards', '/cards/:id/board', args] as const
}

export function getCardsIdBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdBoardQueryKey>
  >({
    queryKey: getCardsIdBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].board.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCardsIdCheckItemStatesQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>,
) {
  return ['cards', '/cards/:id/checkItemStates', args] as const
}

export function getCardsIdCheckItemStatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCheckItemStatesQueryKey>
  >({
    queryKey: getCardsIdCheckItemStatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].checkItemStates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdCheckItemStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCheckItemStatesQueryKey>
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
      ...getCardsIdCheckItemStatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCardsIdCheckItemStates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCheckItemStatesQueryKey>
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
      ...getCardsIdCheckItemStatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCardsIdChecklistsQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>,
) {
  return ['cards', '/cards/:id/checklists', args] as const
}

export function getCardsIdChecklistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdChecklistsQueryKey>
  >({
    queryKey: getCardsIdChecklistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].checklists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdChecklistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdChecklistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdChecklists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdChecklistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdChecklistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCardsIdChecklistsMutationKey() {
  return ['cards', '/cards/:id/checklists', 'POST'] as const
}

export function getPostCardsIdChecklistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['checklists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdChecklistsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['checklists']['$post']>) {
      return parseResponse(client.cards[':id'].checklists.$post(args, options))
    },
  })
}

export function usePostCardsIdChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['checklists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdChecklistsMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCheckItemIdCheckItemQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>,
) {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', args] as const
}

export function getCardsIdCheckItemIdCheckItemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCheckItemIdCheckItemQueryKey>
  >({
    queryKey: getCardsIdCheckItemIdCheckItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].checkItem[':idCheckItem'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdCheckItemIdCheckItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCheckItemIdCheckItemQueryKey>
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
      ...getCardsIdCheckItemIdCheckItemQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCardsIdCheckItemIdCheckItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCheckItemIdCheckItemQueryKey>
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
      ...getCardsIdCheckItemIdCheckItemQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCardsIdCheckItemIdCheckItemMutationKey() {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', 'PUT'] as const
}

export function getPutCardsIdCheckItemIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCheckItemIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>,
    ) {
      return parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$put(args, options))
    },
  })
}

export function usePutCardsIdCheckItemIdCheckItem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdCheckItemIdCheckItemMutationOptions<
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

export function getDeleteCardsIdCheckItemIdCheckItemMutationKey() {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', 'DELETE'] as const
}

export function getDeleteCardsIdCheckItemIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdCheckItemIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdCheckItemIdCheckItem<
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
                ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdCheckItemIdCheckItemMutationOptions<
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

export function getCardsIdListQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['list']['$get']>,
) {
  return ['cards', '/cards/:id/list', args] as const
}

export function getCardsIdListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdListQueryKey>
  >({
    queryKey: getCardsIdListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCardsIdMembersQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['members']['$get']>,
) {
  return ['cards', '/cards/:id/members', args] as const
}

export function getCardsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdMembersQueryKey>
  >({
    queryKey: getCardsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCardsIdMembersVotedQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>,
) {
  return ['cards', '/cards/:id/membersVoted', args] as const
}

export function getCardsIdMembersVotedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdMembersVotedQueryKey>
  >({
    queryKey: getCardsIdMembersVotedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].membersVoted.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdMembersVoted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdMembersVotedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdMembersVotedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdMembersVoted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdMembersVotedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdMembersVotedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCardsIdMembersVotedMutationKey() {
  return ['cards', '/cards/:id/membersVoted', 'POST'] as const
}

export function getPostCardsIdMembersVotedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdMembersVotedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']>,
    ) {
      return parseResponse(client.cards[':id'].membersVoted.$post(args, options))
    },
  })
}

export function usePostCardsIdMembersVoted<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdMembersVotedMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdPluginDataQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>,
) {
  return ['cards', '/cards/:id/pluginData', args] as const
}

export function getCardsIdPluginDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdPluginDataQueryKey>
  >({
    queryKey: getCardsIdPluginDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].pluginData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdPluginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdPluginDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdPluginDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdPluginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdPluginDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdPluginDataQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCardsIdStickersQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>,
) {
  return ['cards', '/cards/:id/stickers', args] as const
}

export function getCardsIdStickersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdStickersQueryKey>
  >({
    queryKey: getCardsIdStickersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].stickers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCardsIdStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdStickersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCardsIdStickersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCardsIdStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdStickersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCardsIdStickersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCardsIdStickersMutationKey() {
  return ['cards', '/cards/:id/stickers', 'POST'] as const
}

export function getPostCardsIdStickersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['stickers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdStickersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['stickers']['$post']>) {
      return parseResponse(client.cards[':id'].stickers.$post(args, options))
    },
  })
}

export function usePostCardsIdStickers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['stickers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdStickersMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdStickersIdStickerQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>,
) {
  return ['cards', '/cards/:id/stickers/:idSticker', args] as const
}

export function getCardsIdStickersIdStickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdStickersIdStickerQueryKey>
  >({
    queryKey: getCardsIdStickersIdStickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].stickers[':idSticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdStickersIdSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdStickersIdStickerQueryKey>
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
      ...getCardsIdStickersIdStickerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCardsIdStickersIdSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdStickersIdStickerQueryKey>
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
      ...getCardsIdStickersIdStickerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCardsIdStickersIdStickerMutationKey() {
  return ['cards', '/cards/:id/stickers/:idSticker', 'PUT'] as const
}

export function getPutCardsIdStickersIdStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdStickersIdStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>,
    ) {
      return parseResponse(client.cards[':id'].stickers[':idSticker'].$put(args, options))
    },
  })
}

export function usePutCardsIdStickersIdSticker<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdStickersIdStickerMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdStickersIdStickerMutationKey() {
  return ['cards', '/cards/:id/stickers/:idSticker', 'DELETE'] as const
}

export function getDeleteCardsIdStickersIdStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdStickersIdStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].stickers[':idSticker'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdStickersIdSticker<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdStickersIdStickerMutationOptions<
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

export function getPutCardsIdActionsIdActionCommentsMutationKey() {
  return ['cards', '/cards/:id/actions/:idAction/comments', 'PUT'] as const
}

export function getPutCardsIdActionsIdActionCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdActionsIdActionCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']
      >,
    ) {
      return parseResponse(client.cards[':id'].actions[':idAction'].comments.$put(args, options))
    },
  })
}

export function usePutCardsIdActionsIdActionComments<
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
                ReturnType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdActionsIdActionCommentsMutationOptions<
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

export function getDeleteCardsIdActionsIdActionCommentsMutationKey() {
  return ['cards', '/cards/:id/actions/:idAction/comments', 'DELETE'] as const
}

export function getDeleteCardsIdActionsIdActionCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdActionsIdActionCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']
      >,
    ) {
      return parseResponse(client.cards[':id'].actions[':idAction'].comments.$delete(args, options))
    },
  })
}

export function useDeleteCardsIdActionsIdActionComments<
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
                  (typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']
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
  const mutationDefaults = getDeleteCardsIdActionsIdActionCommentsMutationOptions<
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

export function getPutCardsIdCardCustomFieldIdCustomFieldItemMutationKey() {
  return ['cards', '/cards/:idCard/customField/:idCustomField/item', 'PUT'] as const
}

export function getPutCardsIdCardCustomFieldIdCustomFieldItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardCustomFieldIdCustomFieldItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].customField[':idCustomField'].item.$put(args, options),
      )
    },
  })
}

export function usePutCardsIdCardCustomFieldIdCustomFieldItem<
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
                  (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
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
  const mutationDefaults = getPutCardsIdCardCustomFieldIdCustomFieldItemMutationOptions<
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

export function getPutCardsIdCardCustomFieldsMutationKey() {
  return ['cards', '/cards/:idCard/customFields', 'PUT'] as const
}

export function getPutCardsIdCardCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['customFields']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardCustomFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']>,
    ) {
      return parseResponse(client.cards[':idCard'].customFields.$put(args, options))
    },
  })
}

export function usePutCardsIdCardCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':idCard']['customFields']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCardsIdCardCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getCardsIdCustomFieldItemsQueryKey(
  args: InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>,
) {
  return ['cards', '/cards/:id/customFieldItems', args] as const
}

export function getCardsIdCustomFieldItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsIdCustomFieldItemsQueryKey>
  >({
    queryKey: getCardsIdCustomFieldItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':id'].customFieldItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCardsIdCustomFieldItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCustomFieldItemsQueryKey>
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
      ...getCardsIdCustomFieldItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCardsIdCustomFieldItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsIdCustomFieldItemsQueryKey>
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
      ...getCardsIdCustomFieldItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCardsIdActionsCommentsMutationKey() {
  return ['cards', '/cards/:id/actions/comments', 'POST'] as const
}

export function getPostCardsIdActionsCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['actions']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdActionsCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']>,
    ) {
      return parseResponse(client.cards[':id'].actions.comments.$post(args, options))
    },
  })
}

export function usePostCardsIdActionsComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['actions']['comments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdActionsCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdIdLabelsMutationKey() {
  return ['cards', '/cards/:id/idLabels', 'POST'] as const
}

export function getPostCardsIdIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['idLabels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdIdLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']>) {
      return parseResponse(client.cards[':id'].idLabels.$post(args, options))
    },
  })
}

export function usePostCardsIdIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['idLabels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdIdMembersMutationKey() {
  return ['cards', '/cards/:id/idMembers', 'POST'] as const
}

export function getPostCardsIdIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idMembers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdIdMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']>) {
      return parseResponse(client.cards[':id'].idMembers.$post(args, options))
    },
  })
}

export function usePostCardsIdIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['idMembers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdLabelsMutationKey() {
  return ['cards', '/cards/:id/labels', 'POST'] as const
}

export function getPostCardsIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['labels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':id']['labels']['$post']>) {
      return parseResponse(client.cards[':id'].labels.$post(args, options))
    },
  })
}

export function usePostCardsIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsIdMarkAssociatedNotificationsReadMutationKey() {
  return ['cards', '/cards/:id/markAssociatedNotificationsRead', 'POST'] as const
}

export function getPostCardsIdMarkAssociatedNotificationsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsIdMarkAssociatedNotificationsReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']
      >,
    ) {
      return parseResponse(client.cards[':id'].markAssociatedNotificationsRead.$post(args, options))
    },
  })
}

export function usePostCardsIdMarkAssociatedNotificationsRead<
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
                ReturnType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCardsIdMarkAssociatedNotificationsReadMutationOptions<
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

export function getDeleteCardsIdIdLabelsIdLabelMutationKey() {
  return ['cards', '/cards/:id/idLabels/:idLabel', 'DELETE'] as const
}

export function getDeleteCardsIdIdLabelsIdLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdIdLabelsIdLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].idLabels[':idLabel'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdIdLabelsIdLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdIdLabelsIdLabelMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCardsIdIdMembersIdMemberMutationKey() {
  return ['cards', '/cards/:id/idMembers/:idMember', 'DELETE'] as const
}

export function getDeleteCardsIdIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].idMembers[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdIdMembersIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdIdMembersIdMemberMutationOptions<
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

export function getDeleteCardsIdMembersVotedIdMemberMutationKey() {
  return ['cards', '/cards/:id/membersVoted/:idMember', 'DELETE'] as const
}

export function getDeleteCardsIdMembersVotedIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdMembersVotedIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].membersVoted[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdMembersVotedIdMember<
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
                ReturnType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdMembersVotedIdMemberMutationOptions<
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

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationKey() {
  return ['cards', '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem', 'PUT'] as const
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
      >,
    ) {
      return parseResponse(
        client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItem<
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
                  (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
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
  const mutationDefaults = getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemMutationOptions<
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

export function getDeleteCardsIdChecklistsIdChecklistMutationKey() {
  return ['cards', '/cards/:id/checklists/:idChecklist', 'DELETE'] as const
}

export function getDeleteCardsIdChecklistsIdChecklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsIdChecklistsIdChecklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>,
    ) {
      return parseResponse(client.cards[':id'].checklists[':idChecklist'].$delete(args, options))
    },
  })
}

export function useDeleteCardsIdChecklistsIdChecklist<
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
                ReturnType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCardsIdChecklistsIdChecklistMutationOptions<
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

export function getPostChecklistsMutationKey() {
  return ['checklists', '/checklists', 'POST'] as const
}

export function getPostChecklistsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checklists.$post>>>>>,
    TError,
    InferRequestType<typeof client.checklists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChecklistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checklists.$post>) {
      return parseResponse(client.checklists.$post(args, options))
    },
  })
}

export function usePostChecklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checklists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.checklists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChecklistsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChecklistsIdQueryKey(
  args: InferRequestType<(typeof client.checklists)[':id']['$get']>,
) {
  return ['checklists', '/checklists/:id', args] as const
}

export function getChecklistsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdQueryKey>
  >({
    queryKey: getChecklistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChecklistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChecklistsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChecklistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChecklistsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutChecklistsIdMutationKey() {
  return ['checklists', '/checklists/:id', 'PUT'] as const
}

export function getPutChecklistsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecklistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checklists)[':id']['$put']>) {
      return parseResponse(client.checklists[':id'].$put(args, options))
    },
  })
}

export function usePutChecklistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.checklists)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChecklistsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteChecklistsIdMutationKey() {
  return ['checklists', '/checklists/:id', 'DELETE'] as const
}

export function getDeleteChecklistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecklistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checklists)[':id']['$delete']>) {
      return parseResponse(client.checklists[':id'].$delete(args, options))
    },
  })
}

export function useDeleteChecklistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.checklists)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChecklistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getChecklistsIdFieldQueryKey(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>,
) {
  return ['checklists', '/checklists/:id/:field', args] as const
}

export function getChecklistsIdFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdFieldQueryKey>
  >({
    queryKey: getChecklistsIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':id'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChecklistsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChecklistsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChecklistsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChecklistsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutChecklistsIdFieldMutationKey() {
  return ['checklists', '/checklists/:id/:field', 'PUT'] as const
}

export function getPutChecklistsIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id'][':field']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecklistsIdFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checklists)[':id'][':field']['$put']>) {
      return parseResponse(client.checklists[':id'][':field'].$put(args, options))
    },
  })
}

export function usePutChecklistsIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.checklists)[':id'][':field']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChecklistsIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getChecklistsIdBoardQueryKey(
  args: InferRequestType<(typeof client.checklists)[':id']['board']['$get']>,
) {
  return ['checklists', '/checklists/:id/board', args] as const
}

export function getChecklistsIdBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdBoardQueryKey>
  >({
    queryKey: getChecklistsIdBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':id'].board.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChecklistsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChecklistsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChecklistsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChecklistsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChecklistsIdCardsQueryKey(
  args: InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>,
) {
  return ['checklists', '/checklists/:id/cards', args] as const
}

export function getChecklistsIdCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdCardsQueryKey>
  >({
    queryKey: getChecklistsIdCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':id'].cards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChecklistsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChecklistsIdCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChecklistsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChecklistsIdCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getChecklistsIdCheckItemsQueryKey(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>,
) {
  return ['checklists', '/checklists/:id/checkItems', args] as const
}

export function getChecklistsIdCheckItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdCheckItemsQueryKey>
  >({
    queryKey: getChecklistsIdCheckItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':id'].checkItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChecklistsIdCheckItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdCheckItemsQueryKey>
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
      ...getChecklistsIdCheckItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChecklistsIdCheckItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdCheckItemsQueryKey>
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
      ...getChecklistsIdCheckItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostChecklistsIdCheckItemsMutationKey() {
  return ['checklists', '/checklists/:id/checkItems', 'POST'] as const
}

export function getPostChecklistsIdCheckItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChecklistsIdCheckItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']>,
    ) {
      return parseResponse(client.checklists[':id'].checkItems.$post(args, options))
    },
  })
}

export function usePostChecklistsIdCheckItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChecklistsIdCheckItemsMutationOptions<TError, TOnMutateResult>(
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

export function getChecklistsIdCheckItemsIdCheckItemQueryKey(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>,
) {
  return ['checklists', '/checklists/:id/checkItems/:idCheckItem', args] as const
}

export function getChecklistsIdCheckItemsIdCheckItemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecklistsIdCheckItemsIdCheckItemQueryKey>
  >({
    queryKey: getChecklistsIdCheckItemsIdCheckItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checklists[':id'].checkItems[':idCheckItem'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChecklistsIdCheckItemsIdCheckItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdCheckItemsIdCheckItemQueryKey>
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
      ...getChecklistsIdCheckItemsIdCheckItemQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChecklistsIdCheckItemsIdCheckItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecklistsIdCheckItemsIdCheckItemQueryKey>
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
      ...getChecklistsIdCheckItemsIdCheckItemQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteChecklistsIdCheckItemsIdCheckItemMutationKey() {
  return ['checklists', '/checklists/:id/checkItems/:idCheckItem', 'DELETE'] as const
}

export function getDeleteChecklistsIdCheckItemsIdCheckItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecklistsIdCheckItemsIdCheckItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']
      >,
    ) {
      return parseResponse(
        client.checklists[':id'].checkItems[':idCheckItem'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChecklistsIdCheckItemsIdCheckItem<
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
                  (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']
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
  const mutationDefaults = getDeleteChecklistsIdCheckItemsIdCheckItemMutationOptions<
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

export function getPostCustomFieldsMutationKey() {
  return ['customFields', '/customFields', 'POST'] as const
}

export function getPostCustomFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customFields.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.customFields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customFields.$post>) {
      return parseResponse(client.customFields.$post(args, options))
    },
  })
}

export function usePostCustomFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customFields.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.customFields.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getCustomFieldsIdQueryKey(
  args: InferRequestType<(typeof client.customFields)[':id']['$get']>,
) {
  return ['customFields', '/customFields/:id', args] as const
}

export function getCustomFieldsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customFields)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsIdQueryKey>
  >({
    queryKey: getCustomFieldsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customFields[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCustomFieldsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customFields)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomFieldsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCustomFieldsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCustomFieldsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customFields)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomFieldsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCustomFieldsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCustomFieldsIdMutationKey() {
  return ['customFields', '/customFields/:id', 'PUT'] as const
}

export function getPutCustomFieldsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.customFields)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomFieldsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customFields)[':id']['$put']>) {
      return parseResponse(client.customFields[':id'].$put(args, options))
    },
  })
}

export function usePutCustomFieldsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.customFields)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCustomFieldsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCustomFieldsIdMutationKey() {
  return ['customFields', '/customFields/:id', 'DELETE'] as const
}

export function getDeleteCustomFieldsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.customFields)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomFieldsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customFields)[':id']['$delete']>) {
      return parseResponse(client.customFields[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCustomFieldsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customFields)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.customFields)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCustomFieldsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCustomFieldsIdOptionsQueryKey(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$get']>,
) {
  return ['customFields', '/customFields/:id/options', args] as const
}

export function getCustomFieldsIdOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsIdOptionsQueryKey>
  >({
    queryKey: getCustomFieldsIdOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customFields[':id'].options.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomFieldsIdOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomFieldsIdOptionsQueryKey>
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
      ...getCustomFieldsIdOptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomFieldsIdOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomFieldsIdOptionsQueryKey>
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
      ...getCustomFieldsIdOptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCustomFieldsIdOptionsMutationKey() {
  return ['customFields', '/customFields/:id/options', 'POST'] as const
}

export function getPostCustomFieldsIdOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customFields)[':id']['options']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomFieldsIdOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customFields)[':id']['options']['$post']>,
    ) {
      return parseResponse(client.customFields[':id'].options.$post(args, options))
    },
  })
}

export function usePostCustomFieldsIdOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.customFields)[':id']['options']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomFieldsIdOptionsMutationOptions<TError, TOnMutateResult>(
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

export function getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
  >,
) {
  return ['customFields', '/customFields/:id/options/:idCustomFieldOption', args] as const
}

export function getCustomFieldsIdOptionsIdCustomFieldOptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey>
  >({
    queryKey: getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customFields[':id'].options[':idCustomFieldOption'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomFieldsIdOptionsIdCustomFieldOption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey>
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
      ...getCustomFieldsIdOptionsIdCustomFieldOptionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomFieldsIdOptionsIdCustomFieldOption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomFieldsIdOptionsIdCustomFieldOptionQueryKey>
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
      ...getCustomFieldsIdOptionsIdCustomFieldOptionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCustomFieldsIdOptionsIdCustomFieldOptionMutationKey() {
  return ['customFields', '/customFields/:id/options/:idCustomFieldOption', 'DELETE'] as const
}

export function getDeleteCustomFieldsIdOptionsIdCustomFieldOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomFieldsIdOptionsIdCustomFieldOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
      >,
    ) {
      return parseResponse(
        client.customFields[':id'].options[':idCustomFieldOption'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCustomFieldsIdOptionsIdCustomFieldOption<
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
                  (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
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
  const mutationDefaults = getDeleteCustomFieldsIdOptionsIdCustomFieldOptionMutationOptions<
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

export function getEmojiQueryKey(args: InferRequestType<typeof client.emoji.$get>) {
  return ['emoji', '/emoji', args] as const
}

export function getEmojiQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.emoji.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmojiQueryKey>
  >({
    queryKey: getEmojiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.emoji.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmoji<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emoji.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmojiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmojiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmoji<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.emoji.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEmojiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmojiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnterprisesIdQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['$get']>,
) {
  return ['enterprises', '/enterprises/:id', args] as const
}

export function getEnterprisesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdQueryKey>
  >({
    queryKey: getEnterprisesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEnterprisesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnterprisesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnterprisesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnterprisesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnterprisesIdAuditlogQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/auditlog', args] as const
}

export function getEnterprisesIdAuditlogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdAuditlogQueryKey>
  >({
    queryKey: getEnterprisesIdAuditlogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].auditlog.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdAuditlog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdAuditlogQueryKey>
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
      ...getEnterprisesIdAuditlogQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdAuditlog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdAuditlogQueryKey>
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
      ...getEnterprisesIdAuditlogQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnterprisesIdAdminsQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/admins', args] as const
}

export function getEnterprisesIdAdminsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdAdminsQueryKey>
  >({
    queryKey: getEnterprisesIdAdminsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].admins.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnterprisesIdAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdAdmins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdAdminsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnterprisesIdAdminsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnterprisesIdSignupUrlQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/signupUrl', args] as const
}

export function getEnterprisesIdSignupUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdSignupUrlQueryKey>
  >({
    queryKey: getEnterprisesIdSignupUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].signupUrl.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdSignupUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdSignupUrlQueryKey>
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
      ...getEnterprisesIdSignupUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdSignupUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdSignupUrlQueryKey>
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
      ...getEnterprisesIdSignupUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnterprisesIdMembersQueryQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/members/query', args] as const
}

export function getEnterprisesIdMembersQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdMembersQueryQueryKey>
  >({
    queryKey: getEnterprisesIdMembersQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].members.query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdMembersQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdMembersQueryQueryKey>
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
      ...getEnterprisesIdMembersQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdMembersQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdMembersQueryQueryKey>
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
      ...getEnterprisesIdMembersQueryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnterprisesIdMembersQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/members', args] as const
}

export function getEnterprisesIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdMembersQueryKey>
  >({
    queryKey: getEnterprisesIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnterprisesIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnterprisesIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnterprisesIdMembersIdMemberQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/members/:idMember', args] as const
}

export function getEnterprisesIdMembersIdMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdMembersIdMemberQueryKey>
  >({
    queryKey: getEnterprisesIdMembersIdMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].members[':idMember'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdMembersIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdMembersIdMemberQueryKey>
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
      ...getEnterprisesIdMembersIdMemberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdMembersIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdMembersIdMemberQueryKey>
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
      ...getEnterprisesIdMembersIdMemberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
  >,
) {
  return [
    'enterprises',
    '/enterprises/:id/transferrable/organization/:idOrganization',
    args,
  ] as const
}

export function getEnterprisesIdTransferrableOrganizationIdOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey>
  >({
    queryKey: getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].transferrable.organization[':idOrganization'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdTransferrableOrganizationIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey>
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
      ...getEnterprisesIdTransferrableOrganizationIdOrganizationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdTransferrableOrganizationIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdTransferrableOrganizationIdOrganizationQueryKey>
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
      ...getEnterprisesIdTransferrableOrganizationIdOrganizationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
  >,
) {
  return ['enterprises', '/enterprises/:id/transferrable/bulk/:idOrganizations', args] as const
}

export function getEnterprisesIdTransferrableBulkIdOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey>
  >({
    queryKey: getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].transferrable.bulk[':idOrganizations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdTransferrableBulkIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey>
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
      ...getEnterprisesIdTransferrableBulkIdOrganizationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdTransferrableBulkIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdTransferrableBulkIdOrganizationsQueryKey>
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
      ...getEnterprisesIdTransferrableBulkIdOrganizationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutEnterprisesIdEnterpriseJoinRequestBulkMutationKey() {
  return ['enterprises', '/enterprises/$:id/enterpriseJoinRequest/bulk', 'PUT'] as const
}

export function getPutEnterprisesIdEnterpriseJoinRequestBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdEnterpriseJoinRequestBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']
      >,
    ) {
      return parseResponse(
        client.enterprises['$:id'].enterpriseJoinRequest.bulk.$put(args, options),
      )
    },
  })
}

export function usePutEnterprisesIdEnterpriseJoinRequestBulk<
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
                  (typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']
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
  const mutationDefaults = getPutEnterprisesIdEnterpriseJoinRequestBulkMutationOptions<
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

export function getEnterprisesIdClaimableOrganizationsQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/claimableOrganizations', args] as const
}

export function getEnterprisesIdClaimableOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdClaimableOrganizationsQueryKey>
  >({
    queryKey: getEnterprisesIdClaimableOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].claimableOrganizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdClaimableOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdClaimableOrganizationsQueryKey>
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
      ...getEnterprisesIdClaimableOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdClaimableOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdClaimableOrganizationsQueryKey>
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
      ...getEnterprisesIdClaimableOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnterprisesIdPendingOrganizationsQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/pendingOrganizations', args] as const
}

export function getEnterprisesIdPendingOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdPendingOrganizationsQueryKey>
  >({
    queryKey: getEnterprisesIdPendingOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].pendingOrganizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdPendingOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdPendingOrganizationsQueryKey>
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
      ...getEnterprisesIdPendingOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdPendingOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdPendingOrganizationsQueryKey>
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
      ...getEnterprisesIdPendingOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostEnterprisesIdTokensMutationKey() {
  return ['enterprises', '/enterprises/:id/tokens', 'POST'] as const
}

export function getPostEnterprisesIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEnterprisesIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']>,
    ) {
      return parseResponse(client.enterprises[':id'].tokens.$post(args, options))
    },
  })
}

export function usePostEnterprisesIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['tokens']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnterprisesIdTokensMutationOptions<TError, TOnMutateResult>(
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

export function getEnterprisesIdOrganizationsQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/organizations', args] as const
}

export function getEnterprisesIdOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdOrganizationsQueryKey>
  >({
    queryKey: getEnterprisesIdOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].organizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdOrganizationsQueryKey>
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
      ...getEnterprisesIdOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdOrganizationsQueryKey>
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
      ...getEnterprisesIdOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutEnterprisesIdOrganizationsMutationKey() {
  return ['enterprises', '/enterprises/:id/organizations', 'PUT'] as const
}

export function getPutEnterprisesIdOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdOrganizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']>,
    ) {
      return parseResponse(client.enterprises[':id'].organizations.$put(args, options))
    },
  })
}

export function usePutEnterprisesIdOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEnterprisesIdOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getPutEnterprisesIdMembersIdMemberLicensedMutationKey() {
  return ['enterprises', '/enterprises/:id/members/:idMember/licensed', 'PUT'] as const
}

export function getPutEnterprisesIdMembersIdMemberLicensedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdMembersIdMemberLicensedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
      >,
    ) {
      return parseResponse(
        client.enterprises[':id'].members[':idMember'].licensed.$put(args, options),
      )
    },
  })
}

export function usePutEnterprisesIdMembersIdMemberLicensed<
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
                  (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
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
  const mutationDefaults = getPutEnterprisesIdMembersIdMemberLicensedMutationOptions<
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

export function getPutEnterprisesIdMembersIdMemberDeactivatedMutationKey() {
  return ['enterprises', '/enterprises/:id/members/:idMember/deactivated', 'PUT'] as const
}

export function getPutEnterprisesIdMembersIdMemberDeactivatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdMembersIdMemberDeactivatedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
      >,
    ) {
      return parseResponse(
        client.enterprises[':id'].members[':idMember'].deactivated.$put(args, options),
      )
    },
  })
}

export function usePutEnterprisesIdMembersIdMemberDeactivated<
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
                  (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
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
  const mutationDefaults = getPutEnterprisesIdMembersIdMemberDeactivatedMutationOptions<
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

export function getPutEnterprisesIdAdminsIdMemberMutationKey() {
  return ['enterprises', '/enterprises/:id/admins/:idMember', 'PUT'] as const
}

export function getPutEnterprisesIdAdminsIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEnterprisesIdAdminsIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>,
    ) {
      return parseResponse(client.enterprises[':id'].admins[':idMember'].$put(args, options))
    },
  })
}

export function usePutEnterprisesIdAdminsIdMember<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEnterprisesIdAdminsIdMemberMutationOptions<
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

export function getDeleteEnterprisesIdAdminsIdMemberMutationKey() {
  return ['enterprises', '/enterprises/:id/admins/:idMember', 'DELETE'] as const
}

export function getDeleteEnterprisesIdAdminsIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnterprisesIdAdminsIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>,
    ) {
      return parseResponse(client.enterprises[':id'].admins[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteEnterprisesIdAdminsIdMember<
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
                ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEnterprisesIdAdminsIdMemberMutationOptions<
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

export function getDeleteEnterprisesIdOrganizationsIdOrgMutationKey() {
  return ['enterprises', '/enterprises/:id/organizations/:idOrg', 'DELETE'] as const
}

export function getDeleteEnterprisesIdOrganizationsIdOrgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEnterprisesIdOrganizationsIdOrgMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']
      >,
    ) {
      return parseResponse(client.enterprises[':id'].organizations[':idOrg'].$delete(args, options))
    },
  })
}

export function useDeleteEnterprisesIdOrganizationsIdOrg<
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
                ReturnType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEnterprisesIdOrganizationsIdOrgMutationOptions<
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

export function getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
  >,
) {
  return ['enterprises', '/enterprises/:id/organizations/bulk/:idOrganizations', args] as const
}

export function getEnterprisesIdOrganizationsBulkIdOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey>
  >({
    queryKey: getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enterprises[':id'].organizations.bulk[':idOrganizations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnterprisesIdOrganizationsBulkIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey>
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
      ...getEnterprisesIdOrganizationsBulkIdOrganizationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnterprisesIdOrganizationsBulkIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnterprisesIdOrganizationsBulkIdOrganizationsQueryKey>
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
      ...getEnterprisesIdOrganizationsBulkIdOrganizationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLabelsIdQueryKey(args: InferRequestType<(typeof client.labels)[':id']['$get']>) {
  return ['labels', '/labels/:id', args] as const
}

export function getLabelsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.labels)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsIdQueryKey>
  >({
    queryKey: getLabelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLabelsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLabelsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLabelsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLabelsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLabelsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLabelsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutLabelsIdMutationKey() {
  return ['labels', '/labels/:id', 'PUT'] as const
}

export function getPutLabelsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.labels)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id']['$put']>) {
      return parseResponse(client.labels[':id'].$put(args, options))
    },
  })
}

export function usePutLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.labels)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLabelsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteLabelsIdMutationKey() {
  return ['labels', '/labels/:id', 'DELETE'] as const
}

export function getDeleteLabelsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id']['$delete']>) {
      return parseResponse(client.labels[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.labels)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLabelsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutLabelsIdFieldMutationKey() {
  return ['labels', '/labels/:id/:field', 'PUT'] as const
}

export function getPutLabelsIdFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id'][':field']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':id'][':field']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsIdFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':id'][':field']['$put']>) {
      return parseResponse(client.labels[':id'][':field'].$put(args, options))
    },
  })
}

export function usePutLabelsIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.labels)[':id'][':field']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.labels)[':id'][':field']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLabelsIdFieldMutationOptions<TError, TOnMutateResult>(
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

export function getPostLabelsMutationKey() {
  return ['labels', '/labels', 'POST'] as const
}

export function getPostLabelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
    TError,
    InferRequestType<typeof client.labels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLabelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.labels.$post>) {
      return parseResponse(client.labels.$post(args, options))
    },
  })
}

export function usePostLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
        TError,
        InferRequestType<typeof client.labels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsIdQueryKey(args: InferRequestType<(typeof client.lists)[':id']['$get']>) {
  return ['lists', '/lists/:id', args] as const
}

export function getListsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.lists)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdQueryKey>
  >({
    queryKey: getListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutListsIdMutationKey() {
  return ['lists', '/lists/:id', 'PUT'] as const
}

export function getPutListsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':id']['$put']>) {
      return parseResponse(client.lists[':id'].$put(args, options))
    },
  })
}

export function usePutListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListsMutationKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function getPostListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    InferRequestType<typeof client.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lists.$post>) {
      return parseResponse(client.lists.$post(args, options))
    },
  })
}

export function usePostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
        TError,
        InferRequestType<typeof client.lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListsIdArchiveAllCardsMutationKey() {
  return ['lists', '/lists/:id/archiveAllCards', 'POST'] as const
}

export function getPostListsIdArchiveAllCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':id']['archiveAllCards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsIdArchiveAllCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']>,
    ) {
      return parseResponse(client.lists[':id'].archiveAllCards.$post(args, options))
    },
  })
}

export function usePostListsIdArchiveAllCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['archiveAllCards']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsIdArchiveAllCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPostListsIdMoveAllCardsMutationKey() {
  return ['lists', '/lists/:id/moveAllCards', 'POST'] as const
}

export function getPostListsIdMoveAllCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':id']['moveAllCards']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListsIdMoveAllCardsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']>,
    ) {
      return parseResponse(client.lists[':id'].moveAllCards.$post(args, options))
    },
  })
}

export function usePostListsIdMoveAllCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['moveAllCards']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsIdMoveAllCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdClosedMutationKey() {
  return ['lists', '/lists/:id/closed', 'PUT'] as const
}

export function getPutListsIdClosedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['closed']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['closed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdClosedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':id']['closed']['$put']>) {
      return parseResponse(client.lists[':id'].closed.$put(args, options))
    },
  })
}

export function usePutListsIdClosed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['closed']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':id']['closed']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsIdClosedMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdIdBoardMutationKey() {
  return ['lists', '/lists/:id/idBoard', 'PUT'] as const
}

export function getPutListsIdIdBoardMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['idBoard']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdIdBoardMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']>) {
      return parseResponse(client.lists[':id'].idBoard.$put(args, options))
    },
  })
}

export function usePutListsIdIdBoard<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['idBoard']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsIdIdBoardMutationOptions<TError, TOnMutateResult>(
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

export function getPutListsIdFieldMutationKey() {
  return ['lists', '/lists/:id/:field', 'PUT'] as const
}

export function getPutListsIdFieldMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id'][':field']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':id'][':field']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsIdFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':id'][':field']['$put']>) {
      return parseResponse(client.lists[':id'][':field'].$put(args, options))
    },
  })
}

export function usePutListsIdField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id'][':field']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':id'][':field']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsIdFieldMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsIdActionsQueryKey(
  args: InferRequestType<(typeof client.lists)[':id']['actions']['$get']>,
) {
  return ['lists', '/lists/:id/actions', args] as const
}

export function getListsIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdActionsQueryKey>
  >({
    queryKey: getListsIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsIdBoardQueryKey(
  args: InferRequestType<(typeof client.lists)[':id']['board']['$get']>,
) {
  return ['lists', '/lists/:id/board', args] as const
}

export function getListsIdBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdBoardQueryKey>
  >({
    queryKey: getListsIdBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].board.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListsIdCardsQueryKey(
  args: InferRequestType<(typeof client.lists)[':id']['cards']['$get']>,
) {
  return ['lists', '/lists/:id/cards', args] as const
}

export function getListsIdCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdCardsQueryKey>
  >({
    queryKey: getListsIdCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['cards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsIdCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':id']['cards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsIdCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMembersIdQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
) {
  return ['members', '/members/:id', args] as const
}

export function getMembersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.members)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdQueryKey>
  >({
    queryKey: getMembersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutMembersIdMutationKey() {
  return ['members', '/members/:id', 'PUT'] as const
}

export function getPutMembersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.members)[':id']['$put']>) {
      return parseResponse(client.members[':id'].$put(args, options))
    },
  })
}

export function usePutMembersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMembersIdFieldQueryKey(
  args: InferRequestType<(typeof client.members)[':id'][':field']['$get']>,
) {
  return ['members', '/members/:id/:field', args] as const
}

export function getMembersIdFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdFieldQueryKey>
  >({
    queryKey: getMembersIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMembersIdActionsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['actions']['$get']>,
) {
  return ['members', '/members/:id/actions', args] as const
}

export function getMembersIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdActionsQueryKey>
  >({
    queryKey: getMembersIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMembersIdBoardBackgroundsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>,
) {
  return ['members', '/members/:id/boardBackgrounds', args] as const
}

export function getMembersIdBoardBackgroundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardBackgroundsQueryKey>
  >({
    queryKey: getMembersIdBoardBackgroundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].boardBackgrounds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardBackgroundsQueryKey>
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
      ...getMembersIdBoardBackgroundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardBackgroundsQueryKey>
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
      ...getMembersIdBoardBackgroundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMembersIdBoardBackgroundsMutationKey() {
  return ['members', '/members/:id/boardBackgrounds', 'POST'] as const
}

export function getPostMembersIdBoardBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdBoardBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']>,
    ) {
      return parseResponse(client.members[':id'].boardBackgrounds.$post(args, options))
    },
  })
}

export function usePostMembersIdBoardBackgrounds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdBoardBackgroundsMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdBoardBackgroundsIdBackgroundQueryKey(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
  >,
) {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', args] as const
}

export function getMembersIdBoardBackgroundsIdBackgroundQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardBackgroundsIdBackgroundQueryKey>
  >({
    queryKey: getMembersIdBoardBackgroundsIdBackgroundQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].boardBackgrounds[':idBackground'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdBoardBackgroundsIdBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardBackgroundsIdBackgroundQueryKey>
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
      ...getMembersIdBoardBackgroundsIdBackgroundQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdBoardBackgroundsIdBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardBackgroundsIdBackgroundQueryKey>
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
      ...getMembersIdBoardBackgroundsIdBackgroundQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMembersIdBoardBackgroundsIdBackgroundMutationKey() {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', 'PUT'] as const
}

export function getPutMembersIdBoardBackgroundsIdBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdBoardBackgroundsIdBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':id'].boardBackgrounds[':idBackground'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdBoardBackgroundsIdBackground<
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
                  (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']
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
  const mutationDefaults = getPutMembersIdBoardBackgroundsIdBackgroundMutationOptions<
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

export function getDeleteMembersIdBoardBackgroundsIdBackgroundMutationKey() {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', 'DELETE'] as const
}

export function getDeleteMembersIdBoardBackgroundsIdBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdBoardBackgroundsIdBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':id'].boardBackgrounds[':idBackground'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdBoardBackgroundsIdBackground<
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
                  (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
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
  const mutationDefaults = getDeleteMembersIdBoardBackgroundsIdBackgroundMutationOptions<
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

export function getMembersIdBoardStarsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>,
) {
  return ['members', '/members/:id/boardStars', args] as const
}

export function getMembersIdBoardStarsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardStarsQueryKey>
  >({
    queryKey: getMembersIdBoardStarsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].boardStars.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardStarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdBoardStarsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersIdBoardStars<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardStarsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdBoardStarsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMembersIdBoardStarsMutationKey() {
  return ['members', '/members/:id/boardStars', 'POST'] as const
}

export function getPostMembersIdBoardStarsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardStars']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdBoardStarsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['boardStars']['$post']>,
    ) {
      return parseResponse(client.members[':id'].boardStars.$post(args, options))
    },
  })
}

export function usePostMembersIdBoardStars<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['boardStars']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdBoardStarsMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdBoardStarsIdStarQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>,
) {
  return ['members', '/members/:id/boardStars/:idStar', args] as const
}

export function getMembersIdBoardStarsIdStarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardStarsIdStarQueryKey>
  >({
    queryKey: getMembersIdBoardStarsIdStarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].boardStars[':idStar'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdBoardStarsIdStar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardStarsIdStarQueryKey>
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
      ...getMembersIdBoardStarsIdStarQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdBoardStarsIdStar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardStarsIdStarQueryKey>
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
      ...getMembersIdBoardStarsIdStarQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMembersIdBoardStarsIdStarMutationKey() {
  return ['members', '/members/:id/boardStars/:idStar', 'PUT'] as const
}

export function getPutMembersIdBoardStarsIdStarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdBoardStarsIdStarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>,
    ) {
      return parseResponse(client.members[':id'].boardStars[':idStar'].$put(args, options))
    },
  })
}

export function usePutMembersIdBoardStarsIdStar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembersIdBoardStarsIdStarMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMembersIdBoardStarsIdStarMutationKey() {
  return ['members', '/members/:id/boardStars/:idStar', 'DELETE'] as const
}

export function getDeleteMembersIdBoardStarsIdStarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdBoardStarsIdStarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>,
    ) {
      return parseResponse(client.members[':id'].boardStars[':idStar'].$delete(args, options))
    },
  })
}

export function useDeleteMembersIdBoardStarsIdStar<
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
                ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMembersIdBoardStarsIdStarMutationOptions<
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

export function getMembersIdBoardsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['boards']['$get']>,
) {
  return ['members', '/members/:id/boards', args] as const
}

export function getMembersIdBoardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardsQueryKey>
  >({
    queryKey: getMembersIdBoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].boards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMembersIdBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdBoardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersIdBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdBoardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMembersIdBoardsInvitedQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>,
) {
  return ['members', '/members/:id/boardsInvited', args] as const
}

export function getMembersIdBoardsInvitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdBoardsInvitedQueryKey>
  >({
    queryKey: getMembersIdBoardsInvitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].boardsInvited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdBoardsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardsInvitedQueryKey>
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
      ...getMembersIdBoardsInvitedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdBoardsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdBoardsInvitedQueryKey>
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
      ...getMembersIdBoardsInvitedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMembersIdCardsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['cards']['$get']>,
) {
  return ['members', '/members/:id/cards', args] as const
}

export function getMembersIdCardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCardsQueryKey>
  >({
    queryKey: getMembersIdCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMembersIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['cards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersIdCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['cards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdCardsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMembersIdCustomBoardBackgroundsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>,
) {
  return ['members', '/members/:id/customBoardBackgrounds', args] as const
}

export function getMembersIdCustomBoardBackgroundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomBoardBackgroundsQueryKey>
  >({
    queryKey: getMembersIdCustomBoardBackgroundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].customBoardBackgrounds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdCustomBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomBoardBackgroundsQueryKey>
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
      ...getMembersIdCustomBoardBackgroundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdCustomBoardBackgrounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomBoardBackgroundsQueryKey>
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
      ...getMembersIdCustomBoardBackgroundsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMembersIdCustomBoardBackgroundsMutationKey() {
  return ['members', '/members/:id/customBoardBackgrounds', 'POST'] as const
}

export function getPostMembersIdCustomBoardBackgroundsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdCustomBoardBackgroundsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>,
    ) {
      return parseResponse(client.members[':id'].customBoardBackgrounds.$post(args, options))
    },
  })
}

export function usePostMembersIdCustomBoardBackgrounds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdCustomBoardBackgroundsMutationOptions<
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

export function getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
  >,
) {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', args] as const
}

export function getMembersIdCustomBoardBackgroundsIdBackgroundQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey>
  >({
    queryKey: getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].customBoardBackgrounds[':idBackground'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdCustomBoardBackgroundsIdBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey>
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
      ...getMembersIdCustomBoardBackgroundsIdBackgroundQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdCustomBoardBackgroundsIdBackground<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomBoardBackgroundsIdBackgroundQueryKey>
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
      ...getMembersIdCustomBoardBackgroundsIdBackgroundQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMembersIdCustomBoardBackgroundsIdBackgroundMutationKey() {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', 'PUT'] as const
}

export function getPutMembersIdCustomBoardBackgroundsIdBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdCustomBoardBackgroundsIdBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':id'].customBoardBackgrounds[':idBackground'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdCustomBoardBackgroundsIdBackground<
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
                  (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
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
  const mutationDefaults = getPutMembersIdCustomBoardBackgroundsIdBackgroundMutationOptions<
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

export function getDeleteMembersIdCustomBoardBackgroundsIdBackgroundMutationKey() {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', 'DELETE'] as const
}

export function getDeleteMembersIdCustomBoardBackgroundsIdBackgroundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdCustomBoardBackgroundsIdBackgroundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':id'].customBoardBackgrounds[':idBackground'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdCustomBoardBackgroundsIdBackground<
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
                  (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
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
  const mutationDefaults = getDeleteMembersIdCustomBoardBackgroundsIdBackgroundMutationOptions<
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

export function getMembersIdCustomEmojiQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>,
) {
  return ['members', '/members/:id/customEmoji', args] as const
}

export function getMembersIdCustomEmojiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomEmojiQueryKey>
  >({
    queryKey: getMembersIdCustomEmojiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].customEmoji.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdCustomEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomEmojiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdCustomEmojiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersIdCustomEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomEmojiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdCustomEmojiQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMembersIdCustomEmojiMutationKey() {
  return ['members', '/members/:id/customEmoji', 'POST'] as const
}

export function getPostMembersIdCustomEmojiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdCustomEmojiMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']>,
    ) {
      return parseResponse(client.members[':id'].customEmoji.$post(args, options))
    },
  })
}

export function usePostMembersIdCustomEmoji<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdCustomEmojiMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdCustomEmojiIdEmojiQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>,
) {
  return ['members', '/members/:id/customEmoji/:idEmoji', args] as const
}

export function getMembersIdCustomEmojiIdEmojiQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomEmojiIdEmojiQueryKey>
  >({
    queryKey: getMembersIdCustomEmojiIdEmojiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].customEmoji[':idEmoji'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdCustomEmojiIdEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomEmojiIdEmojiQueryKey>
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
      ...getMembersIdCustomEmojiIdEmojiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdCustomEmojiIdEmoji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomEmojiIdEmojiQueryKey>
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
      ...getMembersIdCustomEmojiIdEmojiQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMembersIdCustomStickersQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>,
) {
  return ['members', '/members/:id/customStickers', args] as const
}

export function getMembersIdCustomStickersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomStickersQueryKey>
  >({
    queryKey: getMembersIdCustomStickersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].customStickers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdCustomStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomStickersQueryKey>
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
      ...getMembersIdCustomStickersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdCustomStickers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomStickersQueryKey>
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
      ...getMembersIdCustomStickersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMembersIdCustomStickersMutationKey() {
  return ['members', '/members/:id/customStickers', 'POST'] as const
}

export function getPostMembersIdCustomStickersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['customStickers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdCustomStickersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['customStickers']['$post']>,
    ) {
      return parseResponse(client.members[':id'].customStickers.$post(args, options))
    },
  })
}

export function usePostMembersIdCustomStickers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['customStickers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdCustomStickersMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdCustomStickersIdStickerQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>,
) {
  return ['members', '/members/:id/customStickers/:idSticker', args] as const
}

export function getMembersIdCustomStickersIdStickerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdCustomStickersIdStickerQueryKey>
  >({
    queryKey: getMembersIdCustomStickersIdStickerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].customStickers[':idSticker'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdCustomStickersIdSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomStickersIdStickerQueryKey>
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
      ...getMembersIdCustomStickersIdStickerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdCustomStickersIdSticker<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdCustomStickersIdStickerQueryKey>
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
      ...getMembersIdCustomStickersIdStickerQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMembersIdCustomStickersIdStickerMutationKey() {
  return ['members', '/members/:id/customStickers/:idSticker', 'DELETE'] as const
}

export function getDeleteMembersIdCustomStickersIdStickerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdCustomStickersIdStickerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['customStickers'][':idSticker']['$delete']
      >,
    ) {
      return parseResponse(
        client.members[':id'].customStickers[':idSticker'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMembersIdCustomStickersIdSticker<
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
                  (typeof client.members)[':id']['customStickers'][':idSticker']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMembersIdCustomStickersIdStickerMutationOptions<
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

export function getMembersIdNotificationsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['notifications']['$get']>,
) {
  return ['members', '/members/:id/notifications', args] as const
}

export function getMembersIdNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdNotificationsQueryKey>
  >({
    queryKey: getMembersIdNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['notifications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdNotificationsQueryKey>
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
      ...getMembersIdNotificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['notifications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdNotificationsQueryKey>
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
      ...getMembersIdNotificationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMembersIdOrganizationsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['organizations']['$get']>,
) {
  return ['members', '/members/:id/organizations', args] as const
}

export function getMembersIdOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdOrganizationsQueryKey>
  >({
    queryKey: getMembersIdOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].organizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['organizations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdOrganizationsQueryKey>
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
      ...getMembersIdOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['organizations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdOrganizationsQueryKey>
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
      ...getMembersIdOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMembersIdOrganizationsInvitedQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>,
) {
  return ['members', '/members/:id/organizationsInvited', args] as const
}

export function getMembersIdOrganizationsInvitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdOrganizationsInvitedQueryKey>
  >({
    queryKey: getMembersIdOrganizationsInvitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].organizationsInvited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdOrganizationsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdOrganizationsInvitedQueryKey>
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
      ...getMembersIdOrganizationsInvitedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdOrganizationsInvited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdOrganizationsInvitedQueryKey>
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
      ...getMembersIdOrganizationsInvitedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMembersIdSavedSearchesQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>,
) {
  return ['members', '/members/:id/savedSearches', args] as const
}

export function getMembersIdSavedSearchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdSavedSearchesQueryKey>
  >({
    queryKey: getMembersIdSavedSearchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].savedSearches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdSavedSearches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdSavedSearchesQueryKey>
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
      ...getMembersIdSavedSearchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdSavedSearches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdSavedSearchesQueryKey>
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
      ...getMembersIdSavedSearchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMembersIdSavedSearchesMutationKey() {
  return ['members', '/members/:id/savedSearches', 'POST'] as const
}

export function getPostMembersIdSavedSearchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdSavedSearchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']>,
    ) {
      return parseResponse(client.members[':id'].savedSearches.$post(args, options))
    },
  })
}

export function usePostMembersIdSavedSearches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdSavedSearchesMutationOptions<TError, TOnMutateResult>(
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

export function getMembersIdSavedSearchesIdSearchQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>,
) {
  return ['members', '/members/:id/savedSearches/:idSearch', args] as const
}

export function getMembersIdSavedSearchesIdSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdSavedSearchesIdSearchQueryKey>
  >({
    queryKey: getMembersIdSavedSearchesIdSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].savedSearches[':idSearch'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdSavedSearchesIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdSavedSearchesIdSearchQueryKey>
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
      ...getMembersIdSavedSearchesIdSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdSavedSearchesIdSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdSavedSearchesIdSearchQueryKey>
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
      ...getMembersIdSavedSearchesIdSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMembersIdSavedSearchesIdSearchMutationKey() {
  return ['members', '/members/:id/savedSearches/:idSearch', 'PUT'] as const
}

export function getPutMembersIdSavedSearchesIdSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdSavedSearchesIdSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>,
    ) {
      return parseResponse(client.members[':id'].savedSearches[':idSearch'].$put(args, options))
    },
  })
}

export function usePutMembersIdSavedSearchesIdSearch<
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
                ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembersIdSavedSearchesIdSearchMutationOptions<
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

export function getDeleteMembersIdSavedSearchesIdSearchMutationKey() {
  return ['members', '/members/:id/savedSearches/:idSearch', 'DELETE'] as const
}

export function getDeleteMembersIdSavedSearchesIdSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMembersIdSavedSearchesIdSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']
      >,
    ) {
      return parseResponse(client.members[':id'].savedSearches[':idSearch'].$delete(args, options))
    },
  })
}

export function useDeleteMembersIdSavedSearchesIdSearch<
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
                ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMembersIdSavedSearchesIdSearchMutationOptions<
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

export function getMembersIdTokensQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['tokens']['$get']>,
) {
  return ['members', '/members/:id/tokens', args] as const
}

export function getMembersIdTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdTokensQueryKey>
  >({
    queryKey: getMembersIdTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMembersIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['tokens']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMembersIdTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMembersIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['tokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMembersIdTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMembersIdAvatarMutationKey() {
  return ['members', '/members/:id/avatar', 'POST'] as const
}

export function getPostMembersIdAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['avatar']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['avatar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdAvatarMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.members)[':id']['avatar']['$post']>) {
      return parseResponse(client.members[':id'].avatar.$post(args, options))
    },
  })
}

export function usePostMembersIdAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.members)[':id']['avatar']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['avatar']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getPostMembersIdOneTimeMessagesDismissedMutationKey() {
  return ['members', '/members/:id/oneTimeMessagesDismissed', 'POST'] as const
}

export function getPostMembersIdOneTimeMessagesDismissedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMembersIdOneTimeMessagesDismissedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>,
    ) {
      return parseResponse(client.members[':id'].oneTimeMessagesDismissed.$post(args, options))
    },
  })
}

export function usePostMembersIdOneTimeMessagesDismissed<
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
                ReturnType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMembersIdOneTimeMessagesDismissedMutationOptions<
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

export function getMembersIdNotificationChannelSettingsQueryKey(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>,
) {
  return ['members', '/members/:id/notificationChannelSettings', args] as const
}

export function getMembersIdNotificationChannelSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdNotificationChannelSettingsQueryKey>
  >({
    queryKey: getMembersIdNotificationChannelSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].notificationChannelSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdNotificationChannelSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdNotificationChannelSettingsQueryKey>
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
      ...getMembersIdNotificationChannelSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdNotificationChannelSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdNotificationChannelSettingsQueryKey>
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
      ...getMembersIdNotificationChannelSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMembersIdNotificationChannelSettingsMutationKey() {
  return ['members', '/members/:id/notificationChannelSettings', 'PUT'] as const
}

export function getPutMembersIdNotificationChannelSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdNotificationChannelSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>,
    ) {
      return parseResponse(client.members[':id'].notificationChannelSettings.$put(args, options))
    },
  })
}

export function usePutMembersIdNotificationChannelSettings<
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
                ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMembersIdNotificationChannelSettingsMutationOptions<
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

export function getMembersIdNotificationChannelSettingsChannelQueryKey(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
  >,
) {
  return ['members', '/members/:id/notificationChannelSettings/:channel', args] as const
}

export function getMembersIdNotificationChannelSettingsChannelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMembersIdNotificationChannelSettingsChannelQueryKey>
  >({
    queryKey: getMembersIdNotificationChannelSettingsChannelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members[':id'].notificationChannelSettings[':channel'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMembersIdNotificationChannelSettingsChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdNotificationChannelSettingsChannelQueryKey>
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
      ...getMembersIdNotificationChannelSettingsChannelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMembersIdNotificationChannelSettingsChannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMembersIdNotificationChannelSettingsChannelQueryKey>
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
      ...getMembersIdNotificationChannelSettingsChannelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutMembersIdNotificationChannelSettingsChannelMutationKey() {
  return ['members', '/members/:id/notificationChannelSettings/:channel', 'PUT'] as const
}

export function getPutMembersIdNotificationChannelSettingsChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdNotificationChannelSettingsChannelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':id'].notificationChannelSettings[':channel'].$put(args, options),
      )
    },
  })
}

export function usePutMembersIdNotificationChannelSettingsChannel<
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
                  (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
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
  const mutationDefaults = getPutMembersIdNotificationChannelSettingsChannelMutationOptions<
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

export function getPutMembersIdNotificationChannelSettingsChannelBlockedKeysMutationKey() {
  return [
    'members',
    '/members/:id/notificationChannelSettings/:channel/:blockedKeys',
    'PUT',
  ] as const
}

export function getPutMembersIdNotificationChannelSettingsChannelBlockedKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutMembersIdNotificationChannelSettingsChannelBlockedKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
      >,
    ) {
      return parseResponse(
        client.members[':id'].notificationChannelSettings[':channel'][':blockedKeys'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutMembersIdNotificationChannelSettingsChannelBlockedKeys<
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
                  (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
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
  const mutationDefaults =
    getPutMembersIdNotificationChannelSettingsChannelBlockedKeysMutationOptions<
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

export function getNotificationsIdQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
) {
  return ['notifications', '/notifications/:id', args] as const
}

export function getNotificationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdQueryKey>
  >({
    queryKey: getNotificationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutNotificationsIdMutationKey() {
  return ['notifications', '/notifications/:id', 'PUT'] as const
}

export function getPutNotificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notifications)[':id']['$put']>) {
      return parseResponse(client.notifications[':id'].$put(args, options))
    },
  })
}

export function usePutNotificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationsIdFieldQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>,
) {
  return ['notifications', '/notifications/:id/:field', args] as const
}

export function getNotificationsIdFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdFieldQueryKey>
  >({
    queryKey: getNotificationsIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNotificationsAllReadMutationKey() {
  return ['notifications', '/notifications/all/read', 'POST'] as const
}

export function getPostNotificationsAllReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.all.read.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.all.read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsAllReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.all.read.$post>) {
      return parseResponse(client.notifications.all.read.$post(args, options))
    },
  })
}

export function usePostNotificationsAllRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.all.read.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notifications.all.read.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationsAllReadMutationOptions<TError, TOnMutateResult>(
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

export function getPutNotificationsIdUnreadMutationKey() {
  return ['notifications', '/notifications/:id/unread', 'PUT'] as const
}

export function getPutNotificationsIdUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['unread']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)[':id']['unread']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsIdUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)[':id']['unread']['$put']>,
    ) {
      return parseResponse(client.notifications[':id'].unread.$put(args, options))
    },
  })
}

export function usePutNotificationsIdUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['unread']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications)[':id']['unread']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationsIdUnreadMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationsIdBoardQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['board']['$get']>,
) {
  return ['notifications', '/notifications/:id/board', args] as const
}

export function getNotificationsIdBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['board']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdBoardQueryKey>
  >({
    queryKey: getNotificationsIdBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].board.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['board']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdBoardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsIdBoardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNotificationsIdCardQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['card']['$get']>,
) {
  return ['notifications', '/notifications/:id/card', args] as const
}

export function getNotificationsIdCardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdCardQueryKey>
  >({
    queryKey: getNotificationsIdCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].card.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['card']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsIdCardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['card']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsIdCardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNotificationsIdListQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['list']['$get']>,
) {
  return ['notifications', '/notifications/:id/list', args] as const
}

export function getNotificationsIdListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdListQueryKey>
  >({
    queryKey: getNotificationsIdListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsIdListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsIdList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsIdListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNotificationsIdMemberQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['member']['$get']>,
) {
  return ['notifications', '/notifications/:id/member', args] as const
}

export function getNotificationsIdMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdMemberQueryKey>
  >({
    queryKey: getNotificationsIdMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].member.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['member']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdMemberQueryKey>
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
      ...getNotificationsIdMemberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationsIdMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['member']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdMemberQueryKey>
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
      ...getNotificationsIdMemberQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNotificationsIdMemberCreatorQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>,
) {
  return ['notifications', '/notifications/:id/memberCreator', args] as const
}

export function getNotificationsIdMemberCreatorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdMemberCreatorQueryKey>
  >({
    queryKey: getNotificationsIdMemberCreatorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].memberCreator.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsIdMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdMemberCreatorQueryKey>
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
      ...getNotificationsIdMemberCreatorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationsIdMemberCreator<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdMemberCreatorQueryKey>
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
      ...getNotificationsIdMemberCreatorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNotificationsIdOrganizationQueryKey(
  args: InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>,
) {
  return ['notifications', '/notifications/:id/organization', args] as const
}

export function getNotificationsIdOrganizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsIdOrganizationQueryKey>
  >({
    queryKey: getNotificationsIdOrganizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications[':id'].organization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdOrganizationQueryKey>
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
      ...getNotificationsIdOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationsIdOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsIdOrganizationQueryKey>
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
      ...getNotificationsIdOrganizationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function getPostOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$post>) {
      return parseResponse(client.organizations.$post(args, options))
    },
  })
}

export function usePostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.organizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
) {
  return ['organizations', '/organizations/:id', args] as const
}

export function getOrganizationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdQueryKey>
  >({
    queryKey: getOrganizationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganizationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganizationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganizationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutOrganizationsIdMutationKey() {
  return ['organizations', '/organizations/:id', 'PUT'] as const
}

export function getPutOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':id']['$put']>) {
      return parseResponse(client.organizations[':id'].$put(args, options))
    },
  })
}

export function usePutOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdMutationKey() {
  return ['organizations', '/organizations/:id', 'DELETE'] as const
}

export function getDeleteOrganizationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organizations)[':id']['$delete']>) {
      return parseResponse(client.organizations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdFieldQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>,
) {
  return ['organizations', '/organizations/:id/:field', args] as const
}

export function getOrganizationsIdFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdFieldQueryKey>
  >({
    queryKey: getOrganizationsIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganizationsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganizationsIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrganizationsIdActionsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>,
) {
  return ['organizations', '/organizations/:id/actions', args] as const
}

export function getOrganizationsIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdActionsQueryKey>
  >({
    queryKey: getOrganizationsIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdActionsQueryKey>
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
      ...getOrganizationsIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdActionsQueryKey>
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
      ...getOrganizationsIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsIdBoardsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>,
) {
  return ['organizations', '/organizations/:id/boards', args] as const
}

export function getOrganizationsIdBoardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdBoardsQueryKey>
  >({
    queryKey: getOrganizationsIdBoardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].boards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdBoardsQueryKey>
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
      ...getOrganizationsIdBoardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdBoardsQueryKey>
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
      ...getOrganizationsIdBoardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsIdExportsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>,
) {
  return ['organizations', '/organizations/:id/exports', args] as const
}

export function getOrganizationsIdExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdExportsQueryKey>
  >({
    queryKey: getOrganizationsIdExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].exports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdExportsQueryKey>
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
      ...getOrganizationsIdExportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdExports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdExportsQueryKey>
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
      ...getOrganizationsIdExportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsIdExportsMutationKey() {
  return ['organizations', '/organizations/:id/exports', 'POST'] as const
}

export function getPostOrganizationsIdExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['exports']['$post']>,
    ) {
      return parseResponse(client.organizations[':id'].exports.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['exports']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdExportsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdMembersQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$get']>,
) {
  return ['organizations', '/organizations/:id/members', args] as const
}

export function getOrganizationsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdMembersQueryKey>
  >({
    queryKey: getOrganizationsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdMembersQueryKey>
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
      ...getOrganizationsIdMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdMembersQueryKey>
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
      ...getOrganizationsIdMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganizationsIdMembersMutationKey() {
  return ['organizations', '/organizations/:id/members', 'PUT'] as const
}

export function getPutOrganizationsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['members']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['members']['$put']>,
    ) {
      return parseResponse(client.organizations[':id'].members.$put(args, options))
    },
  })
}

export function usePutOrganizationsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['members']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>,
) {
  return ['organizations', '/organizations/:id/memberships', args] as const
}

export function getOrganizationsIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdMembershipsQueryKey>
  >({
    queryKey: getOrganizationsIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdMembershipsQueryKey>
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
      ...getOrganizationsIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdMembershipsQueryKey>
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
      ...getOrganizationsIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsIdMembershipsIdMembershipQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
  >,
) {
  return ['organizations', '/organizations/:id/memberships/:idMembership', args] as const
}

export function getOrganizationsIdMembershipsIdMembershipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdMembershipsIdMembershipQueryKey>
  >({
    queryKey: getOrganizationsIdMembershipsIdMembershipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].memberships[':idMembership'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdMembershipsIdMembership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdMembershipsIdMembershipQueryKey>
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
      ...getOrganizationsIdMembershipsIdMembershipQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdMembershipsIdMembership<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':id']['memberships'][':idMembership']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdMembershipsIdMembershipQueryKey>
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
      ...getOrganizationsIdMembershipsIdMembershipQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsIdPluginDataQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>,
) {
  return ['organizations', '/organizations/:id/pluginData', args] as const
}

export function getOrganizationsIdPluginDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdPluginDataQueryKey>
  >({
    queryKey: getOrganizationsIdPluginDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].pluginData.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdPluginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdPluginDataQueryKey>
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
      ...getOrganizationsIdPluginDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdPluginData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdPluginDataQueryKey>
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
      ...getOrganizationsIdPluginDataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsIdTagsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>,
) {
  return ['organizations', '/organizations/:id/tags', args] as const
}

export function getOrganizationsIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdTagsQueryKey>
  >({
    queryKey: getOrganizationsIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganizationsIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganizationsIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrganizationsIdTagsMutationKey() {
  return ['organizations', '/organizations/:id/tags', 'POST'] as const
}

export function getPostOrganizationsIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['tags']['$post']>,
    ) {
      return parseResponse(client.organizations[':id'].tags.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrganizationsIdMembersIdMemberMutationKey() {
  return ['organizations', '/organizations/:id/members/:idMember', 'PUT'] as const
}

export function getPutOrganizationsIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>,
    ) {
      return parseResponse(client.organizations[':id'].members[':idMember'].$put(args, options))
    },
  })
}

export function usePutOrganizationsIdMembersIdMember<
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
                ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationsIdMembersIdMemberMutationOptions<
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

export function getDeleteOrganizationsIdMembersIdMemberMutationKey() {
  return ['organizations', '/organizations/:id/members/:idMember', 'DELETE'] as const
}

export function getDeleteOrganizationsIdMembersIdMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdMembersIdMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['members'][':idMember']['$delete']
      >,
    ) {
      return parseResponse(client.organizations[':id'].members[':idMember'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsIdMembersIdMember<
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
                ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdMembersIdMemberMutationOptions<
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

export function getPutOrganizationsIdMembersIdMemberDeactivatedMutationKey() {
  return ['organizations', '/organizations/:id/members/:idMember/deactivated', 'PUT'] as const
}

export function getPutOrganizationsIdMembersIdMemberDeactivatedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsIdMembersIdMemberDeactivatedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':id'].members[':idMember'].deactivated.$put(args, options),
      )
    },
  })
}

export function usePutOrganizationsIdMembersIdMemberDeactivated<
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
                  (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
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
  const mutationDefaults = getPutOrganizationsIdMembersIdMemberDeactivatedMutationOptions<
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

export function getPostOrganizationsIdLogoMutationKey() {
  return ['organizations', '/organizations/:id/logo', 'POST'] as const
}

export function getPostOrganizationsIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['logo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['logo']['$post']>,
    ) {
      return parseResponse(client.organizations[':id'].logo.$post(args, options))
    },
  })
}

export function usePostOrganizationsIdLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['logo']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsIdLogoMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdLogoMutationKey() {
  return ['organizations', '/organizations/:id/logo', 'DELETE'] as const
}

export function getDeleteOrganizationsIdLogoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdLogoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']>,
    ) {
      return parseResponse(client.organizations[':id'].logo.$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsIdLogo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdLogoMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsIdMembersIdMemberAllMutationKey() {
  return ['organizations', '/organizations/:id/members/:idMember/all', 'DELETE'] as const
}

export function getDeleteOrganizationsIdMembersIdMemberAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdMembersIdMemberAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':id'].members[':idMember'].all.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdMembersIdMemberAll<
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
                  (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdMembersIdMemberAllMutationOptions<
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

export function getDeleteOrganizationsIdPrefsAssociatedDomainMutationKey() {
  return ['organizations', '/organizations/:id/prefs/associatedDomain', 'DELETE'] as const
}

export function getDeleteOrganizationsIdPrefsAssociatedDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdPrefsAssociatedDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':id'].prefs.associatedDomain.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdPrefsAssociatedDomain<
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
                  (typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdPrefsAssociatedDomainMutationOptions<
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

export function getDeleteOrganizationsIdPrefsOrgInviteRestrictMutationKey() {
  return ['organizations', '/organizations/:id/prefs/orgInviteRestrict', 'DELETE'] as const
}

export function getDeleteOrganizationsIdPrefsOrgInviteRestrictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdPrefsOrgInviteRestrictMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':id'].prefs.orgInviteRestrict.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsIdPrefsOrgInviteRestrict<
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
                  (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsIdPrefsOrgInviteRestrictMutationOptions<
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

export function getDeleteOrganizationsIdTagsIdTagMutationKey() {
  return ['organizations', '/organizations/:id/tags/:idTag', 'DELETE'] as const
}

export function getDeleteOrganizationsIdTagsIdTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsIdTagsIdTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>,
    ) {
      return parseResponse(client.organizations[':id'].tags[':idTag'].$delete(args, options))
    },
  })
}

export function useDeleteOrganizationsIdTagsIdTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganizationsIdTagsIdTagMutationOptions<
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

export function getOrganizationsIdNewBillableGuestsIdBoardQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
  >,
) {
  return ['organizations', '/organizations/:id/newBillableGuests/:idBoard', args] as const
}

export function getOrganizationsIdNewBillableGuestsIdBoardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIdNewBillableGuestsIdBoardQueryKey>
  >({
    queryKey: getOrganizationsIdNewBillableGuestsIdBoardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':id'].newBillableGuests[':idBoard'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsIdNewBillableGuestsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdNewBillableGuestsIdBoardQueryKey>
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
      ...getOrganizationsIdNewBillableGuestsIdBoardQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsIdNewBillableGuestsIdBoard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsIdNewBillableGuestsIdBoardQueryKey>
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
      ...getOrganizationsIdNewBillableGuestsIdBoardQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPluginsIdIndexQueryKey(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$get']>,
) {
  return ['plugins', '/plugins/:id/', args] as const
}

export function getPluginsIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsIdIndexQueryKey>
  >({
    queryKey: getPluginsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins[':id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePluginsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPluginsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePluginsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPluginsIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPluginsIdIndexMutationKey() {
  return ['plugins', '/plugins/:id/', 'PUT'] as const
}

export function getPutPluginsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.plugins)[':id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPluginsIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plugins)[':id']['index']['$put']>) {
      return parseResponse(client.plugins[':id'].index.$put(args, options))
    },
  })
}

export function usePutPluginsIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.plugins)[':id']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPluginsIdIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostPluginsIdPluginListingsMutationKey() {
  return ['plugins', '/plugins/:idPlugin/listings', 'POST'] as const
}

export function getPostPluginsIdPluginListingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plugins)[':idPlugin']['listings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPluginsIdPluginListingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']>,
    ) {
      return parseResponse(client.plugins[':idPlugin'].listings.$post(args, options))
    },
  })
}

export function usePostPluginsIdPluginListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.plugins)[':idPlugin']['listings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPluginsIdPluginListingsMutationOptions<TError, TOnMutateResult>(
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

export function getPluginsIdComplianceMemberPrivacyQueryKey(
  args: InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>,
) {
  return ['plugins', '/plugins/:id/compliance/memberPrivacy', args] as const
}

export function getPluginsIdComplianceMemberPrivacyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPluginsIdComplianceMemberPrivacyQueryKey>
  >({
    queryKey: getPluginsIdComplianceMemberPrivacyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins[':id'].compliance.memberPrivacy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePluginsIdComplianceMemberPrivacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsIdComplianceMemberPrivacyQueryKey>
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
      ...getPluginsIdComplianceMemberPrivacyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePluginsIdComplianceMemberPrivacy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPluginsIdComplianceMemberPrivacyQueryKey>
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
      ...getPluginsIdComplianceMemberPrivacyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPluginsIdPluginListingsIdListingMutationKey() {
  return ['plugins', '/plugins/:idPlugin/listings/:idListing', 'PUT'] as const
}

export function getPutPluginsIdPluginListingsIdListingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPluginsIdPluginListingsIdListingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']
      >,
    ) {
      return parseResponse(client.plugins[':idPlugin'].listings[':idListing'].$put(args, options))
    },
  })
}

export function usePutPluginsIdPluginListingsIdListing<
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
                ReturnType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPluginsIdPluginListingsIdListingMutationOptions<
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

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchMembersIndexQueryKey(
  args: InferRequestType<typeof client.search.members.index.$get>,
) {
  return ['search', '/search/members/', args] as const
}

export function getSearchMembersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.members.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchMembersIndexQueryKey>
  >({
    queryKey: getSearchMembersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.members.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchMembersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.members.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchMembersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchMembersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchMembersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.members.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchMembersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchMembersIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTokensTokenQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
) {
  return ['tokens', '/tokens/:token', args] as const
}

export function getTokensTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenQueryKey>
  >({
    queryKey: getTokensTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTokensToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTokensTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTokensToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTokensTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTokensTokenMemberQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
) {
  return ['tokens', '/tokens/:token/member', args] as const
}

export function getTokensTokenMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenMemberQueryKey>
  >({
    queryKey: getTokensTokenMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].member.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTokensTokenMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTokensTokenMemberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTokensTokenMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenMemberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTokensTokenMemberQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTokensTokenWebhooksQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
) {
  return ['tokens', '/tokens/:token/webhooks', args] as const
}

export function getTokensTokenWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenWebhooksQueryKey>
  >({
    queryKey: getTokensTokenWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTokensTokenWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTokensTokenWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTokensTokenWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTokensTokenWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTokensTokenWebhooksMutationKey() {
  return ['tokens', '/tokens/:token/webhooks', 'POST'] as const
}

export function getPostTokensTokenWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTokensTokenWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']>,
    ) {
      return parseResponse(client.tokens[':token'].webhooks.$post(args, options))
    },
  })
}

export function usePostTokensTokenWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTokensTokenWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getTokensTokenWebhooksIdWebhookQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
) {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', args] as const
}

export function getTokensTokenWebhooksIdWebhookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenWebhooksIdWebhookQueryKey>
  >({
    queryKey: getTokensTokenWebhooksIdWebhookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].webhooks[':idWebhook'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTokensTokenWebhooksIdWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenWebhooksIdWebhookQueryKey>
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
      ...getTokensTokenWebhooksIdWebhookQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTokensTokenWebhooksIdWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenWebhooksIdWebhookQueryKey>
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
      ...getTokensTokenWebhooksIdWebhookQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTokensTokenWebhooksIdWebhookMutationKey() {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', 'PUT'] as const
}

export function getPutTokensTokenWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTokensTokenWebhooksIdWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>,
    ) {
      return parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$put(args, options))
    },
  })
}

export function usePutTokensTokenWebhooksIdWebhook<
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
                ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTokensTokenWebhooksIdWebhookMutationOptions<
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

export function getDeleteTokensTokenWebhooksIdWebhookMutationKey() {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', 'DELETE'] as const
}

export function getDeleteTokensTokenWebhooksIdWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokensTokenWebhooksIdWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>,
    ) {
      return parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$delete(args, options))
    },
  })
}

export function useDeleteTokensTokenWebhooksIdWebhook<
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
                ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTokensTokenWebhooksIdWebhookMutationOptions<
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

export function getDeleteTokensTokenIndexMutationKey() {
  return ['tokens', '/tokens/:token/', 'DELETE'] as const
}

export function getDeleteTokensTokenIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['index']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':token']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokensTokenIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tokens)[':token']['index']['$delete']>) {
      return parseResponse(client.tokens[':token'].index.$delete(args, options))
    },
  })
}

export function useDeleteTokensTokenIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tokens)[':token']['index']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tokens)[':token']['index']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTokensTokenIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksIndexMutationKey() {
  return ['webhooks', '/webhooks/', 'POST'] as const
}

export function getPostWebhooksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.index.$post>) {
      return parseResponse(client.webhooks.index.$post(args, options))
    },
  })
}

export function usePostWebhooksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksIndexMutationOptions<TError, TOnMutateResult>(
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
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
      >
    >,
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
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
          >
        >,
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

export function getWebhooksIdFieldQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>,
) {
  return ['webhooks', '/webhooks/:id/:field', args] as const
}

export function getWebhooksIdFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksIdFieldQueryKey>
  >({
    queryKey: getWebhooksIdFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':id'][':field'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhooksIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhooksIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhooksIdField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksIdFieldQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhooksIdFieldQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
