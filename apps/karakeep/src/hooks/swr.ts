import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getAssetsKey() {
  return ['assets'] as const
}

export function getBackupsKey() {
  return ['backups'] as const
}

export function getBookmarksKey() {
  return ['bookmarks'] as const
}

export function getFeedsKey() {
  return ['feeds'] as const
}

export function getHighlightsKey() {
  return ['highlights'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUsersKey() {
  return ['users'] as const
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

export function getGetBookmarksSearchKey(
  args: InferRequestType<typeof client.bookmarks.search.$get>,
) {
  return ['bookmarks', '/bookmarks/search', args] as const
}

export function useGetBookmarksSearch<TError = unknown>(
  args: InferRequestType<typeof client.bookmarks.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
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
        ? getGetBookmarksSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarksSearch<TError = unknown>(
  args: InferRequestType<typeof client.bookmarks.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
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
        ? getGetBookmarksSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookmarksCheckUrlKey(
  args: InferRequestType<(typeof client.bookmarks)['check-url']['$get']>,
) {
  return ['bookmarks', '/bookmarks/check-url', args] as const
}

export function useGetBookmarksCheckUrl<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)['check-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
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
        ? getGetBookmarksCheckUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks['check-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarksCheckUrl<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)['check-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
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
        ? getGetBookmarksCheckUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks['check-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookmarksBookmarkIdKey(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId', args] as const
}

export function useGetBookmarksBookmarkId<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>
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
        ? getGetBookmarksBookmarkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':bookmarkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarksBookmarkId<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>
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
        ? getGetBookmarksBookmarkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':bookmarkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBookmarksBookmarkIdKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId', 'DELETE'] as const
}

export function useDeleteBookmarksBookmarkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBookmarksBookmarkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$delete']> },
      ) => parseResponse(client.bookmarks[':bookmarkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBookmarksBookmarkIdKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId', 'PATCH'] as const
}

export function usePatchBookmarksBookmarkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBookmarksBookmarkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$patch']> },
      ) => parseResponse(client.bookmarks[':bookmarkId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookmarksBookmarkIdContentKey(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/content', args] as const
}

export function useGetBookmarksBookmarkIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
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
        ? getGetBookmarksBookmarkIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':bookmarkId'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarksBookmarkIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
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
        ? getGetBookmarksBookmarkIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':bookmarkId'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookmarksBookmarkIdSummarizeKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/summarize', 'POST'] as const
}

export function usePostBookmarksBookmarkIdSummarize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookmarksBookmarkIdSummarizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>
        },
      ) => parseResponse(client.bookmarks[':bookmarkId'].summarize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBookmarksBookmarkIdTagsKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/tags', 'POST'] as const
}

export function usePostBookmarksBookmarkIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookmarksBookmarkIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']> },
      ) => parseResponse(client.bookmarks[':bookmarkId'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBookmarksBookmarkIdTagsKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/tags', 'DELETE'] as const
}

export function useDeleteBookmarksBookmarkIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBookmarksBookmarkIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']> },
      ) => parseResponse(client.bookmarks[':bookmarkId'].tags.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBookmarksBookmarkIdListsKey(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/lists', args] as const
}

export function useGetBookmarksBookmarkIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
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
        ? getGetBookmarksBookmarkIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':bookmarkId'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarksBookmarkIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
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
        ? getGetBookmarksBookmarkIdListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bookmarks[':bookmarkId'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBookmarksBookmarkIdHighlightsKey(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/highlights', args] as const
}

export function useGetBookmarksBookmarkIdHighlights<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
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
        ? getGetBookmarksBookmarkIdHighlightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bookmarks[':bookmarkId'].highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBookmarksBookmarkIdHighlights<TError = unknown>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
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
        ? getGetBookmarksBookmarkIdHighlightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bookmarks[':bookmarkId'].highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBookmarksBookmarkIdAssetsKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/assets', 'POST'] as const
}

export function usePostBookmarksBookmarkIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBookmarksBookmarkIdAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']> },
      ) => parseResponse(client.bookmarks[':bookmarkId'].assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBookmarksBookmarkIdAssetsAssetIdKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/assets/:assetId', 'PUT'] as const
}

export function usePutBookmarksBookmarkIdAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBookmarksBookmarkIdAssetsAssetIdKey()
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
            (typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$put']
          >
        },
      ) =>
        parseResponse(client.bookmarks[':bookmarkId'].assets[':assetId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBookmarksBookmarkIdAssetsAssetIdKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/assets/:assetId', 'DELETE'] as const
}

export function useDeleteBookmarksBookmarkIdAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBookmarksBookmarkIdAssetsAssetIdKey()
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
            (typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.bookmarks[':bookmarkId'].assets[':assetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetListsKey() {
  return ['lists', '/lists'] as const
}

export function useGetLists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetListsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLists<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetListsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListsKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function usePostLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lists.$post> }) =>
        parseResponse(client.lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsListIdKey(
  args: InferRequestType<(typeof client.lists)[':listId']['$get']>,
) {
  return ['lists', '/lists/:listId', args] as const
}

export function useGetListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':listId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListsListIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':listId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsListId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':listId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListsListIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':listId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteListsListIdKey() {
  return ['lists', '/lists/:listId', 'DELETE'] as const
}

export function useDeleteListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':listId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':listId']['$delete']> },
      ) => parseResponse(client.lists[':listId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchListsListIdKey() {
  return ['lists', '/lists/:listId', 'PATCH'] as const
}

export function usePatchListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':listId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':listId']['$patch']> },
      ) => parseResponse(client.lists[':listId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsListIdBookmarksKey(
  args: InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>,
) {
  return ['lists', '/lists/:listId/bookmarks', args] as const
}

export function useGetListsListIdBookmarks<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
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
        ? getGetListsListIdBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':listId'].bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsListIdBookmarks<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
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
        ? getGetListsListIdBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':listId'].bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListsListIdBookmarksBookmarkIdKey() {
  return ['lists', '/lists/:listId/bookmarks/:bookmarkId', 'PUT'] as const
}

export function usePutListsListIdBookmarksBookmarkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsListIdBookmarksBookmarkIdKey()
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
            (typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$put']
          >
        },
      ) => parseResponse(client.lists[':listId'].bookmarks[':bookmarkId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteListsListIdBookmarksBookmarkIdKey() {
  return ['lists', '/lists/:listId/bookmarks/:bookmarkId', 'DELETE'] as const
}

export function useDeleteListsListIdBookmarksBookmarkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteListsListIdBookmarksBookmarkIdKey()
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
            (typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$delete']
          >
        },
      ) =>
        parseResponse(client.lists[':listId'].bookmarks[':bookmarkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function useGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTagsKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function usePostTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.$post> }) =>
        parseResponse(client.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagIdKey(args: InferRequestType<(typeof client.tags)[':tagId']['$get']>) {
  return ['tags', '/tags/:tagId', args] as const
}

export function useGetTagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagId<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTagsTagIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsTagIdKey() {
  return ['tags', '/tags/:tagId', 'DELETE'] as const
}

export function useDeleteTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tagId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tagId']['$delete']> },
      ) => parseResponse(client.tags[':tagId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTagsTagIdKey() {
  return ['tags', '/tags/:tagId', 'PATCH'] as const
}

export function usePatchTagsTagId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tagId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTagsTagIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tagId']['$patch']> },
      ) => parseResponse(client.tags[':tagId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagIdBookmarksKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>,
) {
  return ['tags', '/tags/:tagId/bookmarks', args] as const
}

export function useGetTagsTagIdBookmarks<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
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
        ? getGetTagsTagIdBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTagIdBookmarks<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
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
        ? getGetTagsTagIdBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tagId'].bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHighlightsKey(args: InferRequestType<typeof client.highlights.$get>) {
  return ['highlights', '/highlights', args] as const
}

export function useGetHighlights<TError = unknown>(
  args: InferRequestType<typeof client.highlights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHighlightsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHighlights<TError = unknown>(
  args: InferRequestType<typeof client.highlights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHighlightsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.highlights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHighlightsKey() {
  return ['highlights', '/highlights', 'POST'] as const
}

export function usePostHighlights<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.highlights.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHighlightsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.highlights.$post> }) =>
        parseResponse(client.highlights.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHighlightsHighlightIdKey(
  args: InferRequestType<(typeof client.highlights)[':highlightId']['$get']>,
) {
  return ['highlights', '/highlights/:highlightId', args] as const
}

export function useGetHighlightsHighlightId<TError = unknown>(
  args: InferRequestType<(typeof client.highlights)[':highlightId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
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
        ? getGetHighlightsHighlightIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.highlights[':highlightId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHighlightsHighlightId<TError = unknown>(
  args: InferRequestType<(typeof client.highlights)[':highlightId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
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
        ? getGetHighlightsHighlightIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.highlights[':highlightId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteHighlightsHighlightIdKey() {
  return ['highlights', '/highlights/:highlightId', 'DELETE'] as const
}

export function useDeleteHighlightsHighlightId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.highlights)[':highlightId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHighlightsHighlightIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.highlights)[':highlightId']['$delete']> },
      ) => parseResponse(client.highlights[':highlightId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchHighlightsHighlightIdKey() {
  return ['highlights', '/highlights/:highlightId', 'PATCH'] as const
}

export function usePatchHighlightsHighlightId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.highlights)[':highlightId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchHighlightsHighlightIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.highlights)[':highlightId']['$patch']> },
      ) => parseResponse(client.highlights[':highlightId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersMeKey() {
  return ['users', '/users/me'] as const
}

export function useGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersMeStatsKey() {
  return ['users', '/users/me/stats'] as const
}

export function useGetUsersMeStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersMeStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersMeStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.me.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssetsKey() {
  return ['assets', '/assets', 'POST'] as const
}

export function usePostAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.assets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.$post> }) =>
        parseResponse(client.assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetsAssetIdKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
) {
  return ['assets', '/assets/:assetId', args] as const
}

export function useGetAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetIdSignedUrlKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>,
) {
  return ['assets', '/assets/:assetId/signed-url', args] as const
}

export function useGetAssetsAssetIdSignedUrl<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
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
        ? getGetAssetsAssetIdSignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId']['signed-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetIdSignedUrl<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
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
        ? getGetAssetsAssetIdSignedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId']['signed-url'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminUsersUserIdKey() {
  return ['admin', '/admin/users/:userId', 'PUT'] as const
}

export function usePutAdminUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':userId']['$put']> },
      ) => parseResponse(client.admin.users[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminJobsTriggerRecrawlKey() {
  return ['admin', '/admin/jobs/trigger/recrawl', 'POST'] as const
}

export function usePostAdminJobsTriggerRecrawl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.jobs.trigger.recrawl.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.jobs.trigger.recrawl.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminJobsTriggerRecrawlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.jobs.trigger.recrawl.$post> },
      ) => parseResponse(client.admin.jobs.trigger.recrawl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminJobsTriggerReindexKey() {
  return ['admin', '/admin/jobs/trigger/reindex', 'POST'] as const
}

export function usePostAdminJobsTriggerReindex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.jobs.trigger.reindex.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.jobs.trigger.reindex.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminJobsTriggerReindexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.jobs.trigger.reindex.$post> },
      ) => parseResponse(client.admin.jobs.trigger.reindex.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminJobsTriggerInferenceKey() {
  return ['admin', '/admin/jobs/trigger/inference', 'POST'] as const
}

export function usePostAdminJobsTriggerInference<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.jobs.trigger.inference.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.jobs.trigger.inference.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminJobsTriggerInferenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.jobs.trigger.inference.$post> },
      ) => parseResponse(client.admin.jobs.trigger.inference.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupsKey() {
  return ['backups', '/backups'] as const
}

export function useGetBackups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBackupsKey() {
  return ['backups', '/backups', 'POST'] as const
}

export function usePostBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.backups.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupsBackupIdKey(
  args: InferRequestType<(typeof client.backups)[':backupId']['$get']>,
) {
  return ['backups', '/backups/:backupId', args] as const
}

export function useGetBackupsBackupId<TError = unknown>(
  args: InferRequestType<(typeof client.backups)[':backupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
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
        ? getGetBackupsBackupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backups[':backupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupsBackupId<TError = unknown>(
  args: InferRequestType<(typeof client.backups)[':backupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
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
        ? getGetBackupsBackupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backups[':backupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBackupsBackupIdKey() {
  return ['backups', '/backups/:backupId', 'DELETE'] as const
}

export function useDeleteBackupsBackupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.backups)[':backupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBackupsBackupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backups)[':backupId']['$delete']> },
      ) => parseResponse(client.backups[':backupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupsBackupIdDownloadKey(
  args: InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>,
) {
  return ['backups', '/backups/:backupId/download', args] as const
}

export function useGetBackupsBackupIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
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
        ? getGetBackupsBackupIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backups[':backupId'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupsBackupIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
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
        ? getGetBackupsBackupIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backups[':backupId'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeedsKey() {
  return ['feeds', '/feeds'] as const
}

export function useGetFeeds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetFeedsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeeds<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetFeedsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFeedsKey() {
  return ['feeds', '/feeds', 'POST'] as const
}

export function usePostFeeds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.feeds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.feeds.$post> }) =>
        parseResponse(client.feeds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFeedsFeedIdKey(
  args: InferRequestType<(typeof client.feeds)[':feedId']['$get']>,
) {
  return ['feeds', '/feeds/:feedId', args] as const
}

export function useGetFeedsFeedId<TError = unknown>(
  args: InferRequestType<(typeof client.feeds)[':feedId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFeedsFeedIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds[':feedId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedsFeedId<TError = unknown>(
  args: InferRequestType<(typeof client.feeds)[':feedId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFeedsFeedIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feeds[':feedId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFeedsFeedIdKey() {
  return ['feeds', '/feeds/:feedId', 'DELETE'] as const
}

export function useDeleteFeedsFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.feeds)[':feedId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFeedsFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.feeds)[':feedId']['$delete']> },
      ) => parseResponse(client.feeds[':feedId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFeedsFeedIdKey() {
  return ['feeds', '/feeds/:feedId', 'PATCH'] as const
}

export function usePatchFeedsFeedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.feeds)[':feedId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFeedsFeedIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.feeds)[':feedId']['$patch']> },
      ) => parseResponse(client.feeds[':feedId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedsFeedIdFetchKey() {
  return ['feeds', '/feeds/:feedId/fetch', 'POST'] as const
}

export function usePostFeedsFeedIdFetch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.feeds)[':feedId']['fetch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.feeds)[':feedId']['fetch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedsFeedIdFetchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.feeds)[':feedId']['fetch']['$post']> },
      ) => parseResponse(client.feeds[':feedId'].fetch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
