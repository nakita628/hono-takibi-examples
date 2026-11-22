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

export function getConnectKey() {
  return ['connect'] as const
}

export function getLikesKey() {
  return ['likes'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getPlaylistsKey() {
  return ['playlists'] as const
}

export function getRepostsKey() {
  return ['reposts'] as const
}

export function getResolveKey() {
  return ['resolve'] as const
}

export function getTracksKey() {
  return ['tracks'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getConnectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connect.$get>>,
) {
  return ['connect', '/connect', toValue(args)] as const
}

export function getConnectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connect.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connect.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connect.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>
          >,
          ReturnType<typeof getConnectQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connect.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLikesPlaylistsPlaylistIdMutationKey() {
  return ['likes', '/likes/playlists/:playlist_id', 'POST'] as const
}

export function getPostLikesPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.likes.playlists)[':playlist_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLikesPlaylistsPlaylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$post']>,
    ) {
      return parseResponse(client.likes.playlists[':playlist_id'].$post(args, options))
    },
  })
}

export function usePostLikesPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.likes.playlists)[':playlist_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$post']>,
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
  const mutationDefaults = getPostLikesPlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLikesPlaylistsPlaylistIdMutationKey() {
  return ['likes', '/likes/playlists/:playlist_id', 'DELETE'] as const
}

export function getDeleteLikesPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.likes.playlists)[':playlist_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLikesPlaylistsPlaylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$delete']>,
    ) {
      return parseResponse(client.likes.playlists[':playlist_id'].$delete(args, options))
    },
  })
}

export function useDeleteLikesPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.likes.playlists)[':playlist_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$delete']>,
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
  const mutationDefaults = getDeleteLikesPlaylistsPlaylistIdMutationOptions<
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

export function getPostLikesTracksTrackIdMutationKey() {
  return ['likes', '/likes/tracks/:track_id', 'POST'] as const
}

export function getPostLikesTracksTrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.likes.tracks)[':track_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.likes.tracks)[':track_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLikesTracksTrackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.likes.tracks)[':track_id']['$post']>) {
      return parseResponse(client.likes.tracks[':track_id'].$post(args, options))
    },
  })
}

export function usePostLikesTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.likes.tracks)[':track_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.likes.tracks)[':track_id']['$post']>,
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
  const mutationDefaults = getPostLikesTracksTrackIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLikesTracksTrackIdMutationKey() {
  return ['likes', '/likes/tracks/:track_id', 'DELETE'] as const
}

export function getDeleteLikesTracksTrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.likes.tracks)[':track_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.likes.tracks)[':track_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLikesTracksTrackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.likes.tracks)[':track_id']['$delete']>) {
      return parseResponse(client.likes.tracks[':track_id'].$delete(args, options))
    },
  })
}

export function useDeleteLikesTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.likes.tracks)[':track_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.likes.tracks)[':track_id']['$delete']>,
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
  const mutationDefaults = getDeleteLikesTracksTrackIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getMeActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.$get>>,
) {
  return ['me', '/me/activities', toValue(args)] as const
}

export function getMeActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
          >,
          ReturnType<typeof getMeActivitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeActivitiesAllOwnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.all.own.$get>>,
) {
  return ['me', '/me/activities/all/own', toValue(args)] as const
}

export function getMeActivitiesAllOwnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.all.own.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeActivitiesAllOwnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.activities.all.own.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeActivitiesAllOwn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.all.own.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
            >
          >,
          ReturnType<typeof getMeActivitiesAllOwnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeActivitiesAllOwnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeActivitiesAllOwnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.activities.all.own.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeActivitiesTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.tracks.$get>>,
) {
  return ['me', '/me/activities/tracks', toValue(args)] as const
}

export function getMeActivitiesTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.tracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeActivitiesTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.activities.tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeActivitiesTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.activities.tracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>
            >
          >,
          ReturnType<typeof getMeActivitiesTracksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeActivitiesTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeActivitiesTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.activities.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.connections.$get>>,
) {
  return ['me', '/me/connections', toValue(args)] as const
}

export function getMeConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
          >,
          ReturnType<typeof getMeConnectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeConnectionsConnectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>
  >,
) {
  return ['me', '/me/connections/:connection_id', toValue(args)] as const
}

export function getMeConnectionsConnectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeConnectionsConnectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.connections[':connection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeConnectionsConnectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeConnectionsConnectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeConnectionsConnectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.connections[':connection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFavoritesIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.favorites.ids.$get>>,
) {
  return ['me', '/me/favorites/ids', toValue(args)] as const
}

export function getMeFavoritesIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.favorites.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFavoritesIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.favorites.ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeFavoritesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.favorites.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>
            >
          >,
          ReturnType<typeof getMeFavoritesIdsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeFavoritesIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFavoritesIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.favorites.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followers.$get>>,
) {
  return ['me', '/me/followers', toValue(args)] as const
}

export function getMeFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.followers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
          >,
          ReturnType<typeof getMeFollowersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFollowersFollowerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>>,
) {
  return ['me', '/me/followers/:follower_id', toValue(args)] as const
}

export function getMeFollowersFollowerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowersFollowerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.followers[':follower_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeFollowersFollowerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeFollowersFollowerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowersFollowerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowersFollowerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.followers[':follower_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFollowingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followings.$get>>,
) {
  return ['me', '/me/followings', toValue(args)] as const
}

export function getMeFollowingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.followings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeFollowings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
          >,
          ReturnType<typeof getMeFollowingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.followings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFollowingsTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followings.tracks.$get>>,
) {
  return ['me', '/me/followings/tracks', toValue(args)] as const
}

export function getMeFollowingsTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followings.tracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowingsTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.followings.tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeFollowingsTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.followings.tracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>
            >
          >,
          ReturnType<typeof getMeFollowingsTracksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingsTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowingsTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.followings.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeFollowingsUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.followings)[':user_id']['$get']>>,
) {
  return ['me', '/me/followings/:user_id', toValue(args)] as const
}

export function getMeFollowingsUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.followings)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeFollowingsUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.followings[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeFollowingsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.followings)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeFollowingsUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingsUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeFollowingsUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.followings[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutMeFollowingsUserIdMutationKey() {
  return ['me', '/me/followings/:user_id', 'PUT'] as const
}

export function getPutMeFollowingsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.me.followings)[':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMeFollowingsUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.followings)[':user_id']['$put']>) {
      return parseResponse(client.me.followings[':user_id'].$put(args, options))
    },
  })
}

export function usePutMeFollowingsUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.me.followings)[':user_id']['$put']>,
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
  const mutationDefaults = getPutMeFollowingsUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMeFollowingsUserIdMutationKey() {
  return ['me', '/me/followings/:user_id', 'DELETE'] as const
}

export function getDeleteMeFollowingsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.me.followings)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeFollowingsUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.followings)[':user_id']['$delete']>) {
      return parseResponse(client.me.followings[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteMeFollowingsUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.me.followings)[':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteMeFollowingsUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getMeLikesTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.likes.tracks.$get>>,
) {
  return ['me', '/me/likes/tracks', toValue(args)] as const
}

export function getMeLikesTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.likes.tracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeLikesTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.likes.tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeLikesTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.likes.tracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>
            >
          >,
          ReturnType<typeof getMeLikesTracksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeLikesTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeLikesTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.likes.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.playlists.$get>>,
) {
  return ['me', '/me/playlists', toValue(args)] as const
}

export function getMePlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.playlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.playlists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.playlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
          >,
          ReturnType<typeof getMePlaylistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMePlaylistsPlaylistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>>,
) {
  return ['me', '/me/playlists/:playlist_id', toValue(args)] as const
}

export function getMePlaylistsPlaylistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMePlaylistsPlaylistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.playlists[':playlist_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMePlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMePlaylistsPlaylistIdQueryKey>
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
          Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMePlaylistsPlaylistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMePlaylistsPlaylistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.playlists[':playlist_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.$get>>,
) {
  return ['me', '/me/tracks', toValue(args)] as const
}

export function getMeTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.tracks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMeTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.tracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
          >,
          ReturnType<typeof getMeTracksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeTracksTrackIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>>,
) {
  return ['me', '/me/tracks/:track_id', toValue(args)] as const
}

export function getMeTracksTrackIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeTracksTrackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.tracks[':track_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMeTracksTrackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMeTracksTrackIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTracksTrackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeTracksTrackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.tracks[':track_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauth2TokenMutationKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function getPostOauth2TokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauth2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth2.token.$post>) {
      return parseResponse(client.oauth2.token.$post(args, options))
    },
  })
}

export function usePostOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth2.token.$post>,
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
  const mutationDefaults = getPostOauth2TokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
) {
  return ['playlists', '/playlists', toValue(args)] as const
}

export function getPlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
          >,
          ReturnType<typeof getPlaylistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPlaylistsMutationKey() {
  return ['playlists', '/playlists', 'POST'] as const
}

export function getPostPlaylistsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$post>>>>>,
    TError,
    InferRequestType<typeof client.playlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.playlists.$post>) {
      return parseResponse(client.playlists.$post(args, options))
    },
  })
}

export function usePostPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.playlists.$post>,
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
  const mutationDefaults = getPostPlaylistsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlaylistsPlaylistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>>,
) {
  return ['playlists', '/playlists/:playlist_id', toValue(args)] as const
}

export function getPlaylistsPlaylistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':playlist_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':playlist_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPlaylistsPlaylistIdMutationKey() {
  return ['playlists', '/playlists/:playlist_id', 'PUT'] as const
}

export function getPutPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlaylistsPlaylistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>) {
      return parseResponse(client.playlists[':playlist_id'].$put(args, options))
    },
  })
}

export function usePutPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>,
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
  const mutationDefaults = getPutPlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePlaylistsPlaylistIdMutationKey() {
  return ['playlists', '/playlists/:playlist_id', 'DELETE'] as const
}

export function getDeletePlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':playlist_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlaylistsPlaylistIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.playlists)[':playlist_id']['$delete']>) {
      return parseResponse(client.playlists[':playlist_id'].$delete(args, options))
    },
  })
}

export function useDeletePlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.playlists)[':playlist_id']['$delete']>,
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
  const mutationDefaults = getDeletePlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
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

export function getPlaylistsPlaylistIdRepostersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>
  >,
) {
  return ['playlists', '/playlists/:playlist_id/reposters', toValue(args)] as const
}

export function getPlaylistsPlaylistIdRepostersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdRepostersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':playlist_id'].reposters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistIdReposters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdRepostersQueryKey>
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
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdRepostersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdRepostersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':playlist_id'].reposters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaylistsPlaylistIdTracksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>
  >,
) {
  return ['playlists', '/playlists/:playlist_id/tracks', toValue(args)] as const
}

export function getPlaylistsPlaylistIdTracksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsPlaylistIdTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':playlist_id'].tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsPlaylistIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsPlaylistIdTracksQueryKey>
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
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsPlaylistIdTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':playlist_id'].tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepostsPlaylistsPlaylistIdMutationKey() {
  return ['reposts', '/reposts/playlists/:playlist_id', 'POST'] as const
}

export function getPostRepostsPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reposts.playlists)[':playlist_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRepostsPlaylistsPlaylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$post']>,
    ) {
      return parseResponse(client.reposts.playlists[':playlist_id'].$post(args, options))
    },
  })
}

export function usePostRepostsPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reposts.playlists)[':playlist_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$post']>,
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
  const mutationDefaults = getPostRepostsPlaylistsPlaylistIdMutationOptions<
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

export function getDeleteRepostsPlaylistsPlaylistIdMutationKey() {
  return ['reposts', '/reposts/playlists/:playlist_id', 'DELETE'] as const
}

export function getDeleteRepostsPlaylistsPlaylistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reposts.playlists)[':playlist_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepostsPlaylistsPlaylistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$delete']>,
    ) {
      return parseResponse(client.reposts.playlists[':playlist_id'].$delete(args, options))
    },
  })
}

export function useDeleteRepostsPlaylistsPlaylistId<
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
                Awaited<ReturnType<(typeof client.reposts.playlists)[':playlist_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$delete']>,
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
  const mutationDefaults = getDeleteRepostsPlaylistsPlaylistIdMutationOptions<
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

export function getPostRepostsTracksTrackIdMutationKey() {
  return ['reposts', '/reposts/tracks/:track_id', 'POST'] as const
}

export function getPostRepostsTracksTrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reposts.tracks)[':track_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reposts.tracks)[':track_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRepostsTracksTrackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reposts.tracks)[':track_id']['$post']>) {
      return parseResponse(client.reposts.tracks[':track_id'].$post(args, options))
    },
  })
}

export function usePostRepostsTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reposts.tracks)[':track_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reposts.tracks)[':track_id']['$post']>,
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
  const mutationDefaults = getPostRepostsTracksTrackIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRepostsTracksTrackIdMutationKey() {
  return ['reposts', '/reposts/tracks/:track_id', 'DELETE'] as const
}

export function getDeleteRepostsTracksTrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reposts.tracks)[':track_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reposts.tracks)[':track_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepostsTracksTrackIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reposts.tracks)[':track_id']['$delete']>,
    ) {
      return parseResponse(client.reposts.tracks[':track_id'].$delete(args, options))
    },
  })
}

export function useDeleteRepostsTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reposts.tracks)[':track_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reposts.tracks)[':track_id']['$delete']>,
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
  const mutationDefaults = getDeleteRepostsTracksTrackIdMutationOptions<TError, TOnMutateResult>(
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

export function getResolveQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resolve.$get>>,
) {
  return ['resolve', '/resolve', toValue(args)] as const
}

export function getResolveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resolve.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResolveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resolve.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useResolve<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resolve.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>
          >,
          ReturnType<typeof getResolveQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResolveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResolveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resolve.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracks.$get>>,
) {
  return ['tracks', '/tracks', toValue(args)] as const
}

export function getTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTracks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tracks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
          ReturnType<typeof getTracksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTracksMutationKey() {
  return ['tracks', '/tracks', 'POST'] as const
}

export function getPostTracksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$post>>>>>,
    TError,
    InferRequestType<typeof client.tracks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTracksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tracks.$post>) {
      return parseResponse(client.tracks.$post(args, options))
    },
  })
}

export function usePostTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tracks.$post>,
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
  const mutationDefaults = getPostTracksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTracksTrackIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['$get']>>,
) {
  return ['tracks', '/tracks/:track_id', toValue(args)] as const
}

export function getTracksTrackIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksTrackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks[':track_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracksTrackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
            >
          >,
          ReturnType<typeof getTracksTrackIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracksTrackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksTrackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks[':track_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTracksTrackIdMutationKey() {
  return ['tracks', '/tracks/:track_id', 'PUT'] as const
}

export function getPutTracksTrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tracks)[':track_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTracksTrackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tracks)[':track_id']['$put']>) {
      return parseResponse(client.tracks[':track_id'].$put(args, options))
    },
  })
}

export function usePutTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tracks)[':track_id']['$put']>,
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
  const mutationDefaults = getPutTracksTrackIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTracksTrackIdMutationKey() {
  return ['tracks', '/tracks/:track_id', 'DELETE'] as const
}

export function getDeleteTracksTrackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tracks)[':track_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTracksTrackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tracks)[':track_id']['$delete']>) {
      return parseResponse(client.tracks[':track_id'].$delete(args, options))
    },
  })
}

export function useDeleteTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tracks)[':track_id']['$delete']>,
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
  const mutationDefaults = getDeleteTracksTrackIdMutationOptions<TError, TOnMutateResult>(
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

export function getTracksTrackIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>>,
) {
  return ['tracks', '/tracks/:track_id/comments', toValue(args)] as const
}

export function getTracksTrackIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksTrackIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks[':track_id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracksTrackIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTracksTrackIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracksTrackIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksTrackIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks[':track_id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTracksTrackIdCommentsMutationKey() {
  return ['tracks', '/tracks/:track_id/comments', 'POST'] as const
}

export function getPostTracksTrackIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tracks)[':track_id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTracksTrackIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$post']>,
    ) {
      return parseResponse(client.tracks[':track_id'].comments.$post(args, options))
    },
  })
}

export function usePostTracksTrackIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tracks)[':track_id']['comments']['$post']>,
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
  const mutationDefaults = getPostTracksTrackIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getTracksTrackIdFavoritersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>
  >,
) {
  return ['tracks', '/tracks/:track_id/favoriters', toValue(args)] as const
}

export function getTracksTrackIdFavoritersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksTrackIdFavoritersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks[':track_id'].favoriters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracksTrackIdFavoriters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTracksTrackIdFavoritersQueryKey>
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
          Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracksTrackIdFavoritersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksTrackIdFavoritersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks[':track_id'].favoriters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracksTrackIdRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>>,
) {
  return ['tracks', '/tracks/:track_id/related', toValue(args)] as const
}

export function getTracksTrackIdRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksTrackIdRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks[':track_id'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracksTrackIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTracksTrackIdRelatedQueryKey>
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
          Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracksTrackIdRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksTrackIdRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks[':track_id'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracksTrackIdRepostersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>
  >,
) {
  return ['tracks', '/tracks/:track_id/reposters', toValue(args)] as const
}

export function getTracksTrackIdRepostersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksTrackIdRepostersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks[':track_id'].reposters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracksTrackIdReposters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTracksTrackIdRepostersQueryKey>
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
          Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracksTrackIdRepostersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksTrackIdRepostersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks[':track_id'].reposters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracksTrackIdStreamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>>,
) {
  return ['tracks', '/tracks/:track_id/streams', toValue(args)] as const
}

export function getTracksTrackIdStreamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracksTrackIdStreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tracks[':track_id'].streams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracksTrackIdStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTracksTrackIdStreamsQueryKey>
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
          Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracksTrackIdStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracksTrackIdStreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tracks[':track_id'].streams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  return ['users', '/users/:user_id', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdCommentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>>,
) {
  return ['users', '/users/:user_id/comments', toValue(args)] as const
}

export function getUsersUserIdCommentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdCommentsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdFavoritesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>>,
) {
  return ['users', '/users/:user_id/favorites', toValue(args)] as const
}

export function getUsersUserIdFavoritesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdFavoritesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].favorites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdFavoritesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFavoritesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdFavoritesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].favorites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>>,
) {
  return ['users', '/users/:user_id/followers', toValue(args)] as const
}

export function getUsersUserIdFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdFollowersQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdFollowingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>>,
) {
  return ['users', '/users/:user_id/followings', toValue(args)] as const
}

export function getUsersUserIdFollowingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdFollowingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].followings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdFollowings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdFollowingsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdFollowingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].followings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdFollowingsFollowingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
  >,
) {
  return ['users', '/users/:user_id/followings/:following_id', toValue(args)] as const
}

export function getUsersUserIdFollowingsFollowingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdFollowingsFollowingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].followings[':following_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdFollowingsFollowingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
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
                    (typeof client.users)[':user_id']['followings'][':following_id']['$get']
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
                    (typeof client.users)[':user_id']['followings'][':following_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdFollowingsFollowingIdQueryKey>
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
            ReturnType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdFollowingsFollowingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdFollowingsFollowingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].followings[':following_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdLikesTracksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>
  >,
) {
  return ['users', '/users/:user_id/likes/tracks', toValue(args)] as const
}

export function getUsersUserIdLikesTracksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdLikesTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].likes.tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdLikesTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdLikesTracksQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdLikesTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdLikesTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].likes.tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>>,
) {
  return ['users', '/users/:user_id/playlists', toValue(args)] as const
}

export function getUsersUserIdPlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].playlists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPlaylistsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdTracksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>>,
) {
  return ['users', '/users/:user_id/tracks', toValue(args)] as const
}

export function getUsersUserIdTracksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdTracksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].tracks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdTracksQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTracksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdTracksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].tracks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdWebProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>
  >,
) {
  return ['users', '/users/:user_id/web-profiles', toValue(args)] as const
}

export function getUsersUserIdWebProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdWebProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id']['web-profiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdWebProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdWebProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdWebProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdWebProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id']['web-profiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
