import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getQueriesKey() {
  return ['queries'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getGetQueriesKey(args: InferRequestType<typeof client.queries.$get>) {
  return ['queries', '/queries', args] as const
}

export function useGetQueries<TError = unknown>(
  args: InferRequestType<typeof client.queries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.queries.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetQueries<TError = unknown>(
  args: InferRequestType<typeof client.queries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.queries.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetQueriesQueryIdReportsKey(
  args: InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>,
) {
  return ['queries', '/queries/:queryId/reports', args] as const
}

export function useGetQueriesQueryIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQueriesQueryIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':queryId'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueriesQueryIdReports<TError = unknown>(
  args: InferRequestType<(typeof client.queries)[':queryId']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQueriesQueryIdReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.queries)[':queryId']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.queries[':queryId'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryKey() {
  return ['query', '/query', 'POST'] as const
}

export function usePostQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.query.$post> }) =>
        parseResponse(client.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQueryQueryIdKey(
  args: InferRequestType<(typeof client.query)[':queryId']['$get']>,
) {
  return ['query', '/query/:queryId', args] as const
}

export function useGetQueryQueryId<TError = unknown>(
  args: InferRequestType<(typeof client.query)[':queryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryQueryIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query[':queryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryQueryId<TError = unknown>(
  args: InferRequestType<(typeof client.query)[':queryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryQueryIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.query[':queryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryQueryIdKey() {
  return ['query', '/query/:queryId', 'POST'] as const
}

export function usePostQueryQueryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.query)[':queryId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryQueryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.query)[':queryId']['$post']> },
      ) => parseResponse(client.query[':queryId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQueryQueryIdKey() {
  return ['query', '/query/:queryId', 'DELETE'] as const
}

export function useDeleteQueryQueryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.query)[':queryId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.query)[':queryId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQueryQueryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.query)[':queryId']['$delete']> },
      ) => parseResponse(client.query[':queryId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
