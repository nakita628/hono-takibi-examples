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

export function getApiKey() {
  return ['api'] as const
}

export function getApiActivityEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.activityEntries.$get>>,
) {
  return ['api', '/api/activityEntries', toValue(args)] as const
}

export function getApiActivityEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.activityEntries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiActivityEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.activityEntries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiActivityEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.activityEntries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>
            >
          >,
          ReturnType<typeof getApiActivityEntriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiActivityEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiActivityEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.activityEntries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlbumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.$get>>,
) {
  return ['api', '/api/albums', toValue(args)] as const
}

export function getApiAlbumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>
          >,
          ReturnType<typeof getApiAlbumsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAlbumsCommentsCommentIdMutationKey() {
  return ['api', '/api/albums/comments/:commentId', 'POST'] as const
}

export function getPostApiAlbumsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.albums.comments)[':commentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.albums.comments)[':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAlbumsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.albums.comments)[':commentId']['$post']>,
    ) {
      return parseResponse(client.api.albums.comments[':commentId'].$post(args, options))
    },
  })
}

export function usePostApiAlbumsCommentsCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums.comments)[':commentId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.albums.comments)[':commentId']['$post']>,
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
  const mutationDefaults = getPostApiAlbumsCommentsCommentIdMutationOptions<
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

export function getDeleteApiAlbumsCommentsCommentIdMutationKey() {
  return ['api', '/api/albums/comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiAlbumsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.albums.comments)[':commentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.albums.comments)[':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAlbumsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.albums.comments)[':commentId']['$delete']>,
    ) {
      return parseResponse(client.api.albums.comments[':commentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiAlbumsCommentsCommentId<
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
                Awaited<ReturnType<(typeof client.api.albums.comments)[':commentId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.albums.comments)[':commentId']['$delete']>,
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
  const mutationDefaults = getDeleteApiAlbumsCommentsCommentIdMutationOptions<
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

export function getApiAlbumsNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.names.$get>>,
) {
  return ['api', '/api/albums/names', toValue(args)] as const
}

export function getApiAlbumsNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>
            >
          >,
          ReturnType<typeof getApiAlbumsNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlbumsNewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.new.$get>>,
) {
  return ['api', '/api/albums/new', toValue(args)] as const
}

export function getApiAlbumsNewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.new.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsNewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums.new.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsNew<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.new.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
          >,
          ReturnType<typeof getApiAlbumsNewQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsNewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsNewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums.new.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlbumsTopQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.top.$get>>,
) {
  return ['api', '/api/albums/top', toValue(args)] as const
}

export function getApiAlbumsTopQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.top.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsTopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums.top.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.albums.top.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
          >,
          ReturnType<typeof getApiAlbumsTopQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsTopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums.top.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlbumsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['$get']>>,
) {
  return ['api', '/api/albums/:id', toValue(args)] as const
}

export function getApiAlbumsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiAlbumsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiAlbumsIdMutationKey() {
  return ['api', '/api/albums/:id', 'DELETE'] as const
}

export function getDeleteApiAlbumsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.albums)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAlbumsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.albums)[':id']['$delete']>) {
      return parseResponse(client.api.albums[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiAlbumsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.albums)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiAlbumsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAlbumsIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['comments']['$get']>>,
) {
  return ['api', '/api/albums/:id/comments', toValue(args)] as const
}

export function getApiAlbumsIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums[':id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlbumsIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.albums)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums[':id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAlbumsIdCommentsMutationKey() {
  return ['api', '/api/albums/:id/comments', 'POST'] as const
}

export function getPostApiAlbumsIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.albums)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.albums)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAlbumsIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.albums)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.api.albums[':id'].comments.$post(args, options))
    },
  })
}

export function usePostApiAlbumsIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.albums)[':id']['comments']['$post']>,
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
  const mutationDefaults = getPostApiAlbumsIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAlbumsIdReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['reviews']['$get']>>,
) {
  return ['api', '/api/albums/:id/reviews', toValue(args)] as const
}

export function getApiAlbumsIdReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['reviews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsIdReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums[':id'].reviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['reviews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlbumsIdReviewsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsIdReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsIdReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums[':id'].reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAlbumsIdReviewsMutationKey() {
  return ['api', '/api/albums/:id/reviews', 'POST'] as const
}

export function getPostApiAlbumsIdReviewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.albums)[':id']['reviews']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAlbumsIdReviewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.albums)[':id']['reviews']['$post']>,
    ) {
      return parseResponse(client.api.albums[':id'].reviews.$post(args, options))
    },
  })
}

export function usePostApiAlbumsIdReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.albums)[':id']['reviews']['$post']>,
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
  const mutationDefaults = getPostApiAlbumsIdReviewsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiAlbumsIdReviewsReviewIdMutationKey() {
  return ['api', '/api/albums/:id/reviews/:reviewId', 'DELETE'] as const
}

export function getDeleteApiAlbumsIdReviewsReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews'][':reviewId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.albums)[':id']['reviews'][':reviewId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAlbumsIdReviewsReviewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.albums)[':id']['reviews'][':reviewId']['$delete']>,
    ) {
      return parseResponse(client.api.albums[':id'].reviews[':reviewId'].$delete(args, options))
    },
  })
}

export function useDeleteApiAlbumsIdReviewsReviewId<
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
                Awaited<
                  ReturnType<(typeof client.api.albums)[':id']['reviews'][':reviewId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.albums)[':id']['reviews'][':reviewId']['$delete']>,
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
  const mutationDefaults = getDeleteApiAlbumsIdReviewsReviewIdMutationOptions<
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

export function getApiAlbumsIdTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>>,
) {
  return ['api', '/api/albums/:id/tracks', toValue(args)] as const
}

export function getApiAlbumsIdTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsIdTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums[':id'].tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlbumsIdTracksQueryKey>
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
          Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsIdTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsIdTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums[':id'].tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlbumsIdTracksFieldsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>
  >,
) {
  return ['api', '/api/albums/:id/tracks/fields', toValue(args)] as const
}

export function getApiAlbumsIdTracksFieldsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsIdTracksFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums[':id'].tracks.fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsIdTracksFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlbumsIdTracksFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsIdTracksFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsIdTracksFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums[':id'].tracks.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAlbumsIdUserCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.albums)[':id']['user-collections']['$get']>
  >,
) {
  return ['api', '/api/albums/:id/user-collections', toValue(args)] as const
}

export function getApiAlbumsIdUserCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.albums)[':id']['user-collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAlbumsIdUserCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.albums[':id']['user-collections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAlbumsIdUserCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['user-collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.albums)[':id']['user-collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['user-collections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.albums)[':id']['user-collections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAlbumsIdUserCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.albums)[':id']['user-collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsIdUserCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAlbumsIdUserCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.albums[':id']['user-collections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiArtistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.artists.$get>>,
) {
  return ['api', '/api/artists', toValue(args)] as const
}

export function getApiArtistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.artists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArtistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.artists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.artists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>
          >,
          ReturnType<typeof getApiArtistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiArtistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArtistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.artists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiArtistsCommentsCommentIdMutationKey() {
  return ['api', '/api/artists/comments/:commentId', 'POST'] as const
}

export function getPostApiArtistsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.artists.comments)[':commentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.artists.comments)[':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiArtistsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.artists.comments)[':commentId']['$post']>,
    ) {
      return parseResponse(client.api.artists.comments[':commentId'].$post(args, options))
    },
  })
}

export function usePostApiArtistsCommentsCommentId<
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
                Awaited<ReturnType<(typeof client.api.artists.comments)[':commentId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.artists.comments)[':commentId']['$post']>,
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
  const mutationDefaults = getPostApiArtistsCommentsCommentIdMutationOptions<
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

export function getDeleteApiArtistsCommentsCommentIdMutationKey() {
  return ['api', '/api/artists/comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiArtistsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.artists.comments)[':commentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.artists.comments)[':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiArtistsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.artists.comments)[':commentId']['$delete']>,
    ) {
      return parseResponse(client.api.artists.comments[':commentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiArtistsCommentsCommentId<
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
                Awaited<ReturnType<(typeof client.api.artists.comments)[':commentId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.artists.comments)[':commentId']['$delete']>,
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
  const mutationDefaults = getDeleteApiArtistsCommentsCommentIdMutationOptions<
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

export function getApiArtistsNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.artists.names.$get>>,
) {
  return ['api', '/api/artists/names', toValue(args)] as const
}

export function getApiArtistsNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.artists.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArtistsNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.artists.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArtistsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.artists.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>
            >
          >,
          ReturnType<typeof getApiArtistsNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArtistsNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArtistsNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.artists.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiArtistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.artists)[':id']['$get']>>,
) {
  return ['api', '/api/artists/:id', toValue(args)] as const
}

export function getApiArtistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.artists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArtistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.artists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArtistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.artists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiArtistsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArtistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArtistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.artists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiArtistsIdMutationKey() {
  return ['api', '/api/artists/:id', 'DELETE'] as const
}

export function getDeleteApiArtistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.artists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiArtistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.artists)[':id']['$delete']>) {
      return parseResponse(client.api.artists[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiArtistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.artists)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.artists)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiArtistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiArtistsIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.artists)[':id']['comments']['$get']>>,
) {
  return ['api', '/api/artists/:id/comments', toValue(args)] as const
}

export function getApiArtistsIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.artists)[':id']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiArtistsIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.artists[':id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiArtistsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.artists)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.artists)[':id']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.artists)[':id']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.artists)[':id']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiArtistsIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.artists)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArtistsIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiArtistsIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.artists[':id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiArtistsIdCommentsMutationKey() {
  return ['api', '/api/artists/:id/comments', 'POST'] as const
}

export function getPostApiArtistsIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.artists)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.artists)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiArtistsIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.artists)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.api.artists[':id'].comments.$post(args, options))
    },
  })
}

export function usePostApiArtistsIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.artists)[':id']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.artists)[':id']['comments']['$post']>,
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
  const mutationDefaults = getPostApiArtistsIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
) {
  return ['api', '/api/comments', toValue(args)] as const
}

export function getApiCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.comments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.comments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
          >,
          ReturnType<typeof getApiCommentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCommentsEntryTypeCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.comments)[':entryType-comments']['$get']>
  >,
) {
  return ['api', '/api/comments/:entryType-comments', toValue(args)] as const
}

export function getApiCommentsEntryTypeCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.comments)[':entryType-comments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCommentsEntryTypeCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.comments[':entryType-comments'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCommentsEntryTypeComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.comments)[':entryType-comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.comments)[':entryType-comments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.comments)[':entryType-comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.comments)[':entryType-comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCommentsEntryTypeCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.comments)[':entryType-comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCommentsEntryTypeCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCommentsEntryTypeCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.comments[':entryType-comments'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiCommentsEntryTypeCommentsMutationKey() {
  return ['api', '/api/comments/:entryType-comments', 'POST'] as const
}

export function getPostApiCommentsEntryTypeCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.comments)[':entryType-comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.comments)[':entryType-comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCommentsEntryTypeCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.comments)[':entryType-comments']['$post']>,
    ) {
      return parseResponse(client.api.comments[':entryType-comments'].$post(args, options))
    },
  })
}

export function usePostApiCommentsEntryTypeComments<
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
                Awaited<ReturnType<(typeof client.api.comments)[':entryType-comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.comments)[':entryType-comments']['$post']>,
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
  const mutationDefaults = getPostApiCommentsEntryTypeCommentsMutationOptions<
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

export function getPostApiCommentsEntryTypeCommentsCommentIdMutationKey() {
  return ['api', '/api/comments/:entryType-comments/:commentId', 'POST'] as const
}

export function getPostApiCommentsEntryTypeCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.comments)[':entryType-comments'][':commentId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.comments)[':entryType-comments'][':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCommentsEntryTypeCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.comments)[':entryType-comments'][':commentId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.comments[':entryType-comments'][':commentId'].$post(args, options),
      )
    },
  })
}

export function usePostApiCommentsEntryTypeCommentsCommentId<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.comments)[':entryType-comments'][':commentId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.comments)[':entryType-comments'][':commentId']['$post']
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
  const mutationDefaults = getPostApiCommentsEntryTypeCommentsCommentIdMutationOptions<
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

export function getDeleteApiCommentsEntryTypeCommentsCommentIdMutationKey() {
  return ['api', '/api/comments/:entryType-comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiCommentsEntryTypeCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.comments)[':entryType-comments'][':commentId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.comments)[':entryType-comments'][':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCommentsEntryTypeCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.comments)[':entryType-comments'][':commentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.comments[':entryType-comments'][':commentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCommentsEntryTypeCommentsCommentId<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.comments)[':entryType-comments'][':commentId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.comments)[':entryType-comments'][':commentId']['$delete']
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
  const mutationDefaults = getDeleteApiCommentsEntryTypeCommentsCommentIdMutationOptions<
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

export function getPostApiDiscussionsCommentsCommentIdMutationKey() {
  return ['api', '/api/discussions/comments/:commentId', 'POST'] as const
}

export function getPostApiDiscussionsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.discussions.comments)[':commentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.discussions.comments)[':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDiscussionsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.discussions.comments)[':commentId']['$post']>,
    ) {
      return parseResponse(client.api.discussions.comments[':commentId'].$post(args, options))
    },
  })
}

export function usePostApiDiscussionsCommentsCommentId<
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
                Awaited<ReturnType<(typeof client.api.discussions.comments)[':commentId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.discussions.comments)[':commentId']['$post']>,
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
  const mutationDefaults = getPostApiDiscussionsCommentsCommentIdMutationOptions<
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

export function getDeleteApiDiscussionsCommentsCommentIdMutationKey() {
  return ['api', '/api/discussions/comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiDiscussionsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.discussions.comments)[':commentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.discussions.comments)[':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDiscussionsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.discussions.comments)[':commentId']['$delete']>,
    ) {
      return parseResponse(client.api.discussions.comments[':commentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiDiscussionsCommentsCommentId<
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
                Awaited<
                  ReturnType<(typeof client.api.discussions.comments)[':commentId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.discussions.comments)[':commentId']['$delete']>,
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
  const mutationDefaults = getDeleteApiDiscussionsCommentsCommentIdMutationOptions<
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

export function getApiDiscussionsFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.discussions.folders.$get>>,
) {
  return ['api', '/api/discussions/folders', toValue(args)] as const
}

export function getApiDiscussionsFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.discussions.folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDiscussionsFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.discussions.folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDiscussionsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.discussions.folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
            >
          >,
          ReturnType<typeof getApiDiscussionsFoldersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDiscussionsFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDiscussionsFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.discussions.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiDiscussionsFoldersMutationKey() {
  return ['api', '/api/discussions/folders', 'POST'] as const
}

export function getPostApiDiscussionsFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.discussions.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDiscussionsFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.discussions.folders.$post>) {
      return parseResponse(client.api.discussions.folders.$post(args, options))
    },
  })
}

export function usePostApiDiscussionsFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.discussions.folders.$post>,
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
  const mutationDefaults = getPostApiDiscussionsFoldersMutationOptions<TError, TOnMutateResult>(
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

export function getApiDiscussionsFoldersFolderIdTopicsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>
  >,
) {
  return ['api', '/api/discussions/folders/:folderId/topics', toValue(args)] as const
}

export function getApiDiscussionsFoldersFolderIdTopicsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDiscussionsFoldersFolderIdTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.discussions.folders[':folderId'].topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDiscussionsFoldersFolderIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiDiscussionsFoldersFolderIdTopicsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDiscussionsFoldersFolderIdTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDiscussionsFoldersFolderIdTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.discussions.folders[':folderId'].topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiDiscussionsFoldersFolderIdTopicsMutationKey() {
  return ['api', '/api/discussions/folders/:folderId/topics', 'POST'] as const
}

export function getPostApiDiscussionsFoldersFolderIdTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.discussions.folders)[':folderId']['topics']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDiscussionsFoldersFolderIdTopicsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.discussions.folders)[':folderId']['topics']['$post']
      >,
    ) {
      return parseResponse(client.api.discussions.folders[':folderId'].topics.$post(args, options))
    },
  })
}

export function usePostApiDiscussionsFoldersFolderIdTopics<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.discussions.folders)[':folderId']['topics']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$post']>,
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
  const mutationDefaults = getPostApiDiscussionsFoldersFolderIdTopicsMutationOptions<
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

export function getApiDiscussionsTopicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.discussions.topics.$get>>,
) {
  return ['api', '/api/discussions/topics', toValue(args)] as const
}

export function getApiDiscussionsTopicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.discussions.topics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDiscussionsTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.discussions.topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDiscussionsTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.discussions.topics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>
            >
          >,
          ReturnType<typeof getApiDiscussionsTopicsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDiscussionsTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDiscussionsTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.discussions.topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDiscussionsTopicsTopicIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$get']>
  >,
) {
  return ['api', '/api/discussions/topics/:topicId', toValue(args)] as const
}

export function getApiDiscussionsTopicsTopicIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDiscussionsTopicsTopicIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.discussions.topics[':topicId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDiscussionsTopicsTopicId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDiscussionsTopicsTopicIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDiscussionsTopicsTopicIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDiscussionsTopicsTopicIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.discussions.topics[':topicId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiDiscussionsTopicsTopicIdMutationKey() {
  return ['api', '/api/discussions/topics/:topicId', 'POST'] as const
}

export function getPostApiDiscussionsTopicsTopicIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDiscussionsTopicsTopicIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$post']>,
    ) {
      return parseResponse(client.api.discussions.topics[':topicId'].$post(args, options))
    },
  })
}

export function usePostApiDiscussionsTopicsTopicId<
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
                Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$post']>,
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
  const mutationDefaults = getPostApiDiscussionsTopicsTopicIdMutationOptions<
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

export function getDeleteApiDiscussionsTopicsTopicIdMutationKey() {
  return ['api', '/api/discussions/topics/:topicId', 'DELETE'] as const
}

export function getDeleteApiDiscussionsTopicsTopicIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDiscussionsTopicsTopicIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$delete']>,
    ) {
      return parseResponse(client.api.discussions.topics[':topicId'].$delete(args, options))
    },
  })
}

export function useDeleteApiDiscussionsTopicsTopicId<
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
                Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$delete']>,
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
  const mutationDefaults = getDeleteApiDiscussionsTopicsTopicIdMutationOptions<
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

export function getPostApiDiscussionsTopicsTopicIdCommentsMutationKey() {
  return ['api', '/api/discussions/topics/:topicId/comments', 'POST'] as const
}

export function getPostApiDiscussionsTopicsTopicIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.discussions.topics)[':topicId']['comments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.discussions.topics)[':topicId']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDiscussionsTopicsTopicIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.discussions.topics)[':topicId']['comments']['$post']
      >,
    ) {
      return parseResponse(client.api.discussions.topics[':topicId'].comments.$post(args, options))
    },
  })
}

export function usePostApiDiscussionsTopicsTopicIdComments<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.discussions.topics)[':topicId']['comments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.discussions.topics)[':topicId']['comments']['$post']>,
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
  const mutationDefaults = getPostApiDiscussionsTopicsTopicIdCommentsMutationOptions<
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

export function getApiEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.entries.$get>>,
) {
  return ['api', '/api/entries', toValue(args)] as const
}

export function getApiEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.entries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.entries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.entries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>
          >,
          ReturnType<typeof getApiEntriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.entries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEntriesNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.entries.names.$get>>,
) {
  return ['api', '/api/entries/names', toValue(args)] as const
}

export function getApiEntriesNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.entries.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEntriesNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.entries.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEntriesNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.entries.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>
            >
          >,
          ReturnType<typeof getApiEntriesNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntriesNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEntriesNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.entries.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEntryTypesEntryTypeSubTypeTagQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']>
  >,
) {
  return ['api', '/api/entry-types/:entryType/:subType/tag', toValue(args)] as const
}

export function getApiEntryTypesEntryTypeSubTypeTagQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEntryTypesEntryTypeSubTypeTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['entry-types'][':entryType'][':subType'].tag.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEntryTypesEntryTypeSubTypeTag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiEntryTypesEntryTypeSubTypeTagQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntryTypesEntryTypeSubTypeTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEntryTypesEntryTypeSubTypeTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['entry-types'][':entryType'][':subType'].tag.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPvsForSongsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>>,
) {
  return ['api', '/api/pvs/for-songs', toValue(args)] as const
}

export function getApiPvsForSongsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvsForSongsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvs['for-songs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvsForSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPvsForSongsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvsForSongsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvsForSongsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvs['for-songs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReleaseEventSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEventSeries.$get>>,
) {
  return ['api', '/api/releaseEventSeries', toValue(args)] as const
}

export function getApiReleaseEventSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEventSeries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReleaseEventSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.releaseEventSeries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReleaseEventSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEventSeries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>
            >
          >,
          ReturnType<typeof getApiReleaseEventSeriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReleaseEventSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.releaseEventSeries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReleaseEventSeriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$get']>>,
) {
  return ['api', '/api/releaseEventSeries/:id', toValue(args)] as const
}

export function getApiReleaseEventSeriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReleaseEventSeriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.releaseEventSeries[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReleaseEventSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiReleaseEventSeriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventSeriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReleaseEventSeriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.releaseEventSeries[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiReleaseEventSeriesIdMutationKey() {
  return ['api', '/api/releaseEventSeries/:id', 'DELETE'] as const
}

export function getDeleteApiReleaseEventSeriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiReleaseEventSeriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.releaseEventSeries[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiReleaseEventSeriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiReleaseEventSeriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiReleaseEventSeriesIdForEditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>
  >,
) {
  return ['api', '/api/releaseEventSeries/:id/for-edit', toValue(args)] as const
}

export function getApiReleaseEventSeriesIdForEditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReleaseEventSeriesIdForEditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.releaseEventSeries[':id']['for-edit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReleaseEventSeriesIdForEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiReleaseEventSeriesIdForEditQueryKey>
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
          Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventSeriesIdForEditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReleaseEventSeriesIdForEditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.releaseEventSeries[':id']['for-edit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReleaseEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEvents.$get>>,
) {
  return ['api', '/api/releaseEvents', toValue(args)] as const
}

export function getApiReleaseEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEvents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReleaseEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.releaseEvents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReleaseEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEvents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>
            >
          >,
          ReturnType<typeof getApiReleaseEventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReleaseEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.releaseEvents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReleaseEventsNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEvents.names.$get>>,
) {
  return ['api', '/api/releaseEvents/names', toValue(args)] as const
}

export function getApiReleaseEventsNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEvents.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReleaseEventsNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.releaseEvents.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReleaseEventsNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.releaseEvents.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
            >
          >,
          ReturnType<typeof getApiReleaseEventsNamesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventsNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReleaseEventsNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.releaseEvents.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReleaseEventsEventIdAlbumsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>
  >,
) {
  return ['api', '/api/releaseEvents/:eventId/albums', toValue(args)] as const
}

export function getApiReleaseEventsEventIdAlbumsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReleaseEventsEventIdAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.releaseEvents[':eventId'].albums.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReleaseEventsEventIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiReleaseEventsEventIdAlbumsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventsEventIdAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReleaseEventsEventIdAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.releaseEvents[':eventId'].albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReleaseEventsEventIdPublishedSongsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>
  >,
) {
  return ['api', '/api/releaseEvents/:eventId/published-songs', toValue(args)] as const
}

export function getApiReleaseEventsEventIdPublishedSongsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReleaseEventsEventIdPublishedSongsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.releaseEvents[':eventId']['published-songs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReleaseEventsEventIdPublishedSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiReleaseEventsEventIdPublishedSongsQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventsEventIdPublishedSongsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReleaseEventsEventIdPublishedSongsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.releaseEvents[':eventId']['published-songs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiReleaseEventsEventIdReportsMutationKey() {
  return ['api', '/api/releaseEvents/:eventId/reports', 'POST'] as const
}

export function getPostApiReleaseEventsEventIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.releaseEvents)[':eventId']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.releaseEvents)[':eventId']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReleaseEventsEventIdReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['reports']['$post']>,
    ) {
      return parseResponse(client.api.releaseEvents[':eventId'].reports.$post(args, options))
    },
  })
}

export function usePostApiReleaseEventsEventIdReports<
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
                Awaited<
                  ReturnType<(typeof client.api.releaseEvents)[':eventId']['reports']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.releaseEvents)[':eventId']['reports']['$post']>,
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
  const mutationDefaults = getPostApiReleaseEventsEventIdReportsMutationOptions<
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

export function getApiReleaseEventsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>>,
) {
  return ['api', '/api/releaseEvents/:id', toValue(args)] as const
}

export function getApiReleaseEventsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReleaseEventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.releaseEvents[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReleaseEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiReleaseEventsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReleaseEventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.releaseEvents[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiReleaseEventsIdMutationKey() {
  return ['api', '/api/releaseEvents/:id', 'DELETE'] as const
}

export function getDeleteApiReleaseEventsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.releaseEvents)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiReleaseEventsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.releaseEvents)[':id']['$delete']>) {
      return parseResponse(client.api.releaseEvents[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiReleaseEventsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.releaseEvents)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiReleaseEventsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiResourcesCultureCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.resources)[':cultureCode']['$get']>>,
) {
  return ['api', '/api/resources/:cultureCode', toValue(args)] as const
}

export function getApiResourcesCultureCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.resources)[':cultureCode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiResourcesCultureCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.resources[':cultureCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiResourcesCultureCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.resources)[':cultureCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.resources)[':cultureCode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.resources)[':cultureCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.resources)[':cultureCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiResourcesCultureCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.api.resources)[':cultureCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiResourcesCultureCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiResourcesCultureCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.resources[':cultureCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSongListsMutationKey() {
  return ['api', '/api/songLists', 'POST'] as const
}

export function getPostApiSongListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.songLists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSongListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.songLists.$post>) {
      return parseResponse(client.api.songLists.$post(args, options))
    },
  })
}

export function usePostApiSongLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.songLists.$post>,
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
  const mutationDefaults = getPostApiSongListsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiSongListsCommentsCommentIdMutationKey() {
  return ['api', '/api/songLists/comments/:commentId', 'POST'] as const
}

export function getPostApiSongListsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.songLists.comments)[':commentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songLists.comments)[':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSongListsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.songLists.comments)[':commentId']['$post']>,
    ) {
      return parseResponse(client.api.songLists.comments[':commentId'].$post(args, options))
    },
  })
}

export function usePostApiSongListsCommentsCommentId<
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
                Awaited<ReturnType<(typeof client.api.songLists.comments)[':commentId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songLists.comments)[':commentId']['$post']>,
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
  const mutationDefaults = getPostApiSongListsCommentsCommentIdMutationOptions<
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

export function getDeleteApiSongListsCommentsCommentIdMutationKey() {
  return ['api', '/api/songLists/comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiSongListsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.songLists.comments)[':commentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songLists.comments)[':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSongListsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.songLists.comments)[':commentId']['$delete']>,
    ) {
      return parseResponse(client.api.songLists.comments[':commentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiSongListsCommentsCommentId<
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
                Awaited<ReturnType<(typeof client.api.songLists.comments)[':commentId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songLists.comments)[':commentId']['$delete']>,
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
  const mutationDefaults = getDeleteApiSongListsCommentsCommentIdMutationOptions<
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

export function getApiSongListsFeaturedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songLists.featured.$get>>,
) {
  return ['api', '/api/songLists/featured', toValue(args)] as const
}

export function getApiSongListsFeaturedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songLists.featured.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongListsFeaturedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songLists.featured.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongListsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songLists.featured.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>
            >
          >,
          ReturnType<typeof getApiSongListsFeaturedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongListsFeaturedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongListsFeaturedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songLists.featured.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSongListsFeaturedNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songLists.featured.names.$get>>,
) {
  return ['api', '/api/songLists/featured/names', toValue(args)] as const
}

export function getApiSongListsFeaturedNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songLists.featured.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongListsFeaturedNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songLists.featured.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongListsFeaturedNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songLists.featured.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>
              >
            >
          >,
          ReturnType<typeof getApiSongListsFeaturedNamesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongListsFeaturedNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongListsFeaturedNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songLists.featured.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiSongListsIdMutationKey() {
  return ['api', '/api/songLists/:id', 'DELETE'] as const
}

export function getDeleteApiSongListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.songLists)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songLists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSongListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.songLists)[':id']['$delete']>) {
      return parseResponse(client.api.songLists[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiSongListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songLists)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songLists)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiSongListsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiSongListsListIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$get']>
  >,
) {
  return ['api', '/api/songLists/:listId/comments', toValue(args)] as const
}

export function getApiSongListsListIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongListsListIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songLists[':listId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongListsListIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songLists)[':listId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songLists)[':listId']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songLists)[':listId']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSongListsListIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.songLists)[':listId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongListsListIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongListsListIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songLists[':listId'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSongListsListIdCommentsMutationKey() {
  return ['api', '/api/songLists/:listId/comments', 'POST'] as const
}

export function getPostApiSongListsListIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.songLists)[':listId']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSongListsListIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$post']>,
    ) {
      return parseResponse(client.api.songLists[':listId'].comments.$post(args, options))
    },
  })
}

export function usePostApiSongListsListIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songLists)[':listId']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$post']>,
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
  const mutationDefaults = getPostApiSongListsListIdCommentsMutationOptions<
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

export function getApiSongListsListIdSongsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.songLists)[':listId']['songs']['$get']>
  >,
) {
  return ['api', '/api/songLists/:listId/songs', toValue(args)] as const
}

export function getApiSongListsListIdSongsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.songLists)[':listId']['songs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongListsListIdSongsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songLists[':listId'].songs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongListsListIdSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songLists)[':listId']['songs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.songLists)[':listId']['songs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songLists)[':listId']['songs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songLists)[':listId']['songs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSongListsListIdSongsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.songLists)[':listId']['songs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongListsListIdSongsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongListsListIdSongsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songLists[':listId'].songs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSongsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.$get>>,
) {
  return ['api', '/api/songs', toValue(args)] as const
}

export function getApiSongsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSongs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>
          >,
          ReturnType<typeof getApiSongsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSongsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSongsByPvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.byPv.$get>>,
) {
  return ['api', '/api/songs/byPv', toValue(args)] as const
}

export function getApiSongsByPvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.byPv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsByPvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs.byPv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsByPv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.byPv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
          >,
          ReturnType<typeof getApiSongsByPvQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsByPvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsByPvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs.byPv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSongsCommentsCommentIdMutationKey() {
  return ['api', '/api/songs/comments/:commentId', 'POST'] as const
}

export function getPostApiSongsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.songs.comments)[':commentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songs.comments)[':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSongsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.songs.comments)[':commentId']['$post']>,
    ) {
      return parseResponse(client.api.songs.comments[':commentId'].$post(args, options))
    },
  })
}

export function usePostApiSongsCommentsCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs.comments)[':commentId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songs.comments)[':commentId']['$post']>,
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
  const mutationDefaults = getPostApiSongsCommentsCommentIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiSongsCommentsCommentIdMutationKey() {
  return ['api', '/api/songs/comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiSongsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.songs.comments)[':commentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songs.comments)[':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSongsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.songs.comments)[':commentId']['$delete']>,
    ) {
      return parseResponse(client.api.songs.comments[':commentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiSongsCommentsCommentId<
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
                Awaited<ReturnType<(typeof client.api.songs.comments)[':commentId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songs.comments)[':commentId']['$delete']>,
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
  const mutationDefaults = getDeleteApiSongsCommentsCommentIdMutationOptions<
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

export function getApiSongsHighlightedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.highlighted.$get>>,
) {
  return ['api', '/api/songs/highlighted', toValue(args)] as const
}

export function getApiSongsHighlightedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.highlighted.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsHighlightedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs.highlighted.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsHighlighted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.highlighted.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>
            >
          >,
          ReturnType<typeof getApiSongsHighlightedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsHighlightedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsHighlightedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs.highlighted.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSongsLyricsLyricsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>,
) {
  return ['api', '/api/songs/lyrics/:lyricsId', toValue(args)] as const
}

export function getApiSongsLyricsLyricsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsLyricsLyricsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs.lyrics[':lyricsId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsLyricsLyricsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSongsLyricsLyricsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsLyricsLyricsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsLyricsLyricsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs.lyrics[':lyricsId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSongsNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.names.$get>>,
) {
  return ['api', '/api/songs/names', toValue(args)] as const
}

export function getApiSongsNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.songs.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>
            >
          >,
          ReturnType<typeof getApiSongsNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSongsTopRatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)['top-rated']['$get']>>,
) {
  return ['api', '/api/songs/top-rated', toValue(args)] as const
}

export function getApiSongsTopRatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)['top-rated']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsTopRatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs['top-rated'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsTopRated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)['top-rated']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSongsTopRatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsTopRatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsTopRatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs['top-rated'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSongsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['$get']>>,
) {
  return ['api', '/api/songs/:id', toValue(args)] as const
}

export function getApiSongsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiSongsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiSongsIdMutationKey() {
  return ['api', '/api/songs/:id', 'DELETE'] as const
}

export function getDeleteApiSongsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSongsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.songs)[':id']['$delete']>) {
      return parseResponse(client.api.songs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiSongsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songs)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiSongsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiSongsIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['comments']['$get']>>,
) {
  return ['api', '/api/songs/:id/comments', toValue(args)] as const
}

export function getApiSongsIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs[':id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songs)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSongsIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.songs)[':id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs[':id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSongsIdCommentsMutationKey() {
  return ['api', '/api/songs/:id/comments', 'POST'] as const
}

export function getPostApiSongsIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.songs)[':id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songs)[':id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSongsIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.songs)[':id']['comments']['$post']>,
    ) {
      return parseResponse(client.api.songs[':id'].comments.$post(args, options))
    },
  })
}

export function usePostApiSongsIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songs)[':id']['comments']['$post']>,
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
  const mutationDefaults = getPostApiSongsIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiSongsIdDerivedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>>,
) {
  return ['api', '/api/songs/:id/derived', toValue(args)] as const
}

export function getApiSongsIdDerivedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsIdDerivedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs[':id'].derived.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsIdDerived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['derived']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['derived']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['derived']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSongsIdDerivedQueryKey>
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
          Awaited<ReturnType<(typeof client.api.songs)[':id']['derived']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsIdDerivedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsIdDerivedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs[':id'].derived.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSongsIdRatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>>,
) {
  return ['api', '/api/songs/:id/ratings', toValue(args)] as const
}

export function getApiSongsIdRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsIdRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs[':id'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSongsIdRatingsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsIdRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsIdRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs[':id'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiSongsIdRatingsMutationKey() {
  return ['api', '/api/songs/:id/ratings', 'POST'] as const
}

export function getPostApiSongsIdRatingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.songs)[':id']['ratings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSongsIdRatingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.songs)[':id']['ratings']['$post']>) {
      return parseResponse(client.api.songs[':id'].ratings.$post(args, options))
    },
  })
}

export function usePostApiSongsIdRatings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.songs)[':id']['ratings']['$post']>,
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
  const mutationDefaults = getPostApiSongsIdRatingsMutationOptions<TError, TOnMutateResult>(
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

export function getApiSongsIdRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>>,
) {
  return ['api', '/api/songs/:id/related', toValue(args)] as const
}

export function getApiSongsIdRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSongsIdRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.songs[':id'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSongsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['related']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.songs)[':id']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSongsIdRelatedQueryKey>
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
          Awaited<ReturnType<(typeof client.api.songs)[':id']['related']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsIdRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSongsIdRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.songs[':id'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
) {
  return ['api', '/api/tags', toValue(args)] as const
}

export function getApiTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
          >,
          ReturnType<typeof getApiTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTagsMutationKey() {
  return ['api', '/api/tags', 'POST'] as const
}

export function getPostApiTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.tags.$post>) {
      return parseResponse(client.api.tags.$post(args, options))
    },
  })
}

export function usePostApiTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.tags.$post>,
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
  const mutationDefaults = getPostApiTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTagsByNameNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>>,
) {
  return ['api', '/api/tags/byName/:name', toValue(args)] as const
}

export function getApiTagsByNameNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsByNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags.byName[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTagsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTagsByNameNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsByNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsByNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags.byName[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsCategoryNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.categoryNames.$get>>,
) {
  return ['api', '/api/tags/categoryNames', toValue(args)] as const
}

export function getApiTagsCategoryNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.categoryNames.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsCategoryNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags.categoryNames.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTagsCategoryNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.categoryNames.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>
            >
          >,
          ReturnType<typeof getApiTagsCategoryNamesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsCategoryNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsCategoryNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags.categoryNames.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTagsCommentsCommentIdMutationKey() {
  return ['api', '/api/tags/comments/:commentId', 'POST'] as const
}

export function getPostApiTagsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tags.comments)[':commentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tags.comments)[':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTagsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tags.comments)[':commentId']['$post']>,
    ) {
      return parseResponse(client.api.tags.comments[':commentId'].$post(args, options))
    },
  })
}

export function usePostApiTagsCommentsCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags.comments)[':commentId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tags.comments)[':commentId']['$post']>,
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
  const mutationDefaults = getPostApiTagsCommentsCommentIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiTagsCommentsCommentIdMutationKey() {
  return ['api', '/api/tags/comments/:commentId', 'DELETE'] as const
}

export function getDeleteApiTagsCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tags.comments)[':commentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tags.comments)[':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTagsCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tags.comments)[':commentId']['$delete']>,
    ) {
      return parseResponse(client.api.tags.comments[':commentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiTagsCommentsCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags.comments)[':commentId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tags.comments)[':commentId']['$delete']>,
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
  const mutationDefaults = getDeleteApiTagsCommentsCommentIdMutationOptions<
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

export function getApiTagsNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.names.$get>>,
) {
  return ['api', '/api/tags/names', toValue(args)] as const
}

export function getApiTagsNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTagsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
          >,
          ReturnType<typeof getApiTagsNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsTopQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.top.$get>>,
) {
  return ['api', '/api/tags/top', toValue(args)] as const
}

export function getApiTagsTopQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.top.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsTopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags.top.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTagsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.tags.top.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>
          >,
          ReturnType<typeof getApiTagsTopQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsTopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags.top.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':id']['$get']>>,
) {
  return ['api', '/api/tags/:id', toValue(args)] as const
}

export function getApiTagsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTagsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiTagsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiTagsIdMutationKey() {
  return ['api', '/api/tags/:id', 'DELETE'] as const
}

export function getDeleteApiTagsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tags)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTagsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.tags)[':id']['$delete']>) {
      return parseResponse(client.api.tags[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tags)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiTagsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiTagsTagIdChildrenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':tagId']['children']['$get']>>,
) {
  return ['api', '/api/tags/:tagId/children', toValue(args)] as const
}

export function getApiTagsTagIdChildrenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':tagId']['children']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsTagIdChildrenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags[':tagId'].children.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTagsTagIdChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tags)[':tagId']['children']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':tagId']['children']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags)[':tagId']['children']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags)[':tagId']['children']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTagsTagIdChildrenQueryKey>
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
          Awaited<ReturnType<(typeof client.api.tags)[':tagId']['children']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsTagIdChildrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsTagIdChildrenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags[':tagId'].children.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTagsTagIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$get']>>,
) {
  return ['api', '/api/tags/:tagId/comments', toValue(args)] as const
}

export function getApiTagsTagIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTagsTagIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.tags[':tagId'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTagsTagIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tags)[':tagId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags)[':tagId']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags)[':tagId']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTagsTagIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.tags)[':tagId']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsTagIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTagsTagIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.tags[':tagId'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTagsTagIdCommentsMutationKey() {
  return ['api', '/api/tags/:tagId/comments', 'POST'] as const
}

export function getPostApiTagsTagIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tags)[':tagId']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTagsTagIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$post']>,
    ) {
      return parseResponse(client.api.tags[':tagId'].comments.$post(args, options))
    },
  })
}

export function usePostApiTagsTagIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags)[':tagId']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$post']>,
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
  const mutationDefaults = getPostApiTagsTagIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiTagsTagIdReportsMutationKey() {
  return ['api', '/api/tags/:tagId/reports', 'POST'] as const
}

export function getPostApiTagsTagIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.tags)[':tagId']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.tags)[':tagId']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTagsTagIdReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.tags)[':tagId']['reports']['$post']>,
    ) {
      return parseResponse(client.api.tags[':tagId'].reports.$post(args, options))
    },
  })
}

export function usePostApiTagsTagIdReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.tags)[':tagId']['reports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.tags)[':tagId']['reports']['$post']>,
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
  const mutationDefaults = getPostApiTagsTagIdReportsMutationOptions<TError, TOnMutateResult>(
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

export function getApiUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
) {
  return ['api', '/api/users', toValue(args)] as const
}

export function getApiUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
          >,
          ReturnType<typeof getApiUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersCurrentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.current.$get>>,
) {
  return ['api', '/api/users/current', toValue(args)] as const
}

export function getApiUsersCurrentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.current.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersCurrentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.current.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.current.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>
            >
          >,
          ReturnType<typeof getApiUsersCurrentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersCurrentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.current.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
    >
  >,
) {
  return ['api', '/api/users/current/album-collection-statuses/:albumId', toValue(args)] as const
}

export function getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.current['album-collection-statuses'][':albumId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersCurrentAlbumCollectionStatusesAlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.current['album-collection-statuses'][':albumId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersCurrentAlbumsAlbumIdMutationKey() {
  return ['api', '/api/users/current/albums/:albumId', 'POST'] as const
}

export function getPostApiUsersCurrentAlbumsAlbumIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users.current.albums)[':albumId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users.current.albums)[':albumId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersCurrentAlbumsAlbumIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users.current.albums)[':albumId']['$post']>,
    ) {
      return parseResponse(client.api.users.current.albums[':albumId'].$post(args, options))
    },
  })
}

export function usePostApiUsersCurrentAlbumsAlbumId<
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
                Awaited<ReturnType<(typeof client.api.users.current.albums)[':albumId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users.current.albums)[':albumId']['$post']>,
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
  const mutationDefaults = getPostApiUsersCurrentAlbumsAlbumIdMutationOptions<
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

export function getApiUsersCurrentFollowedArtistsArtistIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>
  >,
) {
  return ['api', '/api/users/current/followedArtists/:artistId', toValue(args)] as const
}

export function getApiUsersCurrentFollowedArtistsArtistIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersCurrentFollowedArtistsArtistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.current.followedArtists[':artistId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersCurrentFollowedArtistsArtistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersCurrentFollowedArtistsArtistIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersCurrentFollowedArtistsArtistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersCurrentFollowedArtistsArtistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.current.followedArtists[':artistId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersCurrentFollowedTagsTagIdMutationKey() {
  return ['api', '/api/users/current/followedTags/:tagId', 'POST'] as const
}

export function getPostApiUsersCurrentFollowedTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users.current.followedTags)[':tagId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users.current.followedTags)[':tagId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersCurrentFollowedTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users.current.followedTags)[':tagId']['$post']>,
    ) {
      return parseResponse(client.api.users.current.followedTags[':tagId'].$post(args, options))
    },
  })
}

export function usePostApiUsersCurrentFollowedTagsTagId<
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
                Awaited<
                  ReturnType<(typeof client.api.users.current.followedTags)[':tagId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users.current.followedTags)[':tagId']['$post']>,
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
  const mutationDefaults = getPostApiUsersCurrentFollowedTagsTagIdMutationOptions<
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

export function getDeleteApiUsersCurrentFollowedTagsTagIdMutationKey() {
  return ['api', '/api/users/current/followedTags/:tagId', 'DELETE'] as const
}

export function getDeleteApiUsersCurrentFollowedTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users.current.followedTags)[':tagId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users.current.followedTags)[':tagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersCurrentFollowedTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users.current.followedTags)[':tagId']['$delete']>,
    ) {
      return parseResponse(client.api.users.current.followedTags[':tagId'].$delete(args, options))
    },
  })
}

export function useDeleteApiUsersCurrentFollowedTagsTagId<
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
                Awaited<
                  ReturnType<(typeof client.api.users.current.followedTags)[':tagId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users.current.followedTags)[':tagId']['$delete']>,
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
  const mutationDefaults = getDeleteApiUsersCurrentFollowedTagsTagIdMutationOptions<
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

export function getApiUsersCurrentRatedSongsSongIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>
  >,
) {
  return ['api', '/api/users/current/ratedSongs/:songId', toValue(args)] as const
}

export function getApiUsersCurrentRatedSongsSongIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersCurrentRatedSongsSongIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.current.ratedSongs[':songId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersCurrentRatedSongsSongId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersCurrentRatedSongsSongIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersCurrentRatedSongsSongIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersCurrentRatedSongsSongIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.current.ratedSongs[':songId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersCurrentRefreshEntryEditMutationKey() {
  return ['api', '/api/users/current/refreshEntryEdit', 'POST'] as const
}

export function getPostApiUsersCurrentRefreshEntryEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.users.current.refreshEntryEdit.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.users.current.refreshEntryEdit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersCurrentRefreshEntryEditMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.users.current.refreshEntryEdit.$post>,
    ) {
      return parseResponse(client.api.users.current.refreshEntryEdit.$post(args, options))
    },
  })
}

export function usePostApiUsersCurrentRefreshEntryEdit<
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
                Awaited<ReturnType<typeof client.api.users.current.refreshEntryEdit.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.users.current.refreshEntryEdit.$post>,
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
  const mutationDefaults = getPostApiUsersCurrentRefreshEntryEditMutationOptions<
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

export function getPostApiUsersCurrentSongTagsSongIdMutationKey() {
  return ['api', '/api/users/current/songTags/:songId', 'POST'] as const
}

export function getPostApiUsersCurrentSongTagsSongIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users.current.songTags)[':songId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users.current.songTags)[':songId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersCurrentSongTagsSongIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users.current.songTags)[':songId']['$post']>,
    ) {
      return parseResponse(client.api.users.current.songTags[':songId'].$post(args, options))
    },
  })
}

export function usePostApiUsersCurrentSongTagsSongId<
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
                Awaited<ReturnType<(typeof client.api.users.current.songTags)[':songId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users.current.songTags)[':songId']['$post']>,
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
  const mutationDefaults = getPostApiUsersCurrentSongTagsSongIdMutationOptions<
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

export function getApiUsersMessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.messages)[':messageId']['$get']>
  >,
) {
  return ['api', '/api/users/messages/:messageId', toValue(args)] as const
}

export function getApiUsersMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.messages)[':messageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.messages[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.messages)[':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users.messages)[':messageId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users.messages)[':messageId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users.messages)[':messageId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersMessagesMessageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users.messages)[':messageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.messages[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.names.$get>>,
) {
  return ['api', '/api/users/names', toValue(args)] as const
}

export function getApiUsersNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users.names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.users.names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>
            >
          >,
          ReturnType<typeof getApiUsersNamesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users.names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersProfileCommentsCommentIdMutationKey() {
  return ['api', '/api/users/profileComments/:commentId', 'POST'] as const
}

export function getPostApiUsersProfileCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users.profileComments)[':commentId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users.profileComments)[':commentId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersProfileCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users.profileComments)[':commentId']['$post']>,
    ) {
      return parseResponse(client.api.users.profileComments[':commentId'].$post(args, options))
    },
  })
}

export function usePostApiUsersProfileCommentsCommentId<
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
                Awaited<
                  ReturnType<(typeof client.api.users.profileComments)[':commentId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users.profileComments)[':commentId']['$post']>,
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
  const mutationDefaults = getPostApiUsersProfileCommentsCommentIdMutationOptions<
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

export function getDeleteApiUsersProfileCommentsCommentIdMutationKey() {
  return ['api', '/api/users/profileComments/:commentId', 'DELETE'] as const
}

export function getDeleteApiUsersProfileCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users.profileComments)[':commentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users.profileComments)[':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersProfileCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users.profileComments)[':commentId']['$delete']>,
    ) {
      return parseResponse(client.api.users.profileComments[':commentId'].$delete(args, options))
    },
  })
}

export function useDeleteApiUsersProfileCommentsCommentId<
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
                Awaited<
                  ReturnType<(typeof client.api.users.profileComments)[':commentId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users.profileComments)[':commentId']['$delete']>,
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
  const mutationDefaults = getDeleteApiUsersProfileCommentsCommentIdMutationOptions<
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

export function getApiUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
) {
  return ['api', '/api/users/:id', toValue(args)] as const
}

export function getApiUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiUsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdAlbumCollectionStatusesAlbumIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
    >
  >,
) {
  return ['api', '/api/users/:id/album-collection-statuses/:albumId', toValue(args)] as const
}

export function getApiUsersIdAlbumCollectionStatusesAlbumIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdAlbumCollectionStatusesAlbumIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id']['album-collection-statuses'][':albumId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdAlbumCollectionStatusesAlbumId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersIdAlbumCollectionStatusesAlbumIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdAlbumCollectionStatusesAlbumIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdAlbumCollectionStatusesAlbumIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id']['album-collection-statuses'][':albumId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdAlbumsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>>,
) {
  return ['api', '/api/users/:id/albums', toValue(args)] as const
}

export function getApiUsersIdAlbumsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdAlbumsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].albums.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['albums']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['albums']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersIdAlbumsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':id']['albums']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdAlbumsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdAlbumsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].albums.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['events']['$get']>>,
) {
  return ['api', '/api/users/:id/events', toValue(args)] as const
}

export function getApiUsersIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersIdEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdFollowedArtistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['followedArtists']['$get']>
  >,
) {
  return ['api', '/api/users/:id/followedArtists', toValue(args)] as const
}

export function getApiUsersIdFollowedArtistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['followedArtists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdFollowedArtistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].followedArtists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdFollowedArtists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['followedArtists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['followedArtists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['followedArtists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['followedArtists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersIdFollowedArtistsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':id']['followedArtists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdFollowedArtistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdFollowedArtistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].followedArtists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdFollowedArtistsArtistIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>
  >,
) {
  return ['api', '/api/users/:id/followedArtists/:artistId', toValue(args)] as const
}

export function getApiUsersIdFollowedArtistsArtistIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdFollowedArtistsArtistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].followedArtists[':artistId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdFollowedArtistsArtistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersIdFollowedArtistsArtistIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdFollowedArtistsArtistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdFollowedArtistsArtistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].followedArtists[':artistId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['messages']['$get']>>,
) {
  return ['api', '/api/users/:id/messages', toValue(args)] as const
}

export function getApiUsersIdMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersIdMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersIdMessagesMutationKey() {
  return ['api', '/api/users/:id/messages', 'POST'] as const
}

export function getPostApiUsersIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':id']['messages']['$post']>,
    ) {
      return parseResponse(client.api.users[':id'].messages.$post(args, options))
    },
  })
}

export function usePostApiUsersIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['messages']['$post']>,
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
  const mutationDefaults = getPostApiUsersIdMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiUsersIdMessagesMutationKey() {
  return ['api', '/api/users/:id/messages', 'DELETE'] as const
}

export function getDeleteApiUsersIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['messages']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUsersIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':id']['messages']['$delete']>,
    ) {
      return parseResponse(client.api.users[':id'].messages.$delete(args, options))
    },
  })
}

export function useDeleteApiUsersIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['messages']['$delete']>,
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
  const mutationDefaults = getDeleteApiUsersIdMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getApiUsersIdProfileCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['profileComments']['$get']>
  >,
) {
  return ['api', '/api/users/:id/profileComments', toValue(args)] as const
}

export function getApiUsersIdProfileCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['profileComments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdProfileCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].profileComments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdProfileComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['profileComments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['profileComments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['profileComments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['profileComments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersIdProfileCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':id']['profileComments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdProfileCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdProfileCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].profileComments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersIdProfileCommentsMutationKey() {
  return ['api', '/api/users/:id/profileComments', 'POST'] as const
}

export function getPostApiUsersIdProfileCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':id']['profileComments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['profileComments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersIdProfileCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':id']['profileComments']['$post']>,
    ) {
      return parseResponse(client.api.users[':id'].profileComments.$post(args, options))
    },
  })
}

export function usePostApiUsersIdProfileComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['profileComments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['profileComments']['$post']>,
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
  const mutationDefaults = getPostApiUsersIdProfileCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiUsersIdRatedSongsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>,
) {
  return ['api', '/api/users/:id/ratedSongs', toValue(args)] as const
}

export function getApiUsersIdRatedSongsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdRatedSongsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].ratedSongs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdRatedSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersIdRatedSongsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdRatedSongsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdRatedSongsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].ratedSongs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersIdRatedSongsSongIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>
  >,
) {
  return ['api', '/api/users/:id/ratedSongs/:songId', toValue(args)] as const
}

export function getApiUsersIdRatedSongsSongIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdRatedSongsSongIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].ratedSongs[':songId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdRatedSongsSongId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersIdRatedSongsSongIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdRatedSongsSongIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdRatedSongsSongIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].ratedSongs[':songId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiUsersIdReportsMutationKey() {
  return ['api', '/api/users/:id/reports', 'POST'] as const
}

export function getPostApiUsersIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':id']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersIdReportsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.users)[':id']['reports']['$post']>) {
      return parseResponse(client.api.users[':id'].reports.$post(args, options))
    },
  })
}

export function usePostApiUsersIdReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['reports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['reports']['$post']>,
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
  const mutationDefaults = getPostApiUsersIdReportsMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiUsersIdSettingsSettingNameMutationKey() {
  return ['api', '/api/users/:id/settings/:settingName', 'POST'] as const
}

export function getPostApiUsersIdSettingsSettingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':id']['settings'][':settingName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.users)[':id']['settings'][':settingName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUsersIdSettingsSettingNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.users)[':id']['settings'][':settingName']['$post']>,
    ) {
      return parseResponse(client.api.users[':id'].settings[':settingName'].$post(args, options))
    },
  })
}

export function usePostApiUsersIdSettingsSettingName<
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
                Awaited<
                  ReturnType<(typeof client.api.users)[':id']['settings'][':settingName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.users)[':id']['settings'][':settingName']['$post']>,
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
  const mutationDefaults = getPostApiUsersIdSettingsSettingNameMutationOptions<
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

export function getApiUsersIdSongListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['songLists']['$get']>>,
) {
  return ['api', '/api/users/:id/songLists', toValue(args)] as const
}

export function getApiUsersIdSongListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['songLists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersIdSongListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':id'].songLists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersIdSongLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['songLists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':id']['songLists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['songLists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':id']['songLists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersIdSongListsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':id']['songLists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdSongListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersIdSongListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':id'].songLists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVenuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.venues.$get>>,
) {
  return ['api', '/api/venues', toValue(args)] as const
}

export function getApiVenuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.venues.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVenuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.venues.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiVenues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.venues.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>
          >,
          ReturnType<typeof getApiVenuesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVenuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVenuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.venues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiVenuesIdMutationKey() {
  return ['api', '/api/venues/:id', 'DELETE'] as const
}

export function getDeleteApiVenuesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.venues)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.venues)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiVenuesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.venues)[':id']['$delete']>) {
      return parseResponse(client.api.venues[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiVenuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.venues)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.venues)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiVenuesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiVenuesIdReportsMutationKey() {
  return ['api', '/api/venues/:id/reports', 'POST'] as const
}

export function getPostApiVenuesIdReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.venues)[':id']['reports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.venues)[':id']['reports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVenuesIdReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.venues)[':id']['reports']['$post']>,
    ) {
      return parseResponse(client.api.venues[':id'].reports.$post(args, options))
    },
  })
}

export function usePostApiVenuesIdReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.venues)[':id']['reports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.venues)[':id']['reports']['$post']>,
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
  const mutationDefaults = getPostApiVenuesIdReportsMutationOptions<TError, TOnMutateResult>(
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
