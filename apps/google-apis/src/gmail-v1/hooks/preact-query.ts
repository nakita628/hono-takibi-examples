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

export function getGmailKey() {
  return ['gmail'] as const
}

export function getGmailV1UsersUserIdDraftsQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/drafts', args] as const
}

export function getGmailV1UsersUserIdDraftsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdDraftsQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdDraftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].drafts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdDrafts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdDraftsQueryKey>
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
      ...getGmailV1UsersUserIdDraftsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdDrafts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdDraftsQueryKey>
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
      ...getGmailV1UsersUserIdDraftsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdDraftsMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts', 'POST'] as const
}

export function getPostGmailV1UsersUserIdDraftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdDraftsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].drafts.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdDraftsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGmailV1UsersUserIdDraftsSendMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/send', 'POST'] as const
}

export function getPostGmailV1UsersUserIdDraftsSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdDraftsSendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].drafts.send.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdDraftsSend<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts']['send']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdDraftsSendMutationOptions<
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

export function getGmailV1UsersUserIdDraftsIdQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', args] as const
}

export function getGmailV1UsersUserIdDraftsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdDraftsIdQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdDraftsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].drafts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdDraftsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdDraftsIdQueryKey>
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
      ...getGmailV1UsersUserIdDraftsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdDraftsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdDraftsIdQueryKey>
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
      ...getGmailV1UsersUserIdDraftsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdDraftsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdDraftsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdDraftsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdDraftsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGmailV1UsersUserIdDraftsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGmailV1UsersUserIdDraftsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/drafts/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdDraftsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdDraftsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].drafts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGmailV1UsersUserIdDraftsId<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['drafts'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGmailV1UsersUserIdDraftsIdMutationOptions<
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

export function getGmailV1UsersUserIdHistoryQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/history', args] as const
}

export function getGmailV1UsersUserIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdHistoryQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdHistoryQueryKey>
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
      ...getGmailV1UsersUserIdHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdHistoryQueryKey>
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
      ...getGmailV1UsersUserIdHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGmailV1UsersUserIdLabelsQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/labels', args] as const
}

export function getGmailV1UsersUserIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdLabelsQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdLabelsQueryKey>
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
      ...getGmailV1UsersUserIdLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdLabelsQueryKey>
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
      ...getGmailV1UsersUserIdLabelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdLabelsMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels', 'POST'] as const
}

export function getPostGmailV1UsersUserIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].labels.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getGmailV1UsersUserIdLabelsIdQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', args] as const
}

export function getGmailV1UsersUserIdLabelsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdLabelsIdQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdLabelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].labels[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdLabelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdLabelsIdQueryKey>
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
      ...getGmailV1UsersUserIdLabelsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdLabelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdLabelsIdQueryKey>
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
      ...getGmailV1UsersUserIdLabelsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdLabelsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGmailV1UsersUserIdLabelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGmailV1UsersUserIdLabelsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGmailV1UsersUserIdLabelsId<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGmailV1UsersUserIdLabelsIdMutationOptions<
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

export function getPatchGmailV1UsersUserIdLabelsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/labels/:id', 'PATCH'] as const
}

export function getPatchGmailV1UsersUserIdLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGmailV1UsersUserIdLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].labels[':id'].$patch(args, options))
    },
  })
}

export function usePatchGmailV1UsersUserIdLabelsId<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['labels'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGmailV1UsersUserIdLabelsIdMutationOptions<
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

export function getGmailV1UsersUserIdMessagesQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/messages', args] as const
}

export function getGmailV1UsersUserIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdMessagesQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdMessagesQueryKey>
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
      ...getGmailV1UsersUserIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdMessagesQueryKey>
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
      ...getGmailV1UsersUserIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdMessagesMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].messages.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesBatchDeleteMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/batchDelete', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages.batchDelete.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesBatchDelete<
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
                  (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['messages']['batchDelete']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesBatchDeleteMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesBatchModifyMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/batchModify', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesBatchModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesBatchModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages.batchModify.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesBatchModify<
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
                  (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['messages']['batchModify']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesBatchModifyMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesImportMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/import', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].messages.import.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesImport<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesImportMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesSendMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/send', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].messages.send.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesSend<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages']['send']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesSendMutationOptions<
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

export function getGmailV1UsersUserIdMessagesIdQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id', args] as const
}

export function getGmailV1UsersUserIdMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdMessagesIdQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdMessagesIdQueryKey>
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
      ...getGmailV1UsersUserIdMessagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdMessagesIdQueryKey>
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
      ...getGmailV1UsersUserIdMessagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdMessagesIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdMessagesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].messages[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGmailV1UsersUserIdMessagesId<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['messages'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGmailV1UsersUserIdMessagesIdMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesIdModifyMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/modify', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesIdModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':id'].modify.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesIdModify<
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
                  (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['messages'][':id']['modify']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesIdModifyMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesIdTrashMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/trash', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesIdTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesIdTrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':id'].trash.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesIdTrash<
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
                  (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['messages'][':id']['trash']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesIdTrashMutationOptions<
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

export function getPostGmailV1UsersUserIdMessagesIdUntrashMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/messages/:id/untrash', 'POST'] as const
}

export function getPostGmailV1UsersUserIdMessagesIdUntrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdMessagesIdUntrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':id'].untrash.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdMessagesIdUntrash<
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
                  (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['messages'][':id']['untrash']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdMessagesIdUntrashMutationOptions<
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

export function getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/messages/:messageId/attachments/:id', args] as const
}

export function getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].messages[':messageId'].attachments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdMessagesMessageIdAttachmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey>
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
      ...getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdMessagesMessageIdAttachmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['messages'][':messageId']['attachments'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryKey>
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
      ...getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGmailV1UsersUserIdProfileQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/profile', args] as const
}

export function getGmailV1UsersUserIdProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdProfileQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].profile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdProfileQueryKey>
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
      ...getGmailV1UsersUserIdProfileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['profile']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdProfileQueryKey>
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
      ...getGmailV1UsersUserIdProfileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGmailV1UsersUserIdSettingsAutoForwardingQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/autoForwarding', args] as const
}

export function getGmailV1UsersUserIdSettingsAutoForwardingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsAutoForwardingQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsAutoForwardingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.autoForwarding.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsAutoForwarding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsAutoForwardingQueryKey>
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
      ...getGmailV1UsersUserIdSettingsAutoForwardingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsAutoForwarding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsAutoForwardingQueryKey>
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
      ...getGmailV1UsersUserIdSettingsAutoForwardingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsAutoForwardingMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/autoForwarding', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsAutoForwardingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsAutoForwardingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.autoForwarding.$put(args, options),
      )
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsAutoForwarding<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['autoForwarding']['$put']
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
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsAutoForwardingMutationOptions<
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

export function getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/identities', args] as const
}

export function getGmailV1UsersUserIdSettingsCseIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsCseIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey>
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
      ...getGmailV1UsersUserIdSettingsCseIdentitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsCseIdentities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesQueryKey>
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
      ...getGmailV1UsersUserIdSettingsCseIdentitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsCseIdentitiesMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/identities', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsCseIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseIdentities<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsCseIdentitiesMutationOptions<
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

export function getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:cseEmailAddress',
    args,
  ] as const
}

export function getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey>
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
      ...getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryKey>
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
      ...getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:cseEmailAddress',
    'DELETE',
  ] as const
}

export function getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities[':cseEmailAddress'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddress<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':cseEmailAddress']['$delete']
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
    getDeleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressMutationOptions<
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

export function getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/identities/:emailAddress',
    'PATCH',
  ] as const
}

export function getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.identities[':emailAddress'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddress<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['cse']['identities'][':emailAddress']['$patch']
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
    getPatchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressMutationOptions<
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

export function getGmailV1UsersUserIdSettingsCseKeypairsQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/keypairs', args] as const
}

export function getGmailV1UsersUserIdSettingsCseKeypairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsCseKeypairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsCseKeypairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsQueryKey>
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
      ...getGmailV1UsersUserIdSettingsCseKeypairsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsCseKeypairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsQueryKey>
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
      ...getGmailV1UsersUserIdSettingsCseKeypairsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/keypairs', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseKeypairsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairs<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsCseKeypairsMutationOptions<
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

export function getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId', args] as const
}

export function getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsCseKeypairsKeyPairId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey>
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
      ...getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsCseKeypairsKeyPairId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryKey>
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
      ...getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:disable',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:disable'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisable<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:disable']['$post']
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
    getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableMutationOptions<
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

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:enable',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:enable'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnable<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:enable']['$post']
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
    getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableMutationOptions<
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

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/cse/keypairs/:keyPairId:obliterate',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.cse.keypairs[':keyPairId:obliterate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterate<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['cse']['keypairs'][':keyPairId:obliterate']['$post']
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
    getPostGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateMutationOptions<
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

export function getGmailV1UsersUserIdSettingsDelegatesQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates', args] as const
}

export function getGmailV1UsersUserIdSettingsDelegatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsDelegatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.delegates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsDelegates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesQueryKey>
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
      ...getGmailV1UsersUserIdSettingsDelegatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsDelegates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesQueryKey>
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
      ...getGmailV1UsersUserIdSettingsDelegatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsDelegatesMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsDelegatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsDelegatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.delegates.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsDelegates<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['delegates']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsDelegatesMutationOptions<
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

export function getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates/:delegateEmail', args] as const
}

export function getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsDelegatesDelegateEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey>
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
      ...getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsDelegatesDelegateEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryKey>
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
      ...getGmailV1UsersUserIdSettingsDelegatesDelegateEmailQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/delegates/:delegateEmail', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.delegates[':delegateEmail'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmail<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['delegates'][':delegateEmail']['$delete']
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailMutationOptions<
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

export function getGmailV1UsersUserIdSettingsFiltersQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters', args] as const
}

export function getGmailV1UsersUserIdSettingsFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.filters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersQueryKey>
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
      ...getGmailV1UsersUserIdSettingsFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersQueryKey>
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
      ...getGmailV1UsersUserIdSettingsFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsFiltersMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.filters.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsFilters<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['filters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsFiltersMutationOptions<
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

export function getGmailV1UsersUserIdSettingsFiltersIdQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters/:id', args] as const
}

export function getGmailV1UsersUserIdSettingsFiltersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersIdQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsFiltersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.filters[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsFiltersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersIdQueryKey>
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
      ...getGmailV1UsersUserIdSettingsFiltersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsFiltersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsFiltersIdQueryKey>
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
      ...getGmailV1UsersUserIdSettingsFiltersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsFiltersIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/filters/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdSettingsFiltersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsFiltersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.filters[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsFiltersId<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['filters'][':id']['$delete']
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdSettingsFiltersIdMutationOptions<
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

export function getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/forwardingAddresses', args] as const
}

export function getGmailV1UsersUserIdSettingsForwardingAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.forwardingAddresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsForwardingAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey>
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
      ...getGmailV1UsersUserIdSettingsForwardingAddressesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsForwardingAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesQueryKey>
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
      ...getGmailV1UsersUserIdSettingsForwardingAddressesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsForwardingAddressesMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/forwardingAddresses', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsForwardingAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsForwardingAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.forwardingAddresses.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsForwardingAddresses<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsForwardingAddressesMutationOptions<
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

export function getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/forwardingAddresses/:forwardingEmail',
    args,
  ] as const
}

export function getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey>
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
      ...getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryKey>
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
      ...getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/forwardingAddresses/:forwardingEmail',
    'DELETE',
  ] as const
}

export function getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.forwardingAddresses[':forwardingEmail'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmail<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['forwardingAddresses'][':forwardingEmail']['$delete']
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
    getDeleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailMutationOptions<
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

export function getGmailV1UsersUserIdSettingsImapQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/imap', args] as const
}

export function getGmailV1UsersUserIdSettingsImapQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsImapQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsImapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.imap.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsImap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsImapQueryKey>
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
      ...getGmailV1UsersUserIdSettingsImapQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsImap<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsImapQueryKey>
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
      ...getGmailV1UsersUserIdSettingsImapQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsImapMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/imap', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsImapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsImapMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.imap.$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsImap<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['imap']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsImapMutationOptions<
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

export function getGmailV1UsersUserIdSettingsLanguageQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/language', args] as const
}

export function getGmailV1UsersUserIdSettingsLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsLanguageQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.language.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsLanguageQueryKey>
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
      ...getGmailV1UsersUserIdSettingsLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['language']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsLanguageQueryKey>
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
      ...getGmailV1UsersUserIdSettingsLanguageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsLanguageMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/language', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsLanguageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsLanguageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.language.$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsLanguage<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['language']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsLanguageMutationOptions<
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

export function getGmailV1UsersUserIdSettingsPopQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/pop', args] as const
}

export function getGmailV1UsersUserIdSettingsPopQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsPopQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsPopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.pop.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsPop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsPopQueryKey>
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
      ...getGmailV1UsersUserIdSettingsPopQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsPop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsPopQueryKey>
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
      ...getGmailV1UsersUserIdSettingsPopQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsPopMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/pop', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsPopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsPopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.pop.$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsPop<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['pop']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsPopMutationOptions<
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

export function getGmailV1UsersUserIdSettingsSendAsQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs', args] as const
}

export function getGmailV1UsersUserIdSettingsSendAsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsSendAsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsSendAs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsQueryKey>
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
      ...getGmailV1UsersUserIdSettingsSendAsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsSendAs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsQueryKey>
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
      ...getGmailV1UsersUserIdSettingsSendAsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsSendAsMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsSendAsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsSendAsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.sendAs.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsSendAs<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['sendAs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsSendAsMutationOptions<
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

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', args] as const
}

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsSendAsSendAsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey>
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
      ...getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsSendAsSendAsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryKey>
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
      ...getGmailV1UsersUserIdSettingsSendAsSendAsEmailQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$put(args, options),
      )
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsSendAsSendAsEmail<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$put']
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
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
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

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmail<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$delete']
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
  const mutationDefaults = getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
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

export function getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail', 'PATCH'] as const
}

export function getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].$patch(args, options),
      )
    },
  })
}

export function usePatchGmailV1UsersUserIdSettingsSendAsSendAsEmail<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['$patch']
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
  const mutationDefaults = getPatchGmailV1UsersUserIdSettingsSendAsSendAsEmailMutationOptions<
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

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
  >,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo', args] as const
}

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey>
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
      ...getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryKey>
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
      ...getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfo<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo']['$post']
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
    getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoMutationOptions<
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

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
  >,
) {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id',
    args,
  ] as const
}

export function getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey>
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
      ...getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryKey>
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
      ...getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id',
    'DELETE',
  ] as const
}

export function getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoId<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['$delete']
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
    getDeleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdMutationOptions<
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

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultMutationKey() {
  return [
    'gmail',
    '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/smimeInfo/:id/setDefault',
    'POST',
  ] as const
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].smimeInfo[
          ':id'
        ].setDefault.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefault<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['smimeInfo'][':id']['setDefault']['$post']
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
    getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultMutationOptions<
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

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/sendAs/:sendAsEmail/verify', 'POST'] as const
}

export function getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.sendAs[':sendAsEmail'].verify.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerify<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['settings']['sendAs'][':sendAsEmail']['verify']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyMutationOptions<
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

export function getGmailV1UsersUserIdSettingsVacationQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/settings/vacation', args] as const
}

export function getGmailV1UsersUserIdSettingsVacationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdSettingsVacationQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdSettingsVacationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].settings.vacation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdSettingsVacation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsVacationQueryKey>
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
      ...getGmailV1UsersUserIdSettingsVacationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdSettingsVacation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdSettingsVacationQueryKey>
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
      ...getGmailV1UsersUserIdSettingsVacationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGmailV1UsersUserIdSettingsVacationMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/settings/vacation', 'PUT'] as const
}

export function getPutGmailV1UsersUserIdSettingsVacationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGmailV1UsersUserIdSettingsVacationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].settings.vacation.$put(args, options))
    },
  })
}

export function usePutGmailV1UsersUserIdSettingsVacation<
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
                  (typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['settings']['vacation']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGmailV1UsersUserIdSettingsVacationMutationOptions<
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

export function getPostGmailV1UsersUserIdStopMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/stop', 'POST'] as const
}

export function getPostGmailV1UsersUserIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].stop.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdStopMutationOptions<TError, TOnMutateResult>(
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

export function getGmailV1UsersUserIdThreadsQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/threads', args] as const
}

export function getGmailV1UsersUserIdThreadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdThreadsQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdThreadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdThreadsQueryKey>
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
      ...getGmailV1UsersUserIdThreadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdThreads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdThreadsQueryKey>
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
      ...getGmailV1UsersUserIdThreadsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGmailV1UsersUserIdThreadsIdQueryKey(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>,
) {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id', args] as const
}

export function getGmailV1UsersUserIdThreadsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGmailV1UsersUserIdThreadsIdQueryKey>
  >({
    queryKey: getGmailV1UsersUserIdThreadsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGmailV1UsersUserIdThreadsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdThreadsIdQueryKey>
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
      ...getGmailV1UsersUserIdThreadsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGmailV1UsersUserIdThreadsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGmailV1UsersUserIdThreadsIdQueryKey>
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
      ...getGmailV1UsersUserIdThreadsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteGmailV1UsersUserIdThreadsIdMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id', 'DELETE'] as const
}

export function getDeleteGmailV1UsersUserIdThreadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGmailV1UsersUserIdThreadsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].threads[':id'].$delete(args, options))
    },
  })
}

export function useDeleteGmailV1UsersUserIdThreadsId<
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
                ReturnType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGmailV1UsersUserIdThreadsIdMutationOptions<
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

export function getPostGmailV1UsersUserIdThreadsIdModifyMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/modify', 'POST'] as const
}

export function getPostGmailV1UsersUserIdThreadsIdModifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdThreadsIdModifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads[':id'].modify.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdThreadsIdModify<
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
                  (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['threads'][':id']['modify']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdThreadsIdModifyMutationOptions<
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

export function getPostGmailV1UsersUserIdThreadsIdTrashMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/trash', 'POST'] as const
}

export function getPostGmailV1UsersUserIdThreadsIdTrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdThreadsIdTrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads[':id'].trash.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdThreadsIdTrash<
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
                  (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['threads'][':id']['trash']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdThreadsIdTrashMutationOptions<
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

export function getPostGmailV1UsersUserIdThreadsIdUntrashMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/threads/:id/untrash', 'POST'] as const
}

export function getPostGmailV1UsersUserIdThreadsIdUntrashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdThreadsIdUntrashMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
      >,
    ) {
      return parseResponse(
        client.gmail.v1.users[':userId'].threads[':id'].untrash.$post(args, options),
      )
    },
  })
}

export function usePostGmailV1UsersUserIdThreadsIdUntrash<
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
                  (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.gmail.v1.users)[':userId']['threads'][':id']['untrash']['$post']
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
  const mutationDefaults = getPostGmailV1UsersUserIdThreadsIdUntrashMutationOptions<
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

export function getPostGmailV1UsersUserIdWatchMutationKey() {
  return ['gmail', '/gmail/v1/users/:userId/watch', 'POST'] as const
}

export function getPostGmailV1UsersUserIdWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGmailV1UsersUserIdWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>,
    ) {
      return parseResponse(client.gmail.v1.users[':userId'].watch.$post(args, options))
    },
  })
}

export function usePostGmailV1UsersUserIdWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.gmail.v1.users)[':userId']['watch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGmailV1UsersUserIdWatchMutationOptions<TError, TOnMutateResult>(
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
