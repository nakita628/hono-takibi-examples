import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getConnectQueryKey(args: InferRequestType<typeof client.connect.$get>) {
  return ['connect', '/connect', args] as const
}

export function getConnectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connect.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectQueryKey>
  >({
    queryKey: getConnectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connect.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connect.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConnectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLikesPlaylistsPlaylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLikesPlaylistsPlaylistIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLikesPlaylistsPlaylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLikesPlaylistsPlaylistIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostLikesTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLikesTracksTrackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteLikesTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLikesTracksTrackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getMeActivitiesQueryKey(args: InferRequestType<typeof client.me.activities.$get>) {
  return ['me', '/me/activities', args] as const
}

export function getMeActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.activities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeActivitiesQueryKey>
  >({
    queryKey: getMeActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.activities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeActivitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeActivitiesAllOwnQueryKey(
  args: InferRequestType<typeof client.me.activities.all.own.$get>,
) {
  return ['me', '/me/activities/all/own', args] as const
}

export function getMeActivitiesAllOwnQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.me.activities.all.own.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeActivitiesAllOwnQueryKey>
  >({
    queryKey: getMeActivitiesAllOwnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.activities.all.own.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeActivitiesAllOwn<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.activities.all.own.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeActivitiesAllOwnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeActivitiesAllOwnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeActivitiesTracksQueryKey(
  args: InferRequestType<typeof client.me.activities.tracks.$get>,
) {
  return ['me', '/me/activities/tracks', args] as const
}

export function getMeActivitiesTracksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.activities.tracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeActivitiesTracksQueryKey>
  >({
    queryKey: getMeActivitiesTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.activities.tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeActivitiesTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.activities.tracks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeActivitiesTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeActivitiesTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeConnectionsQueryKey(
  args: InferRequestType<typeof client.me.connections.$get>,
) {
  return ['me', '/me/connections', args] as const
}

export function getMeConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeConnectionsQueryKey>
  >({
    queryKey: getMeConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>,
) {
  return ['me', '/me/connections/:connection_id', args] as const
}

export function getMeConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMeConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.connections[':connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMeConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMeConnectionsConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMeFavoritesIdsQueryKey(
  args: InferRequestType<typeof client.me.favorites.ids.$get>,
) {
  return ['me', '/me/favorites/ids', args] as const
}

export function getMeFavoritesIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.favorites.ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeFavoritesIdsQueryKey>
  >({
    queryKey: getMeFavoritesIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.favorites.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeFavoritesIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.favorites.ids.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFavoritesIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeFavoritesIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeFollowersQueryKey(args: InferRequestType<typeof client.me.followers.$get>) {
  return ['me', '/me/followers', args] as const
}

export function getMeFollowersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.followers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeFollowersQueryKey>
  >({
    queryKey: getMeFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.followers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.followers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeFollowersFollowerIdQueryKey(
  args: InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>,
) {
  return ['me', '/me/followers/:follower_id', args] as const
}

export function getMeFollowersFollowerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMeFollowersFollowerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.followers[':follower_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMeFollowersFollowerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMeFollowersFollowerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMeFollowingsQueryKey(args: InferRequestType<typeof client.me.followings.$get>) {
  return ['me', '/me/followings', args] as const
}

export function getMeFollowingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.followings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingsQueryKey>
  >({
    queryKey: getMeFollowingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.followings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeFollowings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.followings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeFollowingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeFollowingsTracksQueryKey(
  args: InferRequestType<typeof client.me.followings.tracks.$get>,
) {
  return ['me', '/me/followings/tracks', args] as const
}

export function getMeFollowingsTracksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.followings.tracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingsTracksQueryKey>
  >({
    queryKey: getMeFollowingsTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.followings.tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeFollowingsTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.followings.tracks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingsTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeFollowingsTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeFollowingsUserIdQueryKey(
  args: InferRequestType<(typeof client.me.followings)[':user_id']['$get']>,
) {
  return ['me', '/me/followings/:user_id', args] as const
}

export function getMeFollowingsUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.followings)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeFollowingsUserIdQueryKey>
  >({
    queryKey: getMeFollowingsUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.followings[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMeFollowingsUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.followings)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeFollowingsUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeFollowingsUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutMeFollowingsUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMeFollowingsUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteMeFollowingsUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMeFollowingsUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMeLikesTracksQueryKey(
  args: InferRequestType<typeof client.me.likes.tracks.$get>,
) {
  return ['me', '/me/likes/tracks', args] as const
}

export function getMeLikesTracksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.likes.tracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeLikesTracksQueryKey>
  >({
    queryKey: getMeLikesTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.likes.tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeLikesTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.likes.tracks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeLikesTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeLikesTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMePlaylistsQueryKey(args: InferRequestType<typeof client.me.playlists.$get>) {
  return ['me', '/me/playlists', args] as const
}

export function getMePlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.playlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMePlaylistsQueryKey>
  >({
    queryKey: getMePlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.playlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.playlists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMePlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMePlaylistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMePlaylistsPlaylistIdQueryKey(
  args: InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>,
) {
  return ['me', '/me/playlists/:playlist_id', args] as const
}

export function getMePlaylistsPlaylistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMePlaylistsPlaylistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.playlists[':playlist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMePlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMePlaylistsPlaylistIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMeTracksQueryKey(args: InferRequestType<typeof client.me.tracks.$get>) {
  return ['me', '/me/tracks', args] as const
}

export function getMeTracksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.tracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeTracksQueryKey>
  >({
    queryKey: getMeTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMeTracks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.tracks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMeTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMeTracksTrackIdQueryKey(
  args: InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>,
) {
  return ['me', '/me/tracks/:track_id', args] as const
}

export function getMeTracksTrackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeTracksTrackIdQueryKey>
  >({
    queryKey: getMeTracksTrackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.tracks[':track_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMeTracksTrackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeTracksTrackIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeTracksTrackIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostOauth2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth2.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauth2TokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPlaylistsQueryKey(args: InferRequestType<typeof client.playlists.$get>) {
  return ['playlists', '/playlists', args] as const
}

export function getPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.playlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaylistsQueryKey>
  >({
    queryKey: getPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.playlists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaylistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.playlists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlaylistsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPlaylistsPlaylistIdQueryKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id', args] as const
}

export function getPlaylistsPlaylistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
  >({
    queryKey: getPlaylistsPlaylistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':playlist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsPlaylistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsPlaylistIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaylistsPlaylistIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutPlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeletePlaylistsPlaylistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePlaylistsPlaylistIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPlaylistsPlaylistIdRepostersQueryKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/reposters', args] as const
}

export function getPlaylistsPlaylistIdRepostersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlaylistsPlaylistIdRepostersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':playlist_id'].reposters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsPlaylistIdReposters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlaylistsPlaylistIdRepostersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPlaylistsPlaylistIdTracksQueryKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/tracks', args] as const
}

export function getPlaylistsPlaylistIdTracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPlaylistsPlaylistIdTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':playlist_id'].tracks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsPlaylistIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPlaylistsPlaylistIdTracksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRepostsPlaylistsPlaylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRepostsPlaylistsPlaylistIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRepostsPlaylistsPlaylistId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRepostsPlaylistsPlaylistIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRepostsTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRepostsTracksTrackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRepostsTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRepostsTracksTrackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getResolveQueryKey(args: InferRequestType<typeof client.resolve.$get>) {
  return ['resolve', '/resolve', args] as const
}

export function getResolveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resolve.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResolveQueryKey>
  >({
    queryKey: getResolveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resolve.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResolve<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resolve.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getResolveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResolveQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTracksQueryKey(args: InferRequestType<typeof client.tracks.$get>) {
  return ['tracks', '/tracks', args] as const
}

export function getTracksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tracks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTracksQueryKey>
  >({
    queryKey: getTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTracks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tracks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTracksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTracks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$post>>>>>,
        TError,
        InferRequestType<typeof client.tracks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTracksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTracksTrackIdQueryKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['$get']>,
) {
  return ['tracks', '/tracks/:track_id', args] as const
}

export function getTracksTrackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracksTrackIdQueryKey>
  >({
    queryKey: getTracksTrackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks[':track_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTracksTrackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracks)[':track_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTracksTrackIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTracksTrackIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tracks)[':track_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTracksTrackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTracksTrackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTracksTrackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTracksTrackIdCommentsQueryKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/comments', args] as const
}

export function getTracksTrackIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTracksTrackIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks[':track_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTracksTrackIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTracksTrackIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTracksTrackIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTracksTrackIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTracksTrackIdFavoritersQueryKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/favoriters', args] as const
}

export function getTracksTrackIdFavoritersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTracksTrackIdFavoritersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks[':track_id'].favoriters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTracksTrackIdFavoriters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTracksTrackIdFavoritersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTracksTrackIdRelatedQueryKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/related', args] as const
}

export function getTracksTrackIdRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTracksTrackIdRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks[':track_id'].related.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTracksTrackIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTracksTrackIdRelatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTracksTrackIdRepostersQueryKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/reposters', args] as const
}

export function getTracksTrackIdRepostersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTracksTrackIdRepostersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks[':track_id'].reposters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTracksTrackIdReposters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTracksTrackIdRepostersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTracksTrackIdStreamsQueryKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/streams', args] as const
}

export function getTracksTrackIdStreamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTracksTrackIdStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tracks[':track_id'].streams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTracksTrackIdStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTracksTrackIdStreamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdCommentsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>,
) {
  return ['users', '/users/:user_id/comments', args] as const
}

export function getUsersUserIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdCommentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdFavoritesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>,
) {
  return ['users', '/users/:user_id/favorites', args] as const
}

export function getUsersUserIdFavoritesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdFavoritesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].favorites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdFavorites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdFavoritesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdFollowersQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
) {
  return ['users', '/users/:user_id/followers', args] as const
}

export function getUsersUserIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdFollowersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdFollowingsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>,
) {
  return ['users', '/users/:user_id/followings', args] as const
}

export function getUsersUserIdFollowingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdFollowingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].followings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdFollowings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdFollowingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdFollowingsFollowingIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>,
) {
  return ['users', '/users/:user_id/followings/:following_id', args] as const
}

export function getUsersUserIdFollowingsFollowingIdQueryOptions<
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
  args: InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdFollowingsFollowingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].followings[':following_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdFollowingsFollowingId<
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
  args: () => InferRequestType<
    (typeof client.users)[':user_id']['followings'][':following_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdFollowingsFollowingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdLikesTracksQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>,
) {
  return ['users', '/users/:user_id/likes/tracks', args] as const
}

export function getUsersUserIdLikesTracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdLikesTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].likes.tracks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdLikesTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdLikesTracksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdPlaylistsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
) {
  return ['users', '/users/:user_id/playlists', args] as const
}

export function getUsersUserIdPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].playlists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdPlaylists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdPlaylistsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUsersUserIdTracksQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>,
) {
  return ['users', '/users/:user_id/tracks', args] as const
}

export function getUsersUserIdTracksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdTracksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].tracks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdTracks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdTracksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdWebProfilesQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>,
) {
  return ['users', '/users/:user_id/web-profiles', args] as const
}

export function getUsersUserIdWebProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdWebProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id']['web-profiles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdWebProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdWebProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
