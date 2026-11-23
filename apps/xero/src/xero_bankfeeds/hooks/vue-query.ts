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

export function getFeedConnectionsKey() {
  return ['FeedConnections'] as const
}

export function getStatementsKey() {
  return ['Statements'] as const
}

export function getFeedConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FeedConnections.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['FeedConnections', '/FeedConnections', keyArgs] as const
}

export function getFeedConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FeedConnections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FeedConnections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.FeedConnections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>
            >
          >,
          ReturnType<typeof getFeedConnectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeedConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FeedConnections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.FeedConnections.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.FeedConnections)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['FeedConnections', '/FeedConnections/:id', keyArgs] as const
}

export function getFeedConnectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.FeedConnections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedConnectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FeedConnections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.FeedConnections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeedConnectionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedConnectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedConnectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.FeedConnections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getStatementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Statements.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Statements', '/Statements', keyArgs] as const
}

export function getStatementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Statements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Statements.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.Statements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>
          >,
          ReturnType<typeof getStatementsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.Statements.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Statements)[':statementId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['Statements', '/Statements/:statementId', keyArgs] as const
}

export function getStatementsStatementIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Statements)[':statementId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatementsStatementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.Statements[':statementId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatementsStatementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.Statements)[':statementId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStatementsStatementIdQueryKey>
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
          Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatementsStatementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatementsStatementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.Statements[':statementId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
