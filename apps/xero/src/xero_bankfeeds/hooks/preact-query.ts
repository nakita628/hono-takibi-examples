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

export function getFeedConnectionsKey() {
  return ['FeedConnections'] as const
}

export function getStatementsKey() {
  return ['Statements'] as const
}

export function getFeedConnectionsQueryKey(
  args: InferRequestType<typeof client.FeedConnections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FeedConnections', '/FeedConnections', keyArgs] as const
}

export function getFeedConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.FeedConnections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeedConnectionsQueryKey>
  >({
    queryKey: getFeedConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FeedConnections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFeedConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.FeedConnections.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeedConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFeedConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFeedConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.FeedConnections.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeedConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFeedConnectionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFeedConnectionsMutationKey() {
  return ['FeedConnections', '/FeedConnections', 'POST'] as const
}

export function getPostFeedConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.FeedConnections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.FeedConnections.$post>) {
      return parseResponse(client.FeedConnections.$post(args, options))
    },
  })
}

export function usePostFeedConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.FeedConnections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFeedConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getFeedConnectionsIdQueryKey(
  args: InferRequestType<(typeof client.FeedConnections)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['FeedConnections', '/FeedConnections/:id', keyArgs] as const
}

export function getFeedConnectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.FeedConnections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedConnectionsIdQueryKey>
  >({
    queryKey: getFeedConnectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FeedConnections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFeedConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.FeedConnections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeedConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFeedConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFeedConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.FeedConnections)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFeedConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFeedConnectionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFeedConnectionsDeleteRequestsMutationKey() {
  return ['FeedConnections', '/FeedConnections/DeleteRequests', 'POST'] as const
}

export function getPostFeedConnectionsDeleteRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.FeedConnections.DeleteRequests.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.FeedConnections.DeleteRequests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedConnectionsDeleteRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.FeedConnections.DeleteRequests.$post>) {
      return parseResponse(client.FeedConnections.DeleteRequests.$post(args, options))
    },
  })
}

export function usePostFeedConnectionsDeleteRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.FeedConnections.DeleteRequests.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.FeedConnections.DeleteRequests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFeedConnectionsDeleteRequestsMutationOptions<
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

export function getStatementsQueryKey(args: InferRequestType<typeof client.Statements.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Statements', '/Statements', keyArgs] as const
}

export function getStatementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Statements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatementsQueryKey>
  >({
    queryKey: getStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Statements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Statements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Statements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStatementsMutationKey() {
  return ['Statements', '/Statements', 'POST'] as const
}

export function getPostStatementsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$post>>>>>,
    TError,
    InferRequestType<typeof client.Statements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStatementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Statements.$post>) {
      return parseResponse(client.Statements.$post(args, options))
    },
  })
}

export function usePostStatements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Statements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStatementsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatementsStatementIdQueryKey(
  args: InferRequestType<(typeof client.Statements)[':statementId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Statements', '/Statements/:statementId', keyArgs] as const
}

export function getStatementsStatementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Statements)[':statementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatementsStatementIdQueryKey>
  >({
    queryKey: getStatementsStatementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Statements[':statementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStatementsStatementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Statements)[':statementId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatementsStatementIdQueryKey>
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
      ...getStatementsStatementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStatementsStatementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Statements)[':statementId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatementsStatementIdQueryKey>
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
      ...getStatementsStatementIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
