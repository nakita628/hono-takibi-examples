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

export function getBookmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.$get>>,
) {
  return ['bookmarks', '/bookmarks', toValue(args)] as const
}

export function getBookmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBookmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>
          >,
          ReturnType<typeof getBookmarksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBookmarks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bookmarks.$post>,
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
  const mutationDefaults = getPostBookmarksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBookmarksSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.search.$get>>,
) {
  return ['bookmarks', '/bookmarks/search', toValue(args)] as const
}

export function getBookmarksSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookmarksSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bookmarks.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>
            >
          >,
          ReturnType<typeof getBookmarksSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bookmarks.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookmarksCheckUrlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)['check-url']['$get']>>,
) {
  return ['bookmarks', '/bookmarks/check-url', toValue(args)] as const
}

export function getBookmarksCheckUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)['check-url']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksCheckUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks['check-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookmarksCheckUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)['check-url']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookmarksCheckUrlQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)['check-url']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksCheckUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksCheckUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks['check-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookmarksBookmarkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>>,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId', toValue(args)] as const
}

export function getBookmarksBookmarkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksBookmarkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookmarksBookmarkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bookmarks)[':bookmarkId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookmarksBookmarkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksBookmarkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksBookmarkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks[':bookmarkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBookmarksBookmarkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteBookmarksBookmarkIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchBookmarksBookmarkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchBookmarksBookmarkIdMutationOptions<TError, TOnMutateResult>(
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

export function getBookmarksBookmarkIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>
  >,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/content', toValue(args)] as const
}

export function getBookmarksBookmarkIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksBookmarkIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookmarksBookmarkIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookmarksBookmarkIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksBookmarkIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksBookmarkIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks[':bookmarkId'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBookmarksBookmarkIdSummarize<
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
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bookmarks)[':bookmarkId']['summarize']['$post']>,
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
  const mutationDefaults = getPostBookmarksBookmarkIdSummarizeMutationOptions<
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

export function usePostBookmarksBookmarkIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostBookmarksBookmarkIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteBookmarksBookmarkIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteBookmarksBookmarkIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getBookmarksBookmarkIdListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>
  >,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/lists', toValue(args)] as const
}

export function getBookmarksBookmarkIdListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksBookmarkIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookmarksBookmarkIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookmarksBookmarkIdListsQueryKey>
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
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksBookmarkIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksBookmarkIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks[':bookmarkId'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBookmarksBookmarkIdHighlightsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>
  >,
) {
  return ['bookmarks', '/bookmarks/:bookmarkId/highlights', toValue(args)] as const
}

export function getBookmarksBookmarkIdHighlightsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBookmarksBookmarkIdHighlightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bookmarks[':bookmarkId'].highlights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBookmarksBookmarkIdHighlights<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBookmarksBookmarkIdHighlightsQueryKey>
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
          Awaited<ReturnType<(typeof client.bookmarks)[':bookmarkId']['highlights']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBookmarksBookmarkIdHighlightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBookmarksBookmarkIdHighlightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bookmarks[':bookmarkId'].highlights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBookmarksBookmarkIdAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostBookmarksBookmarkIdAssetsMutationOptions<TError, TOnMutateResult>(
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

export function usePutBookmarksBookmarkIdAssetsAssetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutBookmarksBookmarkIdAssetsAssetIdMutationOptions<
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

export function useDeleteBookmarksBookmarkIdAssetsAssetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteBookmarksBookmarkIdAssetsAssetIdMutationOptions<
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

export function getListsQueryKey() {
  return ['lists', '/lists'] as const
}

export function getListsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getListsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          ReturnType<typeof getListsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getListsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lists.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
          TError,
          InferRequestType<typeof client.lists.$post>,
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
  const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsListIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':listId']['$get']>>,
) {
  return ['lists', '/lists/:listId', toValue(args)] as const
}

export function getListsListIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':listId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':listId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':listId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
            >
          >,
          ReturnType<typeof getListsListIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':listId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':listId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.lists)[':listId']['$patch']>,
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
  const mutationDefaults = getPatchListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function getListsListIdBookmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>>,
) {
  return ['lists', '/lists/:listId/bookmarks', toValue(args)] as const
}

export function getListsListIdBookmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsListIdBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':listId'].bookmarks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsListIdBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':listId']['bookmarks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsListIdBookmarksQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)[':listId']['bookmarks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsListIdBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':listId'].bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutListsListIdBookmarksBookmarkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutListsListIdBookmarksBookmarkIdMutationOptions<
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

export function useDeleteListsListIdBookmarksBookmarkId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteListsListIdBookmarksBookmarkIdMutationOptions<
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

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  return ['tags', '/tags', toValue(args)] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
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
  const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsTagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['$get']>>,
) {
  return ['tags', '/tags/:tagId', toValue(args)] as const
}

export function getTagsTagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tagId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsTagIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tagId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tagId']['$delete']>,
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
  const mutationDefaults = getDeleteTagsTagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchTagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':tagId']['$patch']>,
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
  const mutationDefaults = getPatchTagsTagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsTagIdBookmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>,
) {
  return ['tags', '/tags/:tagId/bookmarks', toValue(args)] as const
}

export function getTagsTagIdBookmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagIdBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tagId'].bookmarks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsTagIdBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsTagIdBookmarksQueryKey>
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
          Awaited<ReturnType<(typeof client.tags)[':tagId']['bookmarks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagIdBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagIdBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tagId'].bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHighlightsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.highlights.$get>>,
) {
  return ['highlights', '/highlights', toValue(args)] as const
}

export function getHighlightsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.highlights.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHighlightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.highlights.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHighlights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.highlights.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>
          >,
          ReturnType<typeof getHighlightsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHighlightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHighlightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.highlights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostHighlights<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.highlights.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.highlights.$post>,
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
  const mutationDefaults = getPostHighlightsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHighlightsHighlightIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.highlights)[':highlightId']['$get']>>,
) {
  return ['highlights', '/highlights/:highlightId', toValue(args)] as const
}

export function getHighlightsHighlightIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.highlights)[':highlightId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHighlightsHighlightIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.highlights[':highlightId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHighlightsHighlightId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.highlights)[':highlightId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHighlightsHighlightIdQueryKey>
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
          Awaited<ReturnType<(typeof client.highlights)[':highlightId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHighlightsHighlightIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHighlightsHighlightIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.highlights[':highlightId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteHighlightsHighlightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteHighlightsHighlightIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchHighlightsHighlightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchHighlightsHighlightIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeStatsQueryKey() {
  return ['users', '/users/me/stats'] as const
}

export function getUsersMeStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMeStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
          >,
          ReturnType<typeof getUsersMeStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.assets.$post>,
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
  const mutationDefaults = getPostAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssetsAssetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
) {
  return ['assets', '/assets/:assetId', toValue(args)] as const
}

export function getAssetsAssetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':assetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
            >
          >,
          ReturnType<typeof getAssetsAssetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':assetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetIdSignedUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>
  >,
) {
  return ['assets', '/assets/:assetId/signed-url', toValue(args)] as const
}

export function getAssetsAssetIdSignedUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetIdSignedUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':assetId']['signed-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetIdSignedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['signed-url']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsAssetIdSignedUrlQueryKey>
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
          Awaited<ReturnType<(typeof client.assets)[':assetId']['signed-url']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdSignedUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetIdSignedUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':assetId']['signed-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutAdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostAdminJobsTriggerRecrawl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAdminJobsTriggerRecrawlMutationOptions<TError, TOnMutateResult>(
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

export function usePostAdminJobsTriggerReindex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAdminJobsTriggerReindexMutationOptions<TError, TOnMutateResult>(
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

export function usePostAdminJobsTriggerInference<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAdminJobsTriggerInferenceMutationOptions<TError, TOnMutateResult>(
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

export function getBackupsQueryKey() {
  return ['backups', '/backups'] as const
}

export function getBackupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBackupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.backups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBackups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>
          >,
          ReturnType<typeof getBackupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBackupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.backups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBackups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backups.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostBackupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBackupsBackupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.backups)[':backupId']['$get']>>,
) {
  return ['backups', '/backups/:backupId', toValue(args)] as const
}

export function getBackupsBackupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.backups)[':backupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBackupsBackupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.backups[':backupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBackupsBackupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.backups)[':backupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBackupsBackupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.backups)[':backupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupsBackupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBackupsBackupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.backups[':backupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBackupsBackupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteBackupsBackupIdMutationOptions<TError, TOnMutateResult>(
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

export function getBackupsBackupIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>
  >,
) {
  return ['backups', '/backups/:backupId/download', toValue(args)] as const
}

export function getBackupsBackupIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBackupsBackupIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.backups[':backupId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBackupsBackupIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.backups)[':backupId']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBackupsBackupIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.backups)[':backupId']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupsBackupIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBackupsBackupIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.backups[':backupId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedsQueryKey() {
  return ['feeds', '/feeds'] as const
}

export function getFeedsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFeedsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feeds.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeeds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
          ReturnType<typeof getFeedsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFeedsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.feeds.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$post>>>>>,
          TError,
          InferRequestType<typeof client.feeds.$post>,
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
  const mutationDefaults = getPostFeedsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFeedsFeedIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)[':feedId']['$get']>>,
) {
  return ['feeds', '/feeds/:feedId', toValue(args)] as const
}

export function getFeedsFeedIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)[':feedId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedsFeedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feeds[':feedId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedsFeedId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)[':feedId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
            >
          >,
          ReturnType<typeof getFeedsFeedIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsFeedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedsFeedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feeds[':feedId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFeedsFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteFeedsFeedIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchFeedsFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':feedId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.feeds)[':feedId']['$patch']>,
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
  const mutationDefaults = getPatchFeedsFeedIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostFeedsFeedIdFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostFeedsFeedIdFetchMutationOptions<TError, TOnMutateResult>(
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
