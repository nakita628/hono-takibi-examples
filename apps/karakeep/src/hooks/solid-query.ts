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

export function getBookmarksQueryKey(args: InferRequestType<typeof client.bookmarks.$get>) {
  return ['bookmarks', '/bookmarks', args] as const
}

export function getBookmarksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bookmarks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookmarksQueryKey>
  >({
    queryKey: getBookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookmarks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBookmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bookmarks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBookmarksQueryKey>
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
    return { ...getBookmarksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBookmarksMutationKey() {
  return ['bookmarks', '/bookmarks', 'POST'] as const
}

export function getPostBookmarksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$post>>>>>,
    TError,
    InferRequestType<typeof client.bookmarks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBookmarksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bookmarks.$post>) {
      return parseResponse(client.bookmarks.$post(args, options))
    },
  })
}

export function createPostBookmarks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bookmarks.$post>,
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
    const mutationDefaults = getPostBookmarksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBookmarksSearchQueryKey(
  args: InferRequestType<typeof client.bookmarks.search.$get>,
) {
  return ['bookmarks', '/bookmarks/search', args] as const
}

export function getBookmarksSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bookmarks.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksSearchQueryKey>
  >({
    queryKey: getBookmarksSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookmarks.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBookmarksSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bookmarks.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBookmarksSearchQueryKey>
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
    return { ...getBookmarksSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBookmarksCheckUrlQueryKey(
  args: InferRequestType<(typeof client.bookmarks)['check-url']['$get']>,
) {
  return ['bookmarks', '/bookmarks/check-url', args] as const
}

export function getBookmarksCheckUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bookmarks)['check-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksCheckUrlQueryKey>
  >({
    queryKey: getBookmarksCheckUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookmarks['check-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBookmarksCheckUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bookmarks)['check-url']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBookmarksCheckUrlQueryKey>
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
    return { ...getBookmarksCheckUrlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBookmarksBookmarkIdQueryKey(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId', args] as const
}

export function getBookmarksBookmarkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksBookmarkIdQueryKey>
  >({
    queryKey: getBookmarksBookmarkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBookmarksBookmarkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBookmarksBookmarkIdQueryKey>
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
    return { ...getBookmarksBookmarkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteBookmarksBookmarkIdMutationKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId', 'DELETE'] as const
}

export function getDeleteBookmarksBookmarkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBookmarksBookmarkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$delete']>) {
      return parseResponse(client.bookmarks[':bookmarkId'].$delete(args, options))
    },
  })
}

export function createDeleteBookmarksBookmarkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$delete']>,
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
    const mutationDefaults = getDeleteBookmarksBookmarkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBookmarksBookmarkIdMutationKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId', 'PATCH'] as const
}

export function getPatchBookmarksBookmarkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBookmarksBookmarkIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$patch']>) {
      return parseResponse(client.bookmarks[':bookmarkId'].$patch(args, options))
    },
  })
}

export function createPatchBookmarksBookmarkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$patch']>,
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
    const mutationDefaults = getPatchBookmarksBookmarkIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBookmarksBookmarkIdContentQueryKey(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/content', args] as const
}

export function getBookmarksBookmarkIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksBookmarkIdContentQueryKey>
  >({
    queryKey: getBookmarksBookmarkIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBookmarksBookmarkIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBookmarksBookmarkIdContentQueryKey>
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
      ...getBookmarksBookmarkIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBookmarksBookmarkIdSummarizeMutationKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/summarize', 'POST'] as const
}

export function getPostBookmarksBookmarkIdSummarizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBookmarksBookmarkIdSummarizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>,
    ) {
      return parseResponse(client.bookmarks[':bookmarkId'].summarize.$post(args, options))
    },
  })
}

export function createPostBookmarksBookmarkIdSummarize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>,
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
    const mutationDefaults = getPostBookmarksBookmarkIdSummarizeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBookmarksBookmarkIdTagsMutationKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/tags', 'POST'] as const
}

export function getPostBookmarksBookmarkIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBookmarksBookmarkIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']>,
    ) {
      return parseResponse(client.bookmarks[':bookmarkId'].tags.$post(args, options))
    },
  })
}

export function createPostBookmarksBookmarkIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$post']>,
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
    const mutationDefaults = getPostBookmarksBookmarkIdTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBookmarksBookmarkIdTagsMutationKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/tags', 'DELETE'] as const
}

export function getDeleteBookmarksBookmarkIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBookmarksBookmarkIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']>,
    ) {
      return parseResponse(client.bookmarks[':bookmarkId'].tags.$delete(args, options))
    },
  })
}

export function createDeleteBookmarksBookmarkIdTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':bookmarkId']['tags']['$delete']>,
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
    const mutationDefaults = getDeleteBookmarksBookmarkIdTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBookmarksBookmarkIdListsQueryKey(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/lists', args] as const
}

export function getBookmarksBookmarkIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksBookmarkIdListsQueryKey>
  >({
    queryKey: getBookmarksBookmarkIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBookmarksBookmarkIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBookmarksBookmarkIdListsQueryKey>
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
      ...getBookmarksBookmarkIdListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBookmarksBookmarkIdHighlightsQueryKey(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/highlights', args] as const
}

export function getBookmarksBookmarkIdHighlightsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksBookmarkIdHighlightsQueryKey>
  >({
    queryKey: getBookmarksBookmarkIdHighlightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].highlights.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBookmarksBookmarkIdHighlights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBookmarksBookmarkIdHighlightsQueryKey>
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
      ...getBookmarksBookmarkIdHighlightsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBookmarksBookmarkIdAssetsMutationKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/assets', 'POST'] as const
}

export function getPostBookmarksBookmarkIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBookmarksBookmarkIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']>,
    ) {
      return parseResponse(client.bookmarks[':bookmarkId'].assets.$post(args, options))
    },
  })
}

export function createPostBookmarksBookmarkIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets']['$post']>,
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
    const mutationDefaults = getPostBookmarksBookmarkIdAssetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutBookmarksBookmarkIdAssetsAssetIdMutationKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/assets/:assetId', 'PUT'] as const
}

export function getPutBookmarksBookmarkIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBookmarksBookmarkIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$put']
      >,
    ) {
      return parseResponse(client.bookmarks[':bookmarkId'].assets[':assetId'].$put(args, options))
    },
  })
}

export function createPutBookmarksBookmarkIdAssetsAssetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$put']>,
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
    const mutationDefaults = getPutBookmarksBookmarkIdAssetsAssetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBookmarksBookmarkIdAssetsAssetIdMutationKey() {
  return ['bookmarks', '/bookmarks/:bookmarkId/assets/:assetId', 'DELETE'] as const
}

export function getDeleteBookmarksBookmarkIdAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBookmarksBookmarkIdAssetsAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].assets[':assetId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteBookmarksBookmarkIdAssetsAssetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.bookmarks)[':bookmarkId']['assets'][':assetId']['$delete']
          >,
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
    const mutationDefaults = getDeleteBookmarksBookmarkIdAssetsAssetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListsQueryKey() {
  return ['lists', '/lists'] as const
}

export function getListsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsQueryKey>
  >({
    queryKey: getListsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.lists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getListsQueryKey>
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
    return { ...getListsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
          TError,
          InferRequestType<typeof client.lists.$post>,
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
    const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListsListIdQueryKey(
  args: InferRequestType<(typeof client.lists)[':listId']['$get']>,
) {
  return ['lists', '/lists/:listId', args] as const
}

export function getListsListIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':listId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdQueryKey>
  >({
    queryKey: getListsListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':listId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListsListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':listId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListsListIdQueryKey>
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
    return { ...getListsListIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteListsListIdMutationKey() {
  return ['lists', '/lists/:listId', 'DELETE'] as const
}

export function getDeleteListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.lists)[':listId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteListsListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':listId']['$delete']>) {
      return parseResponse(client.lists[':listId'].$delete(args, options))
    },
  })
}

export function createDeleteListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.lists)[':listId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.lists)[':listId']['$delete']>,
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
    const mutationDefaults = getDeleteListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchListsListIdMutationKey() {
  return ['lists', '/lists/:listId', 'PATCH'] as const
}

export function getPatchListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':listId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchListsListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':listId']['$patch']>) {
      return parseResponse(client.lists[':listId'].$patch(args, options))
    },
  })
}

export function createPatchListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':listId']['$patch']>,
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
    const mutationDefaults = getPatchListsListIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListsListIdBookmarksQueryKey(
  args: InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>,
) {
  return ['lists', '/lists/:listId/bookmarks', args] as const
}

export function getListsListIdBookmarksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdBookmarksQueryKey>
  >({
    queryKey: getListsListIdBookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':listId'].bookmarks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createListsListIdBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListsListIdBookmarksQueryKey>
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
      ...getListsListIdBookmarksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutListsListIdBookmarksBookmarkIdMutationKey() {
  return ['lists', '/lists/:listId/bookmarks/:bookmarkId', 'PUT'] as const
}

export function getPutListsListIdBookmarksBookmarkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsListIdBookmarksBookmarkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$put']>,
    ) {
      return parseResponse(client.lists[':listId'].bookmarks[':bookmarkId'].$put(args, options))
    },
  })
}

export function createPutListsListIdBookmarksBookmarkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$put']>,
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
    const mutationDefaults = getPutListsListIdBookmarksBookmarkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteListsListIdBookmarksBookmarkIdMutationKey() {
  return ['lists', '/lists/:listId/bookmarks/:bookmarkId', 'DELETE'] as const
}

export function getDeleteListsListIdBookmarksBookmarkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteListsListIdBookmarksBookmarkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$delete']
      >,
    ) {
      return parseResponse(client.lists[':listId'].bookmarks[':bookmarkId'].$delete(args, options))
    },
  })
}

export function createDeleteListsListIdBookmarksBookmarkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.lists)[':listId']['bookmarks'][':bookmarkId']['$delete']>,
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
    const mutationDefaults = getDeleteListsListIdBookmarksBookmarkIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsQueryKey(args: InferRequestType<typeof client.tags.$get>) {
  return ['tags', '/tags', args] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTagsQueryKey>
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
    return { ...getTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsMutationKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function getPostTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$post>) {
      return parseResponse(client.tags.$post(args, options))
    },
  })
}

export function createPostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
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
    const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsTagIdQueryKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['$get']>,
) {
  return ['tags', '/tags/:tagId', args] as const
}

export function getTagsTagIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tags)[':tagId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdQueryKey>
  >({
    queryKey: getTagsTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tagId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tagId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagIdQueryKey>
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
    return { ...getTagsTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteTagsTagIdMutationKey() {
  return ['tags', '/tags/:tagId', 'DELETE'] as const
}

export function getDeleteTagsTagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':tagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tagId']['$delete']>) {
      return parseResponse(client.tags[':tagId'].$delete(args, options))
    },
  })
}

export function createDeleteTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tagId']['$delete']>,
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
    const mutationDefaults = getDeleteTagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchTagsTagIdMutationKey() {
  return ['tags', '/tags/:tagId', 'PATCH'] as const
}

export function getPatchTagsTagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tagId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tagId']['$patch']>) {
      return parseResponse(client.tags[':tagId'].$patch(args, options))
    },
  })
}

export function createPatchTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':tagId']['$patch']>,
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
    const mutationDefaults = getPatchTagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsTagIdBookmarksQueryKey(
  args: InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>,
) {
  return ['tags', '/tags/:tagId/bookmarks', args] as const
}

export function getTagsTagIdBookmarksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdBookmarksQueryKey>
  >({
    queryKey: getTagsTagIdBookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tagId'].bookmarks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTagsTagIdBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagIdBookmarksQueryKey>
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
    return { ...getTagsTagIdBookmarksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHighlightsQueryKey(args: InferRequestType<typeof client.highlights.$get>) {
  return ['highlights', '/highlights', args] as const
}

export function getHighlightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.highlights.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHighlightsQueryKey>
  >({
    queryKey: getHighlightsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.highlights.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHighlights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.highlights.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHighlightsQueryKey>
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
    return { ...getHighlightsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostHighlightsMutationKey() {
  return ['highlights', '/highlights', 'POST'] as const
}

export function getPostHighlightsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$post>>>>>,
    TError,
    InferRequestType<typeof client.highlights.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHighlightsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.highlights.$post>) {
      return parseResponse(client.highlights.$post(args, options))
    },
  })
}

export function createPostHighlights<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.highlights.$post>,
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
    const mutationDefaults = getPostHighlightsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHighlightsHighlightIdQueryKey(
  args: InferRequestType<(typeof client.highlights)[':highlightId']['$get']>,
) {
  return ['highlights', '/highlights/:highlightId', args] as const
}

export function getHighlightsHighlightIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.highlights)[':highlightId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHighlightsHighlightIdQueryKey>
  >({
    queryKey: getHighlightsHighlightIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.highlights[':highlightId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHighlightsHighlightId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.highlights)[':highlightId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHighlightsHighlightIdQueryKey>
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
      ...getHighlightsHighlightIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteHighlightsHighlightIdMutationKey() {
  return ['highlights', '/highlights/:highlightId', 'DELETE'] as const
}

export function getDeleteHighlightsHighlightIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.highlights)[':highlightId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHighlightsHighlightIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.highlights)[':highlightId']['$delete']>,
    ) {
      return parseResponse(client.highlights[':highlightId'].$delete(args, options))
    },
  })
}

export function createDeleteHighlightsHighlightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.highlights)[':highlightId']['$delete']>,
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
    const mutationDefaults = getDeleteHighlightsHighlightIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchHighlightsHighlightIdMutationKey() {
  return ['highlights', '/highlights/:highlightId', 'PATCH'] as const
}

export function getPatchHighlightsHighlightIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.highlights)[':highlightId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchHighlightsHighlightIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.highlights)[':highlightId']['$patch']>) {
      return parseResponse(client.highlights[':highlightId'].$patch(args, options))
    },
  })
}

export function createPatchHighlightsHighlightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.highlights)[':highlightId']['$patch']>,
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
    const mutationDefaults = getPatchHighlightsHighlightIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeQueryKey>
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
    return { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersMeStatsQueryKey() {
  return ['users', '/users/me/stats'] as const
}

export function getUsersMeStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeStatsQueryKey>
  >({
    queryKey: getUsersMeStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersMeStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUsersMeStatsQueryKey>
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
    return { ...getUsersMeStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAssetsMutationKey() {
  return ['assets', '/assets', 'POST'] as const
}

export function getPostAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.$post>) {
      return parseResponse(client.assets.$post(args, options))
    },
  })
}

export function createPostAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.assets.$post>,
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
    const mutationDefaults = getPostAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAssetsAssetIdQueryKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
) {
  return ['assets', '/assets/:assetId', args] as const
}

export function getAssetsAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdQueryKey>
  >({
    queryKey: getAssetsAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':assetId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsAssetIdQueryKey>
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
    return { ...getAssetsAssetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetsAssetIdSignedUrlQueryKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>,
) {
  return ['assets', '/assets/:assetId/signed-url', args] as const
}

export function getAssetsAssetIdSignedUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdSignedUrlQueryKey>
  >({
    queryKey: getAssetsAssetIdSignedUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':assetId']['signed-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssetsAssetIdSignedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetsAssetIdSignedUrlQueryKey>
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
      ...getAssetsAssetIdSignedUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAdminUsersUserIdMutationKey() {
  return ['admin', '/admin/users/:userId', 'PUT'] as const
}

export function getPutAdminUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':userId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':userId']['$put']>) {
      return parseResponse(client.admin.users[':userId'].$put(args, options))
    },
  })
}

export function createPutAdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':userId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':userId']['$put']>,
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
    const mutationDefaults = getPutAdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdminJobsTriggerRecrawlMutationKey() {
  return ['admin', '/admin/jobs/trigger/recrawl', 'POST'] as const
}

export function getPostAdminJobsTriggerRecrawlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.jobs.trigger.recrawl.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.jobs.trigger.recrawl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminJobsTriggerRecrawlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.jobs.trigger.recrawl.$post>) {
      return parseResponse(client.admin.jobs.trigger.recrawl.$post(args, options))
    },
  })
}

export function createPostAdminJobsTriggerRecrawl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.jobs.trigger.recrawl.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.admin.jobs.trigger.recrawl.$post>,
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
    const mutationDefaults = getPostAdminJobsTriggerRecrawlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdminJobsTriggerReindexMutationKey() {
  return ['admin', '/admin/jobs/trigger/reindex', 'POST'] as const
}

export function getPostAdminJobsTriggerReindexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.jobs.trigger.reindex.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.jobs.trigger.reindex.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminJobsTriggerReindexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.jobs.trigger.reindex.$post>) {
      return parseResponse(client.admin.jobs.trigger.reindex.$post(args, options))
    },
  })
}

export function createPostAdminJobsTriggerReindex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.jobs.trigger.reindex.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.admin.jobs.trigger.reindex.$post>,
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
    const mutationDefaults = getPostAdminJobsTriggerReindexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAdminJobsTriggerInferenceMutationKey() {
  return ['admin', '/admin/jobs/trigger/inference', 'POST'] as const
}

export function getPostAdminJobsTriggerInferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.jobs.trigger.inference.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.jobs.trigger.inference.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminJobsTriggerInferenceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.jobs.trigger.inference.$post>) {
      return parseResponse(client.admin.jobs.trigger.inference.$post(args, options))
    },
  })
}

export function createPostAdminJobsTriggerInference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.jobs.trigger.inference.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.admin.jobs.trigger.inference.$post>,
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
    const mutationDefaults = getPostAdminJobsTriggerInferenceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBackupsQueryKey() {
  return ['backups', '/backups'] as const
}

export function getBackupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackupsQueryKey>
  >({
    queryKey: getBackupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.backups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBackups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBackupsQueryKey>
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
    return { ...getBackupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostBackupsMutationKey() {
  return ['backups', '/backups', 'POST'] as const
}

export function getPostBackupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBackupsMutationKey(),
    async mutationFn() {
      return parseResponse(client.backups.$post(undefined, options))
    },
  })
}

export function createPostBackups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$post>>>>
          >,
          TError,
          void,
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
    const mutationDefaults = getPostBackupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBackupsBackupIdQueryKey(
  args: InferRequestType<(typeof client.backups)[':backupId']['$get']>,
) {
  return ['backups', '/backups/:backupId', args] as const
}

export function getBackupsBackupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backups)[':backupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupsBackupIdQueryKey>
  >({
    queryKey: getBackupsBackupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backups[':backupId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.backups)[':backupId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBackupsBackupIdQueryKey>
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
    return { ...getBackupsBackupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteBackupsBackupIdMutationKey() {
  return ['backups', '/backups/:backupId', 'DELETE'] as const
}

export function getDeleteBackupsBackupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.backups)[':backupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupsBackupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.backups)[':backupId']['$delete']>) {
      return parseResponse(client.backups[':backupId'].$delete(args, options))
    },
  })
}

export function createDeleteBackupsBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.backups)[':backupId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.backups)[':backupId']['$delete']>,
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
    const mutationDefaults = getDeleteBackupsBackupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBackupsBackupIdDownloadQueryKey(
  args: InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>,
) {
  return ['backups', '/backups/:backupId/download', args] as const
}

export function getBackupsBackupIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupsBackupIdDownloadQueryKey>
  >({
    queryKey: getBackupsBackupIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backups[':backupId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBackupsBackupIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBackupsBackupIdDownloadQueryKey>
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
      ...getBackupsBackupIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFeedsQueryKey() {
  return ['feeds', '/feeds'] as const
}

export function getFeedsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedsQueryKey>
  >({
    queryKey: getFeedsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeeds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getFeedsQueryKey>
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
    return { ...getFeedsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostFeedsMutationKey() {
  return ['feeds', '/feeds', 'POST'] as const
}

export function getPostFeedsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$post>>>>>,
    TError,
    InferRequestType<typeof client.feeds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.feeds.$post>) {
      return parseResponse(client.feeds.$post(args, options))
    },
  })
}

export function createPostFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$post>>>>>,
          TError,
          InferRequestType<typeof client.feeds.$post>,
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
    const mutationDefaults = getPostFeedsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFeedsFeedIdQueryKey(
  args: InferRequestType<(typeof client.feeds)[':feedId']['$get']>,
) {
  return ['feeds', '/feeds/:feedId', args] as const
}

export function getFeedsFeedIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feeds)[':feedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsFeedIdQueryKey>
  >({
    queryKey: getFeedsFeedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feeds[':feedId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeedsFeedId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feeds)[':feedId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeedsFeedIdQueryKey>
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
    return { ...getFeedsFeedIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteFeedsFeedIdMutationKey() {
  return ['feeds', '/feeds/:feedId', 'DELETE'] as const
}

export function getDeleteFeedsFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.feeds)[':feedId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFeedsFeedIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.feeds)[':feedId']['$delete']>) {
      return parseResponse(client.feeds[':feedId'].$delete(args, options))
    },
  })
}

export function createDeleteFeedsFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.feeds)[':feedId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.feeds)[':feedId']['$delete']>,
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
    const mutationDefaults = getDeleteFeedsFeedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchFeedsFeedIdMutationKey() {
  return ['feeds', '/feeds/:feedId', 'PATCH'] as const
}

export function getPatchFeedsFeedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.feeds)[':feedId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFeedsFeedIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.feeds)[':feedId']['$patch']>) {
      return parseResponse(client.feeds[':feedId'].$patch(args, options))
    },
  })
}

export function createPatchFeedsFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.feeds)[':feedId']['$patch']>,
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
    const mutationDefaults = getPatchFeedsFeedIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFeedsFeedIdFetchMutationKey() {
  return ['feeds', '/feeds/:feedId/fetch', 'POST'] as const
}

export function getPostFeedsFeedIdFetchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.feeds)[':feedId']['fetch']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.feeds)[':feedId']['fetch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsFeedIdFetchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.feeds)[':feedId']['fetch']['$post']>) {
      return parseResponse(client.feeds[':feedId'].fetch.$post(args, options))
    },
  })
}

export function createPostFeedsFeedIdFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.feeds)[':feedId']['fetch']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.feeds)[':feedId']['fetch']['$post']>,
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
    const mutationDefaults = getPostFeedsFeedIdFetchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
