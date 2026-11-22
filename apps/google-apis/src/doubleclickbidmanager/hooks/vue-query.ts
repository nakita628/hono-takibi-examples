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

export function getQueriesKey() {
  return ['queries'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getQueriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.queries.$get>>,
) {
  return ['queries', '/queries', toValue(args)] as const
}

export function getQueriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.queries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.queries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>
          >,
          ReturnType<typeof getQueriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueriesQueryIdReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>>,
) {
  return ['queries', '/queries/:queryId/reports', toValue(args)] as const
}

export function getQueriesQueryIdReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueriesQueryIdReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.queries[':queryId'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueriesQueryIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQueriesQueryIdReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueriesQueryIdReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueriesQueryIdReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.queries[':queryId'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
          TError,
          InferRequestType<typeof client.query.$post>,
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
  const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryQueryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query)[':queryId']['$get']>>,
) {
  return ['query', '/query/:queryId', toValue(args)] as const
}

export function getQueryQueryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query)[':queryId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryQueryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query[':queryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryQueryId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query)[':queryId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
            >
          >,
          ReturnType<typeof getQueryQueryIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryQueryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryQueryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query[':queryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostQueryQueryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.query)[':queryId']['$post']>,
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
  const mutationDefaults = getPostQueryQueryIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteQueryQueryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteQueryQueryIdMutationOptions<TError, TOnMutateResult>(
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
