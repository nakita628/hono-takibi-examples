import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAttemptsKey() {
  return ['attempts'] as const
}

export function getBookmarksKey() {
  return ['bookmarks'] as const
}

export function getBulkKey() {
  return ['bulk'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getDestinationsKey() {
  return ['destinations'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getIssueTriggersKey() {
  return ['issue-triggers'] as const
}

export function getIssuesKey() {
  return ['issues'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getRequestsKey() {
  return ['requests'] as const
}

export function getSourcesKey() {
  return ['sources'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTransformationsKey() {
  return ['transformations'] as const
}

export function getGetIssueTriggersKey(
  args: InferRequestType<(typeof client)['issue-triggers']['$get']>,
) {
  return ['issue-triggers', '/issue-triggers', args] as const
}

export function useGetIssueTriggers<TError = unknown>(
  args: InferRequestType<(typeof client)['issue-triggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIssueTriggersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['issue-triggers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTriggers<TError = unknown>(
  args: InferRequestType<(typeof client)['issue-triggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIssueTriggersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['issue-triggers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIssueTriggersKey() {
  return ['issue-triggers', '/issue-triggers', 'PUT'] as const
}

export function usePutIssueTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['issue-triggers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIssueTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['issue-triggers']['$put']> },
      ) => parseResponse(client['issue-triggers'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIssueTriggersKey() {
  return ['issue-triggers', '/issue-triggers', 'POST'] as const
}

export function usePostIssueTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['issue-triggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssueTriggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['issue-triggers']['$post']> },
      ) => parseResponse(client['issue-triggers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIssueTriggersIdKey(
  args: InferRequestType<(typeof client)['issue-triggers'][':id']['$get']>,
) {
  return ['issue-triggers', '/issue-triggers/:id', args] as const
}

export function useGetIssueTriggersId<TError = unknown>(
  args: InferRequestType<(typeof client)['issue-triggers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$get']>>
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
        ? getGetIssueTriggersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['issue-triggers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueTriggersId<TError = unknown>(
  args: InferRequestType<(typeof client)['issue-triggers'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$get']>>
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
        ? getGetIssueTriggersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['issue-triggers'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIssueTriggersIdKey() {
  return ['issue-triggers', '/issue-triggers/:id', 'PUT'] as const
}

export function usePutIssueTriggersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['issue-triggers'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIssueTriggersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['issue-triggers'][':id']['$put']> },
      ) => parseResponse(client['issue-triggers'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIssueTriggersIdKey() {
  return ['issue-triggers', '/issue-triggers/:id', 'DELETE'] as const
}

export function useDeleteIssueTriggersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['issue-triggers'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIssueTriggersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['issue-triggers'][':id']['$delete']> },
      ) => parseResponse(client['issue-triggers'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIssueTriggersIdDisableKey() {
  return ['issue-triggers', '/issue-triggers/:id/disable', 'PUT'] as const
}

export function usePutIssueTriggersIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['disable']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['issue-triggers'][':id']['disable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIssueTriggersIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['issue-triggers'][':id']['disable']['$put']> },
      ) => parseResponse(client['issue-triggers'][':id'].disable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIssueTriggersIdEnableKey() {
  return ['issue-triggers', '/issue-triggers/:id/enable', 'PUT'] as const
}

export function usePutIssueTriggersIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['issue-triggers'][':id']['enable']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['issue-triggers'][':id']['enable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIssueTriggersIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['issue-triggers'][':id']['enable']['$put']> },
      ) => parseResponse(client['issue-triggers'][':id'].enable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttemptsKey(args: InferRequestType<typeof client.attempts.$get>) {
  return ['attempts', '/attempts', args] as const
}

export function useGetAttempts<TError = unknown>(
  args: InferRequestType<typeof client.attempts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attempts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttemptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attempts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.attempts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAttempts<TError = unknown>(
  args: InferRequestType<typeof client.attempts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attempts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttemptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attempts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.attempts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAttemptsIdKey(
  args: InferRequestType<(typeof client.attempts)[':id']['$get']>,
) {
  return ['attempts', '/attempts/:id', args] as const
}

export function useGetAttemptsId<TError = unknown>(
  args: InferRequestType<(typeof client.attempts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attempts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAttemptsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attempts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attempts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttemptsId<TError = unknown>(
  args: InferRequestType<(typeof client.attempts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attempts)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAttemptsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attempts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attempts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookmarksKey(args: InferRequestType<typeof client.bookmarks.$get>) {
  return ['bookmarks', '/bookmarks', args] as const
}

export function useGetBookmarks<TError = unknown>(
  args: InferRequestType<typeof client.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookmarksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarks<TError = unknown>(
  args: InferRequestType<typeof client.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBookmarksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookmarksKey() {
  return ['bookmarks', '/bookmarks', 'POST'] as const
}

export function usePostBookmarks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bookmarks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookmarksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bookmarks.$post> }) =>
        parseResponse(client.bookmarks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookmarksIdKey(
  args: InferRequestType<(typeof client.bookmarks)[':id']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:id', args] as const
}

export function useGetBookmarksId<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBookmarksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarksId<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBookmarksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBookmarksIdKey() {
  return ['bookmarks', '/bookmarks/:id', 'PUT'] as const
}

export function usePutBookmarksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBookmarksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bookmarks)[':id']['$put']> },
      ) => parseResponse(client.bookmarks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBookmarksIdKey() {
  return ['bookmarks', '/bookmarks/:id', 'DELETE'] as const
}

export function useDeleteBookmarksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBookmarksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bookmarks)[':id']['$delete']> },
      ) => parseResponse(client.bookmarks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookmarksIdRawBodyKey(
  args: InferRequestType<(typeof client.bookmarks)[':id']['raw_body']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:id/raw_body', args] as const
}

export function useGetBookmarksIdRawBody<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':id']['raw_body']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>
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
        ? getGetBookmarksIdRawBodyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':id'].raw_body.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarksIdRawBody<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':id']['raw_body']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>
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
        ? getGetBookmarksIdRawBodyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':id']['raw_body']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':id'].raw_body.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookmarksIdTriggerKey() {
  return ['bookmarks', '/bookmarks/:id/trigger', 'POST'] as const
}

export function usePostBookmarksIdTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':id']['trigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':id']['trigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookmarksIdTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bookmarks)[':id']['trigger']['$post']> },
      ) => parseResponse(client.bookmarks[':id'].trigger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDestinationsKey(args: InferRequestType<typeof client.destinations.$get>) {
  return ['destinations', '/destinations', args] as const
}

export function useGetDestinations<TError = unknown>(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDestinationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestinations<TError = unknown>(
  args: InferRequestType<typeof client.destinations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDestinationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDestinationsKey() {
  return ['destinations', '/destinations', 'PUT'] as const
}

export function usePutDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.destinations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDestinationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.destinations.$put> }) =>
        parseResponse(client.destinations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDestinationsKey() {
  return ['destinations', '/destinations', 'POST'] as const
}

export function usePostDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.destinations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.destinations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDestinationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.destinations.$post> }) =>
        parseResponse(client.destinations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDestinationsIdKey(
  args: InferRequestType<(typeof client.destinations)[':id']['$get']>,
) {
  return ['destinations', '/destinations/:id', args] as const
}

export function useGetDestinationsId<TError = unknown>(
  args: InferRequestType<(typeof client.destinations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDestinationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDestinationsId<TError = unknown>(
  args: InferRequestType<(typeof client.destinations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDestinationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.destinations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDestinationsIdKey() {
  return ['destinations', '/destinations/:id', 'PUT'] as const
}

export function usePutDestinationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDestinationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.destinations)[':id']['$put']> },
      ) => parseResponse(client.destinations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDestinationsIdKey() {
  return ['destinations', '/destinations/:id', 'DELETE'] as const
}

export function useDeleteDestinationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.destinations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDestinationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.destinations)[':id']['$delete']> },
      ) => parseResponse(client.destinations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDestinationsIdDisableKey() {
  return ['destinations', '/destinations/:id/disable', 'PUT'] as const
}

export function usePutDestinationsIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.destinations)[':id']['disable']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':id']['disable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDestinationsIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.destinations)[':id']['disable']['$put']> },
      ) => parseResponse(client.destinations[':id'].disable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDestinationsIdArchiveKey() {
  return ['destinations', '/destinations/:id/archive', 'PUT'] as const
}

export function usePutDestinationsIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.destinations)[':id']['archive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':id']['archive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDestinationsIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.destinations)[':id']['archive']['$put']> },
      ) => parseResponse(client.destinations[':id'].archive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDestinationsIdEnableKey() {
  return ['destinations', '/destinations/:id/enable', 'PUT'] as const
}

export function usePutDestinationsIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.destinations)[':id']['enable']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':id']['enable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDestinationsIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.destinations)[':id']['enable']['$put']> },
      ) => parseResponse(client.destinations[':id'].enable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDestinationsIdUnarchiveKey() {
  return ['destinations', '/destinations/:id/unarchive', 'PUT'] as const
}

export function usePutDestinationsIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.destinations)[':id']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.destinations)[':id']['unarchive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDestinationsIdUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.destinations)[':id']['unarchive']['$put']> },
      ) => parseResponse(client.destinations[':id'].unarchive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBulkEventsRetryKey(
  args: InferRequestType<typeof client.bulk.events.retry.$get>,
) {
  return ['bulk', '/bulk/events/retry', args] as const
}

export function useGetBulkEventsRetry<TError = unknown>(
  args: InferRequestType<typeof client.bulk.events.retry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$get>>>>
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
        ? getGetBulkEventsRetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.events.retry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkEventsRetry<TError = unknown>(
  args: InferRequestType<typeof client.bulk.events.retry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$get>>>>
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
        ? getGetBulkEventsRetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.events.retry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBulkEventsRetryKey() {
  return ['bulk', '/bulk/events/retry', 'POST'] as const
}

export function usePostBulkEventsRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bulk.events.retry.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkEventsRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bulk.events.retry.$post> }) =>
        parseResponse(client.bulk.events.retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBulkEventsRetryPlanKey(
  args: InferRequestType<typeof client.bulk.events.retry.plan.$get>,
) {
  return ['bulk', '/bulk/events/retry/plan', args] as const
}

export function useGetBulkEventsRetryPlan<TError = unknown>(
  args: InferRequestType<typeof client.bulk.events.retry.plan.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.plan.$get>>>
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
        ? getGetBulkEventsRetryPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.plan.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.events.retry.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkEventsRetryPlan<TError = unknown>(
  args: InferRequestType<typeof client.bulk.events.retry.plan.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.plan.$get>>>
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
        ? getGetBulkEventsRetryPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.events.retry.plan.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.events.retry.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkEventsRetryIdKey(
  args: InferRequestType<(typeof client.bulk.events.retry)[':id']['$get']>,
) {
  return ['bulk', '/bulk/events/retry/:id', args] as const
}

export function useGetBulkEventsRetryId<TError = unknown>(
  args: InferRequestType<(typeof client.bulk.events.retry)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['$get']>>
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
        ? getGetBulkEventsRetryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.events.retry[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkEventsRetryId<TError = unknown>(
  args: InferRequestType<(typeof client.bulk.events.retry)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['$get']>>
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
        ? getGetBulkEventsRetryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.events.retry[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBulkEventsRetryIdCancelKey() {
  return ['bulk', '/bulk/events/retry/:id/cancel', 'POST'] as const
}

export function usePostBulkEventsRetryIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkEventsRetryIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bulk.events.retry)[':id']['cancel']['$post']> },
      ) => parseResponse(client.bulk.events.retry[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEventsIdKey(args: InferRequestType<(typeof client.events)[':id']['$get']>) {
  return ['events', '/events/:id', args] as const
}

export function useGetEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsIdRawBodyKey(
  args: InferRequestType<(typeof client.events)[':id']['raw_body']['$get']>,
) {
  return ['events', '/events/:id/raw_body', args] as const
}

export function useGetEventsIdRawBody<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':id']['raw_body']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':id']['raw_body']['$get']>>
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
        ? getGetEventsIdRawBodyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':id']['raw_body']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':id'].raw_body.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsIdRawBody<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':id']['raw_body']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':id']['raw_body']['$get']>>
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
        ? getGetEventsIdRawBodyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':id']['raw_body']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':id'].raw_body.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEventsIdRetryKey() {
  return ['events', '/events/:id/retry', 'POST'] as const
}

export function usePostEventsIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['retry']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':id']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsIdRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':id']['retry']['$post']> },
      ) => parseResponse(client.events[':id'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEventsIdMuteKey() {
  return ['events', '/events/:id/mute', 'PUT'] as const
}

export function usePutEventsIdMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':id']['mute']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':id']['mute']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventsIdMuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':id']['mute']['$put']> },
      ) => parseResponse(client.events[':id'].mute.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBulkIgnoredEventsRetryKey(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$get']>,
) {
  return ['bulk', '/bulk/ignored-events/retry', args] as const
}

export function useGetBulkIgnoredEventsRetry<TError = unknown>(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$get']>>
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
        ? getGetBulkIgnoredEventsRetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk['ignored-events'].retry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkIgnoredEventsRetry<TError = unknown>(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$get']>>
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
        ? getGetBulkIgnoredEventsRetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk['ignored-events'].retry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBulkIgnoredEventsRetryKey() {
  return ['bulk', '/bulk/ignored-events/retry', 'POST'] as const
}

export function usePostBulkIgnoredEventsRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkIgnoredEventsRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['$post']> },
      ) => parseResponse(client.bulk['ignored-events'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBulkIgnoredEventsRetryPlanKey(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>,
) {
  return ['bulk', '/bulk/ignored-events/retry/plan', args] as const
}

export function useGetBulkIgnoredEventsRetryPlan<TError = unknown>(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>>
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
        ? getGetBulkIgnoredEventsRetryPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk['ignored-events'].retry.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkIgnoredEventsRetryPlan<TError = unknown>(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>>
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
        ? getGetBulkIgnoredEventsRetryPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry']['plan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk['ignored-events'].retry.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkIgnoredEventsRetryIdKey(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>,
) {
  return ['bulk', '/bulk/ignored-events/retry/:id', args] as const
}

export function useGetBulkIgnoredEventsRetryId<TError = unknown>(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>>
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
        ? getGetBulkIgnoredEventsRetryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bulk['ignored-events'].retry[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkIgnoredEventsRetryId<TError = unknown>(
  args: InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>>
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
        ? getGetBulkIgnoredEventsRetryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bulk['ignored-events'].retry[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBulkIgnoredEventsRetryIdCancelKey() {
  return ['bulk', '/bulk/ignored-events/retry/:id/cancel', 'POST'] as const
}

export function usePostBulkIgnoredEventsRetryIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkIgnoredEventsRetryIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.bulk)['ignored-events']['retry'][':id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client.bulk['ignored-events'].retry[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsKey(args: InferRequestType<typeof client.integrations.$get>) {
  return ['integrations', '/integrations', args] as const
}

export function useGetIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntegrationsKey() {
  return ['integrations', '/integrations', 'POST'] as const
}

export function usePostIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.integrations.$post> }) =>
        parseResponse(client.integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsIdKey(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
) {
  return ['integrations', '/integrations/:id', args] as const
}

export function useGetIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIntegrationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsId<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIntegrationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIntegrationsIdKey() {
  return ['integrations', '/integrations/:id', 'PUT'] as const
}

export function usePutIntegrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIntegrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.integrations)[':id']['$put']> },
      ) => parseResponse(client.integrations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIntegrationsIdKey() {
  return ['integrations', '/integrations/:id', 'DELETE'] as const
}

export function useDeleteIntegrationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntegrationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.integrations)[':id']['$delete']> },
      ) => parseResponse(client.integrations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIntegrationsIdAttachSourceIdKey() {
  return ['integrations', '/integrations/:id/attach/:source_id', 'PUT'] as const
}

export function usePutIntegrationsIdAttachSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIntegrationsIdAttachSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.integrations)[':id']['attach'][':source_id']['$put']>
        },
      ) => parseResponse(client.integrations[':id'].attach[':source_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutIntegrationsIdDetachSourceIdKey() {
  return ['integrations', '/integrations/:id/detach/:source_id', 'PUT'] as const
}

export function usePutIntegrationsIdDetachSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIntegrationsIdDetachSourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.integrations)[':id']['detach'][':source_id']['$put']>
        },
      ) => parseResponse(client.integrations[':id'].detach[':source_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIssuesKey(args: InferRequestType<typeof client.issues.$get>) {
  return ['issues', '/issues', args] as const
}

export function useGetIssues<TError = unknown>(
  args: InferRequestType<typeof client.issues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.issues.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIssues<TError = unknown>(
  args: InferRequestType<typeof client.issues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssuesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.issues.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetIssuesCountKey(args: InferRequestType<typeof client.issues.count.$get>) {
  return ['issues', '/issues/count', args] as const
}

export function useGetIssuesCount<TError = unknown>(
  args: InferRequestType<typeof client.issues.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssuesCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issues.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssuesCount<TError = unknown>(
  args: InferRequestType<typeof client.issues.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.count.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssuesCountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issues.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issues.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIssuesIdKey(args: InferRequestType<(typeof client.issues)[':id']['$get']>) {
  return ['issues', '/issues/:id', args] as const
}

export function useGetIssuesId<TError = unknown>(
  args: InferRequestType<(typeof client.issues)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssuesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issues[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssuesId<TError = unknown>(
  args: InferRequestType<(typeof client.issues)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssuesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issues[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIssuesIdKey() {
  return ['issues', '/issues/:id', 'PUT'] as const
}

export function usePutIssuesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.issues)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIssuesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.issues)[':id']['$put']> }) =>
        parseResponse(client.issues[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIssuesIdKey() {
  return ['issues', '/issues/:id', 'DELETE'] as const
}

export function useDeleteIssuesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.issues)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.issues)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIssuesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.issues)[':id']['$delete']> },
      ) => parseResponse(client.issues[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRequestsKey(args: InferRequestType<typeof client.requests.$get>) {
  return ['requests', '/requests', args] as const
}

export function useGetRequests<TError = unknown>(
  args: InferRequestType<typeof client.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.requests.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRequests<TError = unknown>(
  args: InferRequestType<typeof client.requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.requests.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.requests.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRequestsIdKey(
  args: InferRequestType<(typeof client.requests)[':id']['$get']>,
) {
  return ['requests', '/requests/:id', args] as const
}

export function useGetRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.requests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRequestsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.requests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRequestsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequestsIdRawBodyKey(
  args: InferRequestType<(typeof client.requests)[':id']['raw_body']['$get']>,
) {
  return ['requests', '/requests/:id/raw_body', args] as const
}

export function useGetRequestsIdRawBody<TError = unknown>(
  args: InferRequestType<(typeof client.requests)[':id']['raw_body']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['raw_body']['$get']>>
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
        ? getGetRequestsIdRawBodyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['raw_body']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests[':id'].raw_body.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestsIdRawBody<TError = unknown>(
  args: InferRequestType<(typeof client.requests)[':id']['raw_body']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['raw_body']['$get']>>
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
        ? getGetRequestsIdRawBodyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['raw_body']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests[':id'].raw_body.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRequestsIdRetryKey() {
  return ['requests', '/requests/:id/retry', 'POST'] as const
}

export function usePostRequestsIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.requests)[':id']['retry']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.requests)[':id']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestsIdRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.requests)[':id']['retry']['$post']> },
      ) => parseResponse(client.requests[':id'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRequestsIdEventsKey(
  args: InferRequestType<(typeof client.requests)[':id']['events']['$get']>,
) {
  return ['requests', '/requests/:id/events', args] as const
}

export function useGetRequestsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.requests)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['events']['$get']>>
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
        ? getGetRequestsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.requests)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['events']['$get']>>
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
        ? getGetRequestsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequestsIdIgnoredEventsKey(
  args: InferRequestType<(typeof client.requests)[':id']['ignored_events']['$get']>,
) {
  return ['requests', '/requests/:id/ignored_events', args] as const
}

export function useGetRequestsIdIgnoredEvents<TError = unknown>(
  args: InferRequestType<(typeof client.requests)[':id']['ignored_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['ignored_events']['$get']>>
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
        ? getGetRequestsIdIgnoredEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['ignored_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests[':id'].ignored_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestsIdIgnoredEvents<TError = unknown>(
  args: InferRequestType<(typeof client.requests)[':id']['ignored_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['ignored_events']['$get']>>
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
        ? getGetRequestsIdIgnoredEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.requests)[':id']['ignored_events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.requests[':id'].ignored_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkRequestsRetryKey(
  args: InferRequestType<typeof client.bulk.requests.retry.$get>,
) {
  return ['bulk', '/bulk/requests/retry', args] as const
}

export function useGetBulkRequestsRetry<TError = unknown>(
  args: InferRequestType<typeof client.bulk.requests.retry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$get>>>
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
        ? getGetBulkRequestsRetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.requests.retry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkRequestsRetry<TError = unknown>(
  args: InferRequestType<typeof client.bulk.requests.retry.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$get>>>
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
        ? getGetBulkRequestsRetryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.requests.retry.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBulkRequestsRetryKey() {
  return ['bulk', '/bulk/requests/retry', 'POST'] as const
}

export function usePostBulkRequestsRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bulk.requests.retry.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkRequestsRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bulk.requests.retry.$post> }) =>
        parseResponse(client.bulk.requests.retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBulkRequestsRetryPlanKey(
  args: InferRequestType<typeof client.bulk.requests.retry.plan.$get>,
) {
  return ['bulk', '/bulk/requests/retry/plan', args] as const
}

export function useGetBulkRequestsRetryPlan<TError = unknown>(
  args: InferRequestType<typeof client.bulk.requests.retry.plan.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.plan.$get>>>
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
        ? getGetBulkRequestsRetryPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.plan.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.requests.retry.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkRequestsRetryPlan<TError = unknown>(
  args: InferRequestType<typeof client.bulk.requests.retry.plan.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.plan.$get>>>
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
        ? getGetBulkRequestsRetryPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulk.requests.retry.plan.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.requests.retry.plan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkRequestsRetryIdKey(
  args: InferRequestType<(typeof client.bulk.requests.retry)[':id']['$get']>,
) {
  return ['bulk', '/bulk/requests/retry/:id', args] as const
}

export function useGetBulkRequestsRetryId<TError = unknown>(
  args: InferRequestType<(typeof client.bulk.requests.retry)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['$get']>>
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
        ? getGetBulkRequestsRetryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.requests.retry[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkRequestsRetryId<TError = unknown>(
  args: InferRequestType<(typeof client.bulk.requests.retry)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['$get']>>
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
        ? getGetBulkRequestsRetryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk.requests.retry[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBulkRequestsRetryIdCancelKey() {
  return ['bulk', '/bulk/requests/retry/:id/cancel', 'POST'] as const
}

export function usePostBulkRequestsRetryIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkRequestsRetryIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bulk.requests.retry)[':id']['cancel']['$post']> },
      ) => parseResponse(client.bulk.requests.retry[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSourcesKey(args: InferRequestType<typeof client.sources.$get>) {
  return ['sources', '/sources', args] as const
}

export function useGetSources<TError = unknown>(
  args: InferRequestType<typeof client.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sources.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSources<TError = unknown>(
  args: InferRequestType<typeof client.sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSourcesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sources.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutSourcesKey() {
  return ['sources', '/sources', 'PUT'] as const
}

export function usePutSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sources.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sources.$put> }) =>
        parseResponse(client.sources.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSourcesKey() {
  return ['sources', '/sources', 'POST'] as const
}

export function usePostSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sources.$post> }) =>
        parseResponse(client.sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSourcesIdKey(args: InferRequestType<(typeof client.sources)[':id']['$get']>) {
  return ['sources', '/sources/:id', args] as const
}

export function useGetSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.sources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSourcesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.sources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSourcesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSourcesIdKey() {
  return ['sources', '/sources/:id', 'PUT'] as const
}

export function usePutSourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sources)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.sources)[':id']['$put']> }) =>
        parseResponse(client.sources[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSourcesIdKey() {
  return ['sources', '/sources/:id', 'DELETE'] as const
}

export function useDeleteSourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sources)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sources)[':id']['$delete']> },
      ) => parseResponse(client.sources[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSourcesIdDisableKey() {
  return ['sources', '/sources/:id/disable', 'PUT'] as const
}

export function usePutSourcesIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['disable']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sources)[':id']['disable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourcesIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sources)[':id']['disable']['$put']> },
      ) => parseResponse(client.sources[':id'].disable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSourcesIdArchiveKey() {
  return ['sources', '/sources/:id/archive', 'PUT'] as const
}

export function usePutSourcesIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['archive']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sources)[':id']['archive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourcesIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sources)[':id']['archive']['$put']> },
      ) => parseResponse(client.sources[':id'].archive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSourcesIdEnableKey() {
  return ['sources', '/sources/:id/enable', 'PUT'] as const
}

export function usePutSourcesIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':id']['enable']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sources)[':id']['enable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourcesIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sources)[':id']['enable']['$put']> },
      ) => parseResponse(client.sources[':id'].enable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSourcesIdUnarchiveKey() {
  return ['sources', '/sources/:id/unarchive', 'PUT'] as const
}

export function usePutSourcesIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sources)[':id']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sources)[':id']['unarchive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourcesIdUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sources)[':id']['unarchive']['$put']> },
      ) => parseResponse(client.sources[':id'].unarchive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutNotificationsWebhooksKey() {
  return ['notifications', '/notifications/webhooks', 'PUT'] as const
}

export function usePutNotificationsWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.webhooks.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.webhooks.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.webhooks.$put> },
      ) => parseResponse(client.notifications.webhooks.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsCurrentCustomDomainsKey() {
  return ['teams', '/teams/current/custom_domains'] as const
}

export function useGetTeamsCurrentCustomDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.teams.current.custom_domains.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsCurrentCustomDomainsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.teams.current.custom_domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.current.custom_domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsCurrentCustomDomains<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.teams.current.custom_domains.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsCurrentCustomDomainsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.teams.current.custom_domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.current.custom_domains.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamsCurrentCustomDomainsKey() {
  return ['teams', '/teams/current/custom_domains', 'POST'] as const
}

export function usePostTeamsCurrentCustomDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.teams.current.custom_domains.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.teams.current.custom_domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsCurrentCustomDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.teams.current.custom_domains.$post> },
      ) => parseResponse(client.teams.current.custom_domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsCurrentCustomDomainsDomainIdKey() {
  return ['teams', '/teams/current/custom_domains/:domain_id', 'DELETE'] as const
}

export function useDeleteTeamsCurrentCustomDomainsDomainId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams.current.custom_domains)[':domain_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams.current.custom_domains)[':domain_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsCurrentCustomDomainsDomainIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.teams.current.custom_domains)[':domain_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.teams.current.custom_domains[':domain_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTransformationsKey(
  args: InferRequestType<typeof client.transformations.$get>,
) {
  return ['transformations', '/transformations', args] as const
}

export function useGetTransformations<TError = unknown>(
  args: InferRequestType<typeof client.transformations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$get>>>>
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
        ? getGetTransformationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transformations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransformations<TError = unknown>(
  args: InferRequestType<typeof client.transformations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$get>>>>
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
        ? getGetTransformationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transformations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTransformationsKey() {
  return ['transformations', '/transformations', 'PUT'] as const
}

export function usePutTransformations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transformations.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTransformationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transformations.$put> }) =>
        parseResponse(client.transformations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransformationsKey() {
  return ['transformations', '/transformations', 'POST'] as const
}

export function usePostTransformations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transformations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransformationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transformations.$post> }) =>
        parseResponse(client.transformations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransformationsIdKey(
  args: InferRequestType<(typeof client.transformations)[':id']['$get']>,
) {
  return ['transformations', '/transformations/:id', args] as const
}

export function useGetTransformationsId<TError = unknown>(
  args: InferRequestType<(typeof client.transformations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$get']>>>
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
        ? getGetTransformationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transformations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransformationsId<TError = unknown>(
  args: InferRequestType<(typeof client.transformations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$get']>>>
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
        ? getGetTransformationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transformations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTransformationsIdKey() {
  return ['transformations', '/transformations/:id', 'PUT'] as const
}

export function usePutTransformationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transformations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTransformationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transformations)[':id']['$put']> },
      ) => parseResponse(client.transformations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTransformationsIdKey() {
  return ['transformations', '/transformations/:id', 'DELETE'] as const
}

export function useDeleteTransformationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transformations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transformations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransformationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transformations)[':id']['$delete']> },
      ) => parseResponse(client.transformations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTransformationsRunKey() {
  return ['transformations', '/transformations/run', 'PUT'] as const
}

export function usePutTransformationsRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transformations.run.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transformations.run.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTransformationsRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transformations.run.$put> }) =>
        parseResponse(client.transformations.run.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransformationsIdExecutionsKey(
  args: InferRequestType<(typeof client.transformations)[':id']['executions']['$get']>,
) {
  return ['transformations', '/transformations/:id/executions', args] as const
}

export function useGetTransformationsIdExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.transformations)[':id']['executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transformations)[':id']['executions']['$get']>>
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
        ? getGetTransformationsIdExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transformations)[':id']['executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transformations[':id'].executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransformationsIdExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.transformations)[':id']['executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transformations)[':id']['executions']['$get']>>
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
        ? getGetTransformationsIdExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transformations)[':id']['executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transformations[':id'].executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransformationsIdExecutionsExecutionIdKey(
  args: InferRequestType<
    (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
  >,
) {
  return ['transformations', '/transformations/:id/executions/:execution_id', args] as const
}

export function useGetTransformationsIdExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
              >
            >
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
        ? getGetTransformationsIdExecutionsExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.transformations[':id'].executions[':execution_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransformationsIdExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
              >
            >
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
        ? getGetTransformationsIdExecutionsExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.transformations)[':id']['executions'][':execution_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.transformations[':id'].executions[':execution_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConnectionsKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function useGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConnectionsKey() {
  return ['connections', '/connections', 'PUT'] as const
}

export function usePutConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.connections.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connections.$put> }) =>
        parseResponse(client.connections.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectionsKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function usePostConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connections.$post> }) =>
        parseResponse(client.connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsCountKey(
  args: InferRequestType<typeof client.connections.count.$get>,
) {
  return ['connections', '/connections/count', args] as const
}

export function useGetConnectionsCount<TError = unknown>(
  args: InferRequestType<typeof client.connections.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.count.$get>>>>
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
        ? getGetConnectionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsCount<TError = unknown>(
  args: InferRequestType<typeof client.connections.count.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.count.$get>>>>
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
        ? getGetConnectionsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectionsIdKey(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
) {
  return ['connections', '/connections/:id', args] as const
}

export function useGetConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetConnectionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetConnectionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutConnectionsIdKey() {
  return ['connections', '/connections/:id', 'PUT'] as const
}

export function usePutConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['$put']> },
      ) => parseResponse(client.connections[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConnectionsIdKey() {
  return ['connections', '/connections/:id', 'DELETE'] as const
}

export function useDeleteConnectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['$delete']> },
      ) => parseResponse(client.connections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConnectionsIdDisableKey() {
  return ['connections', '/connections/:id/disable', 'PUT'] as const
}

export function usePutConnectionsIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['disable']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['disable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectionsIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['disable']['$put']> },
      ) => parseResponse(client.connections[':id'].disable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConnectionsIdArchiveKey() {
  return ['connections', '/connections/:id/archive', 'PUT'] as const
}

export function usePutConnectionsIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['archive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['archive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectionsIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['archive']['$put']> },
      ) => parseResponse(client.connections[':id'].archive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConnectionsIdEnableKey() {
  return ['connections', '/connections/:id/enable', 'PUT'] as const
}

export function usePutConnectionsIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['enable']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['enable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectionsIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['enable']['$put']> },
      ) => parseResponse(client.connections[':id'].enable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConnectionsIdUnarchiveKey() {
  return ['connections', '/connections/:id/unarchive', 'PUT'] as const
}

export function usePutConnectionsIdUnarchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['unarchive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['unarchive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectionsIdUnarchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['unarchive']['$put']> },
      ) => parseResponse(client.connections[':id'].unarchive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConnectionsIdPauseKey() {
  return ['connections', '/connections/:id/pause', 'PUT'] as const
}

export function usePutConnectionsIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['pause']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['pause']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectionsIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['pause']['$put']> },
      ) => parseResponse(client.connections[':id'].pause.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConnectionsIdUnpauseKey() {
  return ['connections', '/connections/:id/unpause', 'PUT'] as const
}

export function usePutConnectionsIdUnpause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':id']['unpause']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':id']['unpause']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConnectionsIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':id']['unpause']['$put']> },
      ) => parseResponse(client.connections[':id'].unpause.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
