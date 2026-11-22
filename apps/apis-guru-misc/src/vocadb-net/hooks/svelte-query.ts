import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiActivityEntriesQueryKey(
  args: InferRequestType<typeof client.api.activityEntries.$get>,
) {
  return ['api', '/api/activityEntries', args] as const
}

export function getApiActivityEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.activityEntries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiActivityEntriesQueryKey>
  >({
    queryKey: getApiActivityEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.activityEntries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiActivityEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.activityEntries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiActivityEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiActivityEntriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAlbumsQueryKey(args: InferRequestType<typeof client.api.albums.$get>) {
  return ['api', '/api/albums', args] as const
}

export function getApiAlbumsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.albums.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsQueryKey>
  >({
    queryKey: getApiAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.albums.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlbumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAlbumsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAlbumsCommentsCommentIdMutationOptions<
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

export function createDeleteApiAlbumsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAlbumsCommentsCommentIdMutationOptions<
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

export function getApiAlbumsNamesQueryKey(
  args: InferRequestType<typeof client.api.albums.names.$get>,
) {
  return ['api', '/api/albums/names', args] as const
}

export function getApiAlbumsNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.albums.names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsNamesQueryKey>
  >({
    queryKey: getApiAlbumsNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums.names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAlbumsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.albums.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAlbumsNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlbumsNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAlbumsNewQueryKey(args: InferRequestType<typeof client.api.albums.new.$get>) {
  return ['api', '/api/albums/new', args] as const
}

export function getApiAlbumsNewQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.albums.new.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsNewQueryKey>
  >({
    queryKey: getApiAlbumsNewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums.new.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAlbumsNew<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.albums.new.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAlbumsNewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlbumsNewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAlbumsTopQueryKey(args: InferRequestType<typeof client.api.albums.top.$get>) {
  return ['api', '/api/albums/top', args] as const
}

export function getApiAlbumsTopQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.albums.top.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsTopQueryKey>
  >({
    queryKey: getApiAlbumsTopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums.top.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAlbumsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.albums.top.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAlbumsTopQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlbumsTopQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAlbumsIdQueryKey(
  args: InferRequestType<(typeof client.api.albums)[':id']['$get']>,
) {
  return ['api', '/api/albums/:id', args] as const
}

export function getApiAlbumsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAlbumsIdQueryKey>
  >({
    queryKey: getApiAlbumsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAlbumsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.albums)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAlbumsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlbumsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiAlbumsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.albums)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAlbumsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAlbumsIdCommentsQueryKey(
  args: InferRequestType<(typeof client.api.albums)[':id']['comments']['$get']>,
) {
  return ['api', '/api/albums/:id/comments', args] as const
}

export function getApiAlbumsIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlbumsIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlbumsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.albums)[':id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlbumsIdCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAlbumsIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAlbumsIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAlbumsIdReviewsQueryKey(
  args: InferRequestType<(typeof client.api.albums)[':id']['reviews']['$get']>,
) {
  return ['api', '/api/albums/:id/reviews', args] as const
}

export function getApiAlbumsIdReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlbumsIdReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums[':id'].reviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlbumsIdReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['reviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.albums)[':id']['reviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlbumsIdReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiAlbumsIdReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAlbumsIdReviewsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiAlbumsIdReviewsReviewId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAlbumsIdReviewsReviewIdMutationOptions<
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

export function getApiAlbumsIdTracksQueryKey(
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>,
) {
  return ['api', '/api/albums/:id/tracks', args] as const
}

export function getApiAlbumsIdTracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlbumsIdTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums[':id'].tracks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlbumsIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAlbumsIdTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiAlbumsIdTracksFieldsQueryKey(
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>,
) {
  return ['api', '/api/albums/:id/tracks/fields', args] as const
}

export function getApiAlbumsIdTracksFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlbumsIdTracksFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums[':id'].tracks.fields.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlbumsIdTracksFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiAlbumsIdTracksFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiAlbumsIdUserCollectionsQueryKey(
  args: InferRequestType<(typeof client.api.albums)[':id']['user-collections']['$get']>,
) {
  return ['api', '/api/albums/:id/user-collections', args] as const
}

export function getApiAlbumsIdUserCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['user-collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['user-collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiAlbumsIdUserCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.albums[':id']['user-collections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAlbumsIdUserCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.albums)[':id']['user-collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.albums)[':id']['user-collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiAlbumsIdUserCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiArtistsQueryKey(args: InferRequestType<typeof client.api.artists.$get>) {
  return ['api', '/api/artists', args] as const
}

export function getApiArtistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.artists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiArtistsQueryKey>
  >({
    queryKey: getApiArtistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.artists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.artists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiArtistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiArtistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiArtistsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiArtistsCommentsCommentIdMutationOptions<
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

export function createDeleteApiArtistsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiArtistsCommentsCommentIdMutationOptions<
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

export function getApiArtistsNamesQueryKey(
  args: InferRequestType<typeof client.api.artists.names.$get>,
) {
  return ['api', '/api/artists/names', args] as const
}

export function getApiArtistsNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.artists.names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiArtistsNamesQueryKey>
  >({
    queryKey: getApiArtistsNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.artists.names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiArtistsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.artists.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArtistsNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiArtistsNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiArtistsIdQueryKey(
  args: InferRequestType<(typeof client.api.artists)[':id']['$get']>,
) {
  return ['api', '/api/artists/:id', args] as const
}

export function getApiArtistsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.artists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiArtistsIdQueryKey>
  >({
    queryKey: getApiArtistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.artists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiArtistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.artists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiArtistsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiArtistsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiArtistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.artists)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiArtistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiArtistsIdCommentsQueryKey(
  args: InferRequestType<(typeof client.api.artists)[':id']['comments']['$get']>,
) {
  return ['api', '/api/artists/:id/comments', args] as const
}

export function getApiArtistsIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.artists)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.artists)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiArtistsIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.artists[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiArtistsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.artists)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.artists)[':id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiArtistsIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiArtistsIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiArtistsIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiCommentsQueryKey(args: InferRequestType<typeof client.api.comments.$get>) {
  return ['api', '/api/comments', args] as const
}

export function getApiCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCommentsQueryKey>
  >({
    queryKey: getApiCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.comments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiCommentsEntryTypeCommentsQueryKey(
  args: InferRequestType<(typeof client.api.comments)[':entryType-comments']['$get']>,
) {
  return ['api', '/api/comments/:entryType-comments', args] as const
}

export function getApiCommentsEntryTypeCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.comments)[':entryType-comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.comments)[':entryType-comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiCommentsEntryTypeCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.comments[':entryType-comments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCommentsEntryTypeComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.comments)[':entryType-comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.comments)[':entryType-comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiCommentsEntryTypeCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiCommentsEntryTypeComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCommentsEntryTypeCommentsMutationOptions<
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

export function createPostApiCommentsEntryTypeCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCommentsEntryTypeCommentsCommentIdMutationOptions<
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

export function createDeleteApiCommentsEntryTypeCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiCommentsEntryTypeCommentsCommentIdMutationOptions<
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

export function createPostApiDiscussionsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDiscussionsCommentsCommentIdMutationOptions<
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

export function createDeleteApiDiscussionsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiDiscussionsCommentsCommentIdMutationOptions<
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

export function getApiDiscussionsFoldersQueryKey(
  args: InferRequestType<typeof client.api.discussions.folders.$get>,
) {
  return ['api', '/api/discussions/folders', args] as const
}

export function getApiDiscussionsFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.discussions.folders.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDiscussionsFoldersQueryKey>
  >({
    queryKey: getApiDiscussionsFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.discussions.folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDiscussionsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.discussions.folders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDiscussionsFoldersQueryKey>
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
      ...getApiDiscussionsFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiDiscussionsFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.discussions.folders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDiscussionsFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiDiscussionsFoldersFolderIdTopicsQueryKey(
  args: InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>,
) {
  return ['api', '/api/discussions/folders/:folderId/topics', args] as const
}

export function getApiDiscussionsFoldersFolderIdTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiDiscussionsFoldersFolderIdTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.discussions.folders[':folderId'].topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDiscussionsFoldersFolderIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.discussions.folders)[':folderId']['topics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiDiscussionsFoldersFolderIdTopicsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiDiscussionsFoldersFolderIdTopics<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDiscussionsFoldersFolderIdTopicsMutationOptions<
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

export function getApiDiscussionsTopicsQueryKey(
  args: InferRequestType<typeof client.api.discussions.topics.$get>,
) {
  return ['api', '/api/discussions/topics', args] as const
}

export function getApiDiscussionsTopicsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.discussions.topics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDiscussionsTopicsQueryKey>
  >({
    queryKey: getApiDiscussionsTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.discussions.topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDiscussionsTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.discussions.topics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDiscussionsTopicsQueryKey>
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
      ...getApiDiscussionsTopicsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiDiscussionsTopicsTopicIdQueryKey(
  args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$get']>,
) {
  return ['api', '/api/discussions/topics/:topicId', args] as const
}

export function getApiDiscussionsTopicsTopicIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiDiscussionsTopicsTopicIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.discussions.topics[':topicId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDiscussionsTopicsTopicId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.discussions.topics)[':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiDiscussionsTopicsTopicIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiDiscussionsTopicsTopicId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDiscussionsTopicsTopicIdMutationOptions<
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

export function createDeleteApiDiscussionsTopicsTopicId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiDiscussionsTopicsTopicIdMutationOptions<
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

export function createPostApiDiscussionsTopicsTopicIdComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDiscussionsTopicsTopicIdCommentsMutationOptions<
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

export function getApiEntriesQueryKey(args: InferRequestType<typeof client.api.entries.$get>) {
  return ['api', '/api/entries', args] as const
}

export function getApiEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.entries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEntriesQueryKey>
  >({
    queryKey: getApiEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.entries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEntriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiEntriesNamesQueryKey(
  args: InferRequestType<typeof client.api.entries.names.$get>,
) {
  return ['api', '/api/entries/names', args] as const
}

export function getApiEntriesNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.entries.names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEntriesNamesQueryKey>
  >({
    queryKey: getApiEntriesNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.entries.names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEntriesNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.entries.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEntriesNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEntriesNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiEntryTypesEntryTypeSubTypeTagQueryKey(
  args: InferRequestType<
    (typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']
  >,
) {
  return ['api', '/api/entry-types/:entryType/:subType/tag', args] as const
}

export function getApiEntryTypesEntryTypeSubTypeTagQueryOptions<
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
  args: InferRequestType<
    (typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiEntryTypesEntryTypeSubTypeTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['entry-types'][':entryType'][':subType'].tag.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiEntryTypesEntryTypeSubTypeTag<
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
  args: () => InferRequestType<
    (typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiEntryTypesEntryTypeSubTypeTagQueryKey>
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
      ...getApiEntryTypesEntryTypeSubTypeTagQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiPvsForSongsQueryKey(
  args: InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>,
) {
  return ['api', '/api/pvs/for-songs', args] as const
}

export function getApiPvsForSongsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvsForSongsQueryKey>
  >({
    queryKey: getApiPvsForSongsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvs['for-songs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPvsForSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPvsForSongsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPvsForSongsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiReleaseEventSeriesQueryKey(
  args: InferRequestType<typeof client.api.releaseEventSeries.$get>,
) {
  return ['api', '/api/releaseEventSeries', args] as const
}

export function getApiReleaseEventSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.releaseEventSeries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventSeriesQueryKey>
  >({
    queryKey: getApiReleaseEventSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.releaseEventSeries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiReleaseEventSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.releaseEventSeries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReleaseEventSeriesQueryKey>
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
      ...getApiReleaseEventSeriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiReleaseEventSeriesIdQueryKey(
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$get']>,
) {
  return ['api', '/api/releaseEventSeries/:id', args] as const
}

export function getApiReleaseEventSeriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiReleaseEventSeriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.releaseEventSeries[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiReleaseEventSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiReleaseEventSeriesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiReleaseEventSeriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiReleaseEventSeriesIdMutationOptions<
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

export function getApiReleaseEventSeriesIdForEditQueryKey(
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>,
) {
  return ['api', '/api/releaseEventSeries/:id/for-edit', args] as const
}

export function getApiReleaseEventSeriesIdForEditQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiReleaseEventSeriesIdForEditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.releaseEventSeries[':id']['for-edit'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiReleaseEventSeriesIdForEdit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiReleaseEventSeriesIdForEditQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiReleaseEventsQueryKey(
  args: InferRequestType<typeof client.api.releaseEvents.$get>,
) {
  return ['api', '/api/releaseEvents', args] as const
}

export function getApiReleaseEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.releaseEvents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventsQueryKey>
  >({
    queryKey: getApiReleaseEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.releaseEvents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiReleaseEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.releaseEvents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReleaseEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiReleaseEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiReleaseEventsNamesQueryKey(
  args: InferRequestType<typeof client.api.releaseEvents.names.$get>,
) {
  return ['api', '/api/releaseEvents/names', args] as const
}

export function getApiReleaseEventsNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.releaseEvents.names.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventsNamesQueryKey>
  >({
    queryKey: getApiReleaseEventsNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.releaseEvents.names.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiReleaseEventsNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.releaseEvents.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReleaseEventsNamesQueryKey>
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
      ...getApiReleaseEventsNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiReleaseEventsEventIdAlbumsQueryKey(
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>,
) {
  return ['api', '/api/releaseEvents/:eventId/albums', args] as const
}

export function getApiReleaseEventsEventIdAlbumsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiReleaseEventsEventIdAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.releaseEvents[':eventId'].albums.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiReleaseEventsEventIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiReleaseEventsEventIdAlbumsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiReleaseEventsEventIdPublishedSongsQueryKey(
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>,
) {
  return ['api', '/api/releaseEvents/:eventId/published-songs', args] as const
}

export function getApiReleaseEventsEventIdPublishedSongsQueryOptions<
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
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiReleaseEventsEventIdPublishedSongsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.releaseEvents[':eventId']['published-songs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiReleaseEventsEventIdPublishedSongs<
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
  args: () => InferRequestType<
    (typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiReleaseEventsEventIdPublishedSongsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiReleaseEventsEventIdReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiReleaseEventsEventIdReportsMutationOptions<
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

export function getApiReleaseEventsIdQueryKey(
  args: InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>,
) {
  return ['api', '/api/releaseEvents/:id', args] as const
}

export function getApiReleaseEventsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReleaseEventsIdQueryKey>
  >({
    queryKey: getApiReleaseEventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.releaseEvents[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiReleaseEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReleaseEventsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiReleaseEventsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiReleaseEventsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiReleaseEventsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiResourcesCultureCodeQueryKey(
  args: InferRequestType<(typeof client.api.resources)[':cultureCode']['$get']>,
) {
  return ['api', '/api/resources/:cultureCode', args] as const
}

export function getApiResourcesCultureCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.resources)[':cultureCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.resources)[':cultureCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiResourcesCultureCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.resources[':cultureCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiResourcesCultureCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.resources)[':cultureCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.resources)[':cultureCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiResourcesCultureCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiSongLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.songLists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSongListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiSongListsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSongListsCommentsCommentIdMutationOptions<
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

export function createDeleteApiSongListsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSongListsCommentsCommentIdMutationOptions<
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

export function getApiSongListsFeaturedQueryKey(
  args: InferRequestType<typeof client.api.songLists.featured.$get>,
) {
  return ['api', '/api/songLists/featured', args] as const
}

export function getApiSongListsFeaturedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songLists.featured.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongListsFeaturedQueryKey>
  >({
    queryKey: getApiSongListsFeaturedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songLists.featured.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongListsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.songLists.featured.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSongListsFeaturedQueryKey>
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
      ...getApiSongListsFeaturedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiSongListsFeaturedNamesQueryKey(
  args: InferRequestType<typeof client.api.songLists.featured.names.$get>,
) {
  return ['api', '/api/songLists/featured/names', args] as const
}

export function getApiSongListsFeaturedNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songLists.featured.names.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongListsFeaturedNamesQueryKey>
  >({
    queryKey: getApiSongListsFeaturedNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songLists.featured.names.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongListsFeaturedNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.songLists.featured.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSongListsFeaturedNamesQueryKey>
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
      ...getApiSongListsFeaturedNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiSongListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSongListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSongListsListIdCommentsQueryKey(
  args: InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$get']>,
) {
  return ['api', '/api/songLists/:listId/comments', args] as const
}

export function getApiSongListsListIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songLists)[':listId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSongListsListIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songLists[':listId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongListsListIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songLists)[':listId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiSongListsListIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiSongListsListIdComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSongListsListIdCommentsMutationOptions<
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

export function getApiSongListsListIdSongsQueryKey(
  args: InferRequestType<(typeof client.api.songLists)[':listId']['songs']['$get']>,
) {
  return ['api', '/api/songLists/:listId/songs', args] as const
}

export function getApiSongListsListIdSongsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songLists)[':listId']['songs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songLists)[':listId']['songs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSongListsListIdSongsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songLists[':listId'].songs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongListsListIdSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songLists)[':listId']['songs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songLists)[':listId']['songs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiSongListsListIdSongsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiSongsQueryKey(args: InferRequestType<typeof client.api.songs.$get>) {
  return ['api', '/api/songs', args] as const
}

export function getApiSongsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.songs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSongsQueryKey>
  >({
    queryKey: getApiSongsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSongs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.songs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSongsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiSongsByPvQueryKey(args: InferRequestType<typeof client.api.songs.byPv.$get>) {
  return ['api', '/api/songs/byPv', args] as const
}

export function getApiSongsByPvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.songs.byPv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsByPvQueryKey>
  >({
    queryKey: getApiSongsByPvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs.byPv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSongsByPv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.songs.byPv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSongsByPvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsByPvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiSongsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSongsCommentsCommentIdMutationOptions<
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

export function createDeleteApiSongsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSongsCommentsCommentIdMutationOptions<
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

export function getApiSongsHighlightedQueryKey(
  args: InferRequestType<typeof client.api.songs.highlighted.$get>,
) {
  return ['api', '/api/songs/highlighted', args] as const
}

export function getApiSongsHighlightedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.highlighted.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsHighlightedQueryKey>
  >({
    queryKey: getApiSongsHighlightedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs.highlighted.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSongsHighlighted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.songs.highlighted.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSongsHighlightedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsHighlightedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiSongsLyricsLyricsIdQueryKey(
  args: InferRequestType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>,
) {
  return ['api', '/api/songs/lyrics/:lyricsId', args] as const
}

export function getApiSongsLyricsLyricsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSongsLyricsLyricsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs.lyrics[':lyricsId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongsLyricsLyricsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiSongsLyricsLyricsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiSongsNamesQueryKey(
  args: InferRequestType<typeof client.api.songs.names.$get>,
) {
  return ['api', '/api/songs/names', args] as const
}

export function getApiSongsNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.songs.names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsNamesQueryKey>
  >({
    queryKey: getApiSongsNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs.names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSongsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.songs.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSongsNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiSongsTopRatedQueryKey(
  args: InferRequestType<(typeof client.api.songs)['top-rated']['$get']>,
) {
  return ['api', '/api/songs/top-rated', args] as const
}

export function getApiSongsTopRatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)['top-rated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsTopRatedQueryKey>
  >({
    queryKey: getApiSongsTopRatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs['top-rated'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongsTopRated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songs)['top-rated']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSongsTopRatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsTopRatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiSongsIdQueryKey(
  args: InferRequestType<(typeof client.api.songs)[':id']['$get']>,
) {
  return ['api', '/api/songs/:id', args] as const
}

export function getApiSongsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSongsIdQueryKey>
  >({
    queryKey: getApiSongsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSongsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSongsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiSongsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.songs)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSongsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSongsIdCommentsQueryKey(
  args: InferRequestType<(typeof client.api.songs)[':id']['comments']['$get']>,
) {
  return ['api', '/api/songs/:id/comments', args] as const
}

export function getApiSongsIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songs)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSongsIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs[':id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongsIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.songs)[':id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songs)[':id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsIdCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiSongsIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSongsIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSongsIdDerivedQueryKey(
  args: InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>,
) {
  return ['api', '/api/songs/:id/derived', args] as const
}

export function getApiSongsIdDerivedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['derived']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSongsIdDerivedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs[':id'].derived.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongsIdDerived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['derived']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsIdDerivedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiSongsIdRatingsQueryKey(
  args: InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>,
) {
  return ['api', '/api/songs/:id/ratings', args] as const
}

export function getApiSongsIdRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSongsIdRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs[':id'].ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongsIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsIdRatingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiSongsIdRatings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSongsIdRatingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSongsIdRelatedQueryKey(
  args: InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>,
) {
  return ['api', '/api/songs/:id/related', args] as const
}

export function getApiSongsIdRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiSongsIdRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.songs[':id'].related.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSongsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSongsIdRelatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTagsQueryKey(args: InferRequestType<typeof client.api.tags.$get>) {
  return ['api', '/api/tags', args] as const
}

export function getApiTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >({
    queryKey: getApiTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTagsByNameNameQueryKey(
  args: InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>,
) {
  return ['api', '/api/tags/byName/:name', args] as const
}

export function getApiTagsByNameNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsByNameNameQueryKey>
  >({
    queryKey: getApiTagsByNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.byName[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTagsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTagsByNameNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsByNameNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTagsCategoryNamesQueryKey(
  args: InferRequestType<typeof client.api.tags.categoryNames.$get>,
) {
  return ['api', '/api/tags/categoryNames', args] as const
}

export function getApiTagsCategoryNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.categoryNames.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsCategoryNamesQueryKey>
  >({
    queryKey: getApiTagsCategoryNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.categoryNames.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTagsCategoryNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tags.categoryNames.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTagsCategoryNamesQueryKey>
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
      ...getApiTagsCategoryNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTagsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTagsCommentsCommentIdMutationOptions<
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

export function createDeleteApiTagsCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiTagsCommentsCommentIdMutationOptions<
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

export function getApiTagsNamesQueryKey(args: InferRequestType<typeof client.api.tags.names.$get>) {
  return ['api', '/api/tags/names', args] as const
}

export function getApiTagsNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tags.names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsNamesQueryKey>
  >({
    queryKey: getApiTagsNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTagsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tags.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTagsNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTagsTopQueryKey(args: InferRequestType<typeof client.api.tags.top.$get>) {
  return ['api', '/api/tags/top', args] as const
}

export function getApiTagsTopQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tags.top.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsTopQueryKey>
  >({
    queryKey: getApiTagsTopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.top.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTagsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tags.top.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTagsTopQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsTopQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTagsIdQueryKey(
  args: InferRequestType<(typeof client.api.tags)[':id']['$get']>,
) {
  return ['api', '/api/tags/:id', args] as const
}

export function getApiTagsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.api.tags)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTagsIdQueryKey>
  >({
    queryKey: getApiTagsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTagsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tags)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTagsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.tags)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiTagsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiTagsTagIdChildrenQueryKey(
  args: InferRequestType<(typeof client.api.tags)[':tagId']['children']['$get']>,
) {
  return ['api', '/api/tags/:tagId/children', args] as const
}

export function getApiTagsTagIdChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tags)[':tagId']['children']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tags)[':tagId']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTagsTagIdChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags[':tagId'].children.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTagsTagIdChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tags)[':tagId']['children']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tags)[':tagId']['children']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiTagsTagIdChildrenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiTagsTagIdCommentsQueryKey(
  args: InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$get']>,
) {
  return ['api', '/api/tags/:tagId/comments', args] as const
}

export function getApiTagsTagIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tags)[':tagId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiTagsTagIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags[':tagId'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiTagsTagIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.tags)[':tagId']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiTagsTagIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiTagsTagIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTagsTagIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiTagsTagIdReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTagsTagIdReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersQueryKey(args: InferRequestType<typeof client.api.users.$get>) {
  return ['api', '/api/users', args] as const
}

export function getApiUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >({
    queryKey: getApiUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersCurrentQueryKey(
  args: InferRequestType<typeof client.api.users.current.$get>,
) {
  return ['api', '/api/users/current', args] as const
}

export function getApiUsersCurrentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.users.current.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersCurrentQueryKey>
  >({
    queryKey: getApiUsersCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.current.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.users.current.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersCurrentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersCurrentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryKey(
  args: InferRequestType<
    (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
  >,
) {
  return ['api', '/api/users/current/album-collection-statuses/:albumId', args] as const
}

export function getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.current['album-collection-statuses'][':albumId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersCurrentAlbumCollectionStatusesAlbumId<
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
  args: () => InferRequestType<
    (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersCurrentAlbumsAlbumId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersCurrentAlbumsAlbumIdMutationOptions<
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

export function getApiUsersCurrentFollowedArtistsArtistIdQueryKey(
  args: InferRequestType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>,
) {
  return ['api', '/api/users/current/followedArtists/:artistId', args] as const
}

export function getApiUsersCurrentFollowedArtistsArtistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersCurrentFollowedArtistsArtistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.current.followedArtists[':artistId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersCurrentFollowedArtistsArtistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.users.current.followedArtists)[':artistId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersCurrentFollowedArtistsArtistIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersCurrentFollowedTagsTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersCurrentFollowedTagsTagIdMutationOptions<
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

export function createDeleteApiUsersCurrentFollowedTagsTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUsersCurrentFollowedTagsTagIdMutationOptions<
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

export function getApiUsersCurrentRatedSongsSongIdQueryKey(
  args: InferRequestType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>,
) {
  return ['api', '/api/users/current/ratedSongs/:songId', args] as const
}

export function getApiUsersCurrentRatedSongsSongIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersCurrentRatedSongsSongIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.current.ratedSongs[':songId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersCurrentRatedSongsSongId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersCurrentRatedSongsSongIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersCurrentRefreshEntryEdit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersCurrentRefreshEntryEditMutationOptions<
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

export function createPostApiUsersCurrentSongTagsSongId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersCurrentSongTagsSongIdMutationOptions<
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

export function getApiUsersMessagesMessageIdQueryKey(
  args: InferRequestType<(typeof client.api.users.messages)[':messageId']['$get']>,
) {
  return ['api', '/api/users/messages/:messageId', args] as const
}

export function getApiUsersMessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.messages)[':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.messages[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users.messages)[':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users.messages)[':messageId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersMessagesMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiUsersNamesQueryKey(
  args: InferRequestType<typeof client.api.users.names.$get>,
) {
  return ['api', '/api/users/names', args] as const
}

export function getApiUsersNamesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.users.names.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersNamesQueryKey>
  >({
    queryKey: getApiUsersNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.names.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.users.names.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersNamesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiUsersProfileCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersProfileCommentsCommentIdMutationOptions<
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

export function createDeleteApiUsersProfileCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUsersProfileCommentsCommentIdMutationOptions<
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

export function getApiUsersIdQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
) {
  return ['api', '/api/users/:id', args] as const
}

export function getApiUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersIdQueryKey>
  >({
    queryKey: getApiUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersIdAlbumCollectionStatusesAlbumIdQueryKey(
  args: InferRequestType<
    (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
  >,
) {
  return ['api', '/api/users/:id/album-collection-statuses/:albumId', args] as const
}

export function getApiUsersIdAlbumCollectionStatusesAlbumIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdAlbumCollectionStatusesAlbumIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id']['album-collection-statuses'][':albumId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdAlbumCollectionStatusesAlbumId<
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
  args: () => InferRequestType<
    (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersIdAlbumCollectionStatusesAlbumIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiUsersIdAlbumsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>,
) {
  return ['api', '/api/users/:id/albums', args] as const
}

export function getApiUsersIdAlbumsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdAlbumsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].albums.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersIdAlbumsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersIdEventsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['events']['$get']>,
) {
  return ['api', '/api/users/:id/events', args] as const
}

export function getApiUsersIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersIdEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUsersIdFollowedArtistsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['followedArtists']['$get']>,
) {
  return ['api', '/api/users/:id/followedArtists', args] as const
}

export function getApiUsersIdFollowedArtistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['followedArtists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['followedArtists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdFollowedArtistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].followedArtists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdFollowedArtists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['followedArtists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['followedArtists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersIdFollowedArtistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiUsersIdFollowedArtistsArtistIdQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>,
) {
  return ['api', '/api/users/:id/followedArtists/:artistId', args] as const
}

export function getApiUsersIdFollowedArtistsArtistIdQueryOptions<
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
  args: InferRequestType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdFollowedArtistsArtistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].followedArtists[':artistId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdFollowedArtistsArtistId<
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
  args: () => InferRequestType<
    (typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersIdFollowedArtistsArtistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiUsersIdMessagesQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['messages']['$get']>,
) {
  return ['api', '/api/users/:id/messages', args] as const
}

export function getApiUsersIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersIdMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiUsersIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersIdMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiUsersIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUsersIdMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersIdProfileCommentsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['profileComments']['$get']>,
) {
  return ['api', '/api/users/:id/profileComments', args] as const
}

export function getApiUsersIdProfileCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['profileComments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['profileComments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdProfileCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].profileComments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdProfileComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['profileComments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['profileComments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersIdProfileCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersIdProfileComments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersIdProfileCommentsMutationOptions<
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

export function getApiUsersIdRatedSongsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['ratedSongs']['$get']>,
) {
  return ['api', '/api/users/:id/ratedSongs', args] as const
}

export function getApiUsersIdRatedSongsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['ratedSongs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdRatedSongsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].ratedSongs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdRatedSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['ratedSongs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersIdRatedSongsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiUsersIdRatedSongsSongIdQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>,
) {
  return ['api', '/api/users/:id/ratedSongs/:songId', args] as const
}

export function getApiUsersIdRatedSongsSongIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdRatedSongsSongIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].ratedSongs[':songId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdRatedSongsSongId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiUsersIdRatedSongsSongIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiUsersIdReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersIdReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiUsersIdSettingsSettingName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUsersIdSettingsSettingNameMutationOptions<
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

export function getApiUsersIdSongListsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':id']['songLists']['$get']>,
) {
  return ['api', '/api/users/:id/songLists', args] as const
}

export function getApiUsersIdSongListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['songLists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['songLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiUsersIdSongListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':id'].songLists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUsersIdSongLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':id']['songLists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':id']['songLists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersIdSongListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiVenuesQueryKey(args: InferRequestType<typeof client.api.venues.$get>) {
  return ['api', '/api/venues', args] as const
}

export function getApiVenuesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.venues.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVenuesQueryKey>
  >({
    queryKey: getApiVenuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.venues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiVenues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.venues.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVenuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVenuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteApiVenuesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.venues)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.venues)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiVenuesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiVenuesIdReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiVenuesIdReportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
