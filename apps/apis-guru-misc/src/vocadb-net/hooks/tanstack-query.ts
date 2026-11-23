import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useApiActivityEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.activityEntries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiActivityEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiActivityEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.activityEntries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.activityEntries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiActivityEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.albums.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlbumsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlbums<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.albums.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlbumsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiAlbumsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.albums.names.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlbumsNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlbumsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.albums.names.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlbumsNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiAlbumsNew<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.albums.new.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlbumsNewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlbumsNew<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.new.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.albums.new.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlbumsNewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiAlbumsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.albums.top.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlbumsTopQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlbumsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.albums.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.albums.top.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlbumsTopQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiAlbumsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlbumsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlbumsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlbumsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.albums)[':id']['comments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiAlbumsIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlbumsIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlbumsIdComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlbumsIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.albums)[':id']['reviews']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiAlbumsIdReviewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlbumsIdReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlbumsIdReviews<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlbumsIdReviewsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiAlbumsIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiAlbumsIdTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAlbumsIdTracksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAlbumsIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.albums)[':id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAlbumsIdTracksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiAlbumsIdTracksFieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiAlbumsIdTracksFieldsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAlbumsIdTracksFields<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiAlbumsIdTracksFieldsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.albums)[':id']['user-collections']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiAlbumsIdUserCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiAlbumsIdUserCollectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAlbumsIdUserCollections<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiAlbumsIdUserCollectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.artists.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArtistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArtists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.artists.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArtistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiArtistsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.artists.names.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArtistsNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArtistsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.artists.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.artists.names.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArtistsNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiArtistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.artists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArtistsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArtistsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.artists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.artists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArtistsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.artists)[':id']['comments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiArtistsIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiArtistsIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiArtistsIdComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiArtistsIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.comments)[':entryType-comments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiCommentsEntryTypeCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiCommentsEntryTypeCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCommentsEntryTypeComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiCommentsEntryTypeCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function useApiDiscussionsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.discussions.folders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiDiscussionsFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDiscussionsFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.folders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.discussions.folders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiDiscussionsFoldersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiDiscussionsFoldersFolderIdTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiDiscussionsFoldersFolderIdTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDiscussionsFoldersFolderIdTopics<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiDiscussionsFoldersFolderIdTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function useApiDiscussionsTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.discussions.topics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiDiscussionsTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiDiscussionsTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.discussions.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.discussions.topics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiDiscussionsTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiDiscussionsTopicsTopicIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiDiscussionsTopicsTopicIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDiscussionsTopicsTopicId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiDiscussionsTopicsTopicIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function useApiEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEntriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiEntriesNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entries.names.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiEntriesNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiEntriesNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.entries.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.entries.names.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiEntriesNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiEntryTypesEntryTypeSubTypeTagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiEntryTypesEntryTypeSubTypeTagQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiEntryTypesEntryTypeSubTypeTag<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiEntryTypesEntryTypeSubTypeTagQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiPvsForSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPvsForSongsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPvsForSongs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvs)['for-songs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPvsForSongsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiReleaseEventSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.releaseEventSeries.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiReleaseEventSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReleaseEventSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEventSeries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.releaseEventSeries.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiReleaseEventSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiReleaseEventSeriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiReleaseEventSeriesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReleaseEventSeriesId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiReleaseEventSeriesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiReleaseEventSeriesIdForEditQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReleaseEventSeriesIdForEdit<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiReleaseEventSeriesIdForEditQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiReleaseEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.releaseEvents.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiReleaseEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiReleaseEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.releaseEvents.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiReleaseEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiReleaseEventsNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.releaseEvents.names.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiReleaseEventsNamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReleaseEventsNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.releaseEvents.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.releaseEvents.names.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiReleaseEventsNamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiReleaseEventsEventIdAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiReleaseEventsEventIdAlbumsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReleaseEventsEventIdAlbums<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiReleaseEventsEventIdAlbumsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiReleaseEventsEventIdPublishedSongsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiReleaseEventsEventIdPublishedSongs<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiReleaseEventsEventIdPublishedSongsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function useApiReleaseEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiReleaseEventsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiReleaseEventsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiReleaseEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.releaseEvents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiReleaseEventsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.resources)[':cultureCode']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiResourcesCultureCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiResourcesCultureCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiResourcesCultureCode<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiResourcesCultureCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function useApiSongListsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songLists.featured.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongListsFeaturedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongListsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songLists.featured.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongListsFeaturedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiSongListsFeaturedNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songLists.featured.names.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongListsFeaturedNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSongListsFeaturedNamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSongListsFeaturedNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.songLists.featured.names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songLists.featured.names.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSongListsFeaturedNamesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongListsListIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSongListsListIdCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSongListsListIdComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSongListsListIdCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.songLists)[':listId']['songs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongListsListIdSongsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSongListsListIdSongsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSongListsListIdSongs<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSongListsListIdSongsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiSongs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiSongsByPv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.byPv.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsByPvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsByPv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.byPv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.byPv.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsByPvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiSongsHighlighted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.highlighted.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsHighlightedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsHighlighted<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.highlighted.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.highlighted.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsHighlightedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongsLyricsLyricsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiSongsLyricsLyricsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiSongsLyricsLyricsId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiSongsLyricsLyricsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiSongsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.names.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.songs.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.songs.names.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiSongsTopRated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)['top-rated']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongsTopRatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsTopRatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsTopRated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)['top-rated']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)['top-rated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsTopRatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiSongsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.songs)[':id']['comments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongsIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsIdComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiSongsIdDerived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['derived']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongsIdDerivedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsIdDerivedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsIdDerived<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['derived']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsIdDerivedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiSongsIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongsIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsIdRatingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsIdRatingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiSongsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiSongsIdRelatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSongsIdRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSongsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.songs)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSongsIdRelatedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiTagsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiTagsByNameNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsByNameNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTagsByNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags.byName)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsByNameNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiTagsCategoryNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.categoryNames.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsCategoryNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTagsCategoryNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.categoryNames.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.categoryNames.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsCategoryNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiTagsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.names.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTagsNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.names.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiTagsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.top.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsTopQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTagsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.tags.top.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsTopQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiTagsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tags)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTagsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.tags)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tags)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.tags)[':tagId']['children']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiTagsTagIdChildrenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsTagIdChildrenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTagsTagIdChildren<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsTagIdChildrenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiTagsTagIdCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiTagsTagIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiTagsTagIdComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiTagsTagIdCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function useApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiUsersCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.current.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersCurrentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.current.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.current.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersCurrentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersCurrentAlbumCollectionStatusesAlbumId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersCurrentAlbumCollectionStatusesAlbumIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersCurrentFollowedArtistsArtistIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersCurrentFollowedArtistsArtistIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersCurrentFollowedArtistsArtistId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersCurrentFollowedArtistsArtistIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersCurrentRatedSongsSongIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersCurrentRatedSongsSongIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersCurrentRatedSongsSongId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersCurrentRatedSongsSongIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.users.messages)[':messageId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersMessagesMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersMessagesMessageId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiUsersNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.names.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersNames<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.names.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.users.names.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersNamesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function useApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersIdAlbumCollectionStatusesAlbumIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersIdAlbumCollectionStatusesAlbumIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersIdAlbumCollectionStatusesAlbumId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersIdAlbumCollectionStatusesAlbumIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiUsersIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersIdAlbumsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersIdAlbumsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersIdAlbums<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['albums']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersIdAlbumsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiUsersIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['events']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersIdEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.users)[':id']['events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':id']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersIdEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.users)[':id']['followedArtists']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersIdFollowedArtistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersIdFollowedArtistsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersIdFollowedArtists<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersIdFollowedArtistsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersIdFollowedArtistsArtistIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersIdFollowedArtistsArtistId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersIdFollowedArtistsArtistIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.users)[':id']['messages']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersIdMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersIdMessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersIdMessages<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersIdMessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.api.users)[':id']['profileComments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersIdProfileCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersIdProfileCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersIdProfileComments<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersIdProfileCommentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.users)[':id']['ratedSongs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersIdRatedSongsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersIdRatedSongsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersIdRatedSongs<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersIdRatedSongsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiUsersIdRatedSongsSongIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiUsersIdRatedSongsSongId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiUsersIdRatedSongsSongIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.api.users)[':id']['songLists']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApiUsersIdSongListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiUsersIdSongListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiUsersIdSongLists<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiUsersIdSongListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiVenues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.venues.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiVenuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiVenues<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.venues.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.venues.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiVenuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
