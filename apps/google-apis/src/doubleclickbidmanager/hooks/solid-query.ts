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

export function getQueriesKey() {
  return ['queries'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getQueriesQueryKey(args: InferRequestType<typeof client.queries.$get>) {
  return ['queries', '/queries', args] as const
}

export function getQueriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.queries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueriesQueryKey>
  >({
    queryKey: getQueriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.queries.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getQueriesQueryKey>
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
    return { ...getQueriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getQueriesQueryIdReportsQueryKey(
  args: InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>,
) {
  return ['queries', '/queries/:queryId/reports', args] as const
}

export function getQueriesQueryIdReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesQueryIdReportsQueryKey>
  >({
    queryKey: getQueriesQueryIdReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.queries[':queryId'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQueriesQueryIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQueriesQueryIdReportsQueryKey>
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
      ...getQueriesQueryIdReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostQueryMutationKey() {
  return ['query', '/query', 'POST'] as const
}

export function getPostQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    InferRequestType<typeof client.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query.$post>) {
      return parseResponse(client.query.$post(args, options))
    },
  })
}

export function createPostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
          TError,
          InferRequestType<typeof client.query.$post>,
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
    const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryQueryIdQueryKey(
  args: InferRequestType<(typeof client.query)[':queryId']['$get']>,
) {
  return ['query', '/query/:queryId', args] as const
}

export function getQueryQueryIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query)[':queryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryQueryIdQueryKey>
  >({
    queryKey: getQueryQueryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query[':queryId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryQueryId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.query)[':queryId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQueryQueryIdQueryKey>
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
    return { ...getQueryQueryIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostQueryQueryIdMutationKey() {
  return ['query', '/query/:queryId', 'POST'] as const
}

export function getPostQueryQueryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.query)[':queryId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryQueryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.query)[':queryId']['$post']>) {
      return parseResponse(client.query[':queryId'].$post(args, options))
    },
  })
}

export function createPostQueryQueryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.query)[':queryId']['$post']>,
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
    const mutationDefaults = getPostQueryQueryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteQueryQueryIdMutationKey() {
  return ['query', '/query/:queryId', 'DELETE'] as const
}

export function getDeleteQueryQueryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.query)[':queryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueryQueryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.query)[':queryId']['$delete']>) {
      return parseResponse(client.query[':queryId'].$delete(args, options))
    },
  })
}

export function createDeleteQueryQueryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query)[':queryId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.query)[':queryId']['$delete']>,
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
    const mutationDefaults = getDeleteQueryQueryIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
