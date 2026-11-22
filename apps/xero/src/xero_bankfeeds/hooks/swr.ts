import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFeedConnectionsKey() {
  return ['FeedConnections'] as const
}

export function getStatementsKey() {
  return ['Statements'] as const
}

export function getGetFeedConnectionsKey(
  args: InferRequestType<typeof client.FeedConnections.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['FeedConnections', '/FeedConnections', keyArgs] as const
}

export function useGetFeedConnections<TError = unknown>(
  args: InferRequestType<typeof client.FeedConnections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
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
        ? getGetFeedConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FeedConnections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedConnections<TError = unknown>(
  args: InferRequestType<typeof client.FeedConnections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
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
        ? getGetFeedConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FeedConnections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFeedConnectionsKey() {
  return ['FeedConnections', '/FeedConnections', 'POST'] as const
}

export function usePostFeedConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FeedConnections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.FeedConnections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.FeedConnections.$post> }) =>
        parseResponse(client.FeedConnections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFeedConnectionsIdKey(
  args: InferRequestType<(typeof client.FeedConnections)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['FeedConnections', '/FeedConnections/:id', keyArgs] as const
}

export function useGetFeedConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.FeedConnections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
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
        ? getGetFeedConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FeedConnections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.FeedConnections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
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
        ? getGetFeedConnectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.FeedConnections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.FeedConnections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFeedConnectionsDeleteRequestsKey() {
  return ['FeedConnections', '/FeedConnections/DeleteRequests', 'POST'] as const
}

export function usePostFeedConnectionsDeleteRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.FeedConnections.DeleteRequests.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.FeedConnections.DeleteRequests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedConnectionsDeleteRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.FeedConnections.DeleteRequests.$post> },
      ) => parseResponse(client.FeedConnections.DeleteRequests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatementsKey(args: InferRequestType<typeof client.Statements.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Statements', '/Statements', keyArgs] as const
}

export function useGetStatements<TError = unknown>(
  args: InferRequestType<typeof client.Statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatements<TError = unknown>(
  args: InferRequestType<typeof client.Statements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Statements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStatementsKey() {
  return ['Statements', '/Statements', 'POST'] as const
}

export function usePostStatements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Statements.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Statements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Statements.$post> }) =>
        parseResponse(client.Statements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatementsStatementIdKey(
  args: InferRequestType<(typeof client.Statements)[':statementId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Statements', '/Statements/:statementId', keyArgs] as const
}

export function useGetStatementsStatementId<TError = unknown>(
  args: InferRequestType<(typeof client.Statements)[':statementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
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
        ? getGetStatementsStatementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Statements[':statementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatementsStatementId<TError = unknown>(
  args: InferRequestType<(typeof client.Statements)[':statementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
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
        ? getGetStatementsStatementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Statements)[':statementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.Statements[':statementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
