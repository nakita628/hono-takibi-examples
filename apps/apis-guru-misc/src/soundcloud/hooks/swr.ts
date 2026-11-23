import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetConnectKey(args: InferRequestType<typeof client.connect.$get>) {
  return ['connect', '/connect', args] as const
}

export function useGetConnect<TError = unknown>(
  args: InferRequestType<typeof client.connect.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.connect.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConnect<TError = unknown>(
  args: InferRequestType<typeof client.connect.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.connect.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostLikesPlaylistsPlaylistIdKey() {
  return ['likes', '/likes/playlists/:playlist_id', 'POST'] as const
}

export function usePostLikesPlaylistsPlaylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.likes.playlists)[':playlist_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLikesPlaylistsPlaylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$post']> },
      ) => parseResponse(client.likes.playlists[':playlist_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLikesPlaylistsPlaylistIdKey() {
  return ['likes', '/likes/playlists/:playlist_id', 'DELETE'] as const
}

export function useDeleteLikesPlaylistsPlaylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.likes.playlists)[':playlist_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLikesPlaylistsPlaylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$delete']> },
      ) => parseResponse(client.likes.playlists[':playlist_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLikesTracksTrackIdKey() {
  return ['likes', '/likes/tracks/:track_id', 'POST'] as const
}

export function usePostLikesTracksTrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.likes.tracks)[':track_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.likes.tracks)[':track_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLikesTracksTrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.likes.tracks)[':track_id']['$post']> },
      ) => parseResponse(client.likes.tracks[':track_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLikesTracksTrackIdKey() {
  return ['likes', '/likes/tracks/:track_id', 'DELETE'] as const
}

export function useDeleteLikesTracksTrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.likes.tracks)[':track_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.likes.tracks)[':track_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLikesTracksTrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.likes.tracks)[':track_id']['$delete']> },
      ) => parseResponse(client.likes.tracks[':track_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetMeActivitiesKey(args: InferRequestType<typeof client.me.activities.$get>) {
  return ['me', '/me/activities', args] as const
}

export function useGetMeActivities<TError = unknown>(
  args: InferRequestType<typeof client.me.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeActivitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeActivities<TError = unknown>(
  args: InferRequestType<typeof client.me.activities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeActivitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeActivitiesAllOwnKey(
  args: InferRequestType<typeof client.me.activities.all.own.$get>,
) {
  return ['me', '/me/activities/all/own', args] as const
}

export function useGetMeActivitiesAllOwn<TError = unknown>(
  args: InferRequestType<typeof client.me.activities.all.own.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
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
        ? getGetMeActivitiesAllOwnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.activities.all.own.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeActivitiesAllOwn<TError = unknown>(
  args: InferRequestType<typeof client.me.activities.all.own.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
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
        ? getGetMeActivitiesAllOwnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.all.own.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.activities.all.own.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeActivitiesTracksKey(
  args: InferRequestType<typeof client.me.activities.tracks.$get>,
) {
  return ['me', '/me/activities/tracks', args] as const
}

export function useGetMeActivitiesTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.activities.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>
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
        ? getGetMeActivitiesTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.activities.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeActivitiesTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.activities.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>
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
        ? getGetMeActivitiesTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.activities.tracks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.activities.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeConnectionsKey(args: InferRequestType<typeof client.me.connections.$get>) {
  return ['me', '/me/connections', args] as const
}

export function useGetMeConnections<TError = unknown>(
  args: InferRequestType<typeof client.me.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeConnections<TError = unknown>(
  args: InferRequestType<typeof client.me.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeConnectionsConnectionIdKey(
  args: InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>,
) {
  return ['me', '/me/connections/:connection_id', args] as const
}

export function useGetMeConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
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
        ? getGetMeConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.connections[':connection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
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
        ? getGetMeConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.connections)[':connection_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.connections[':connection_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFavoritesIdsKey(
  args: InferRequestType<typeof client.me.favorites.ids.$get>,
) {
  return ['me', '/me/favorites/ids', args] as const
}

export function useGetMeFavoritesIds<TError = unknown>(
  args: InferRequestType<typeof client.me.favorites.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFavoritesIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.favorites.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFavoritesIds<TError = unknown>(
  args: InferRequestType<typeof client.me.favorites.ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFavoritesIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.favorites.ids.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.favorites.ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFollowersKey(args: InferRequestType<typeof client.me.followers.$get>) {
  return ['me', '/me/followers', args] as const
}

export function useGetMeFollowers<TError = unknown>(
  args: InferRequestType<typeof client.me.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowers<TError = unknown>(
  args: InferRequestType<typeof client.me.followers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFollowersFollowerIdKey(
  args: InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>,
) {
  return ['me', '/me/followers/:follower_id', args] as const
}

export function useGetMeFollowersFollowerId<TError = unknown>(
  args: InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
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
        ? getGetMeFollowersFollowerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followers[':follower_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowersFollowerId<TError = unknown>(
  args: InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
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
        ? getGetMeFollowersFollowerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.followers)[':follower_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followers[':follower_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFollowingsKey(args: InferRequestType<typeof client.me.followings.$get>) {
  return ['me', '/me/followings', args] as const
}

export function useGetMeFollowings<TError = unknown>(
  args: InferRequestType<typeof client.me.followings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowings<TError = unknown>(
  args: InferRequestType<typeof client.me.followings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeFollowingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFollowingsTracksKey(
  args: InferRequestType<typeof client.me.followings.tracks.$get>,
) {
  return ['me', '/me/followings/tracks', args] as const
}

export function useGetMeFollowingsTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.followings.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>
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
        ? getGetMeFollowingsTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followings.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowingsTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.followings.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>
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
        ? getGetMeFollowingsTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.me.followings.tracks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followings.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeFollowingsUserIdKey(
  args: InferRequestType<(typeof client.me.followings)[':user_id']['$get']>,
) {
  return ['me', '/me/followings/:user_id', args] as const
}

export function useGetMeFollowingsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.me.followings)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>
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
        ? getGetMeFollowingsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followings[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeFollowingsUserId<TError = unknown>(
  args: InferRequestType<(typeof client.me.followings)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>
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
        ? getGetMeFollowingsUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.followings[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMeFollowingsUserIdKey() {
  return ['me', '/me/followings/:user_id', 'PUT'] as const
}

export function usePutMeFollowingsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.me.followings)[':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMeFollowingsUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.followings)[':user_id']['$put']> },
      ) => parseResponse(client.me.followings[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMeFollowingsUserIdKey() {
  return ['me', '/me/followings/:user_id', 'DELETE'] as const
}

export function useDeleteMeFollowingsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.followings)[':user_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.me.followings)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeFollowingsUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.followings)[':user_id']['$delete']> },
      ) => parseResponse(client.me.followings[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMeLikesTracksKey(args: InferRequestType<typeof client.me.likes.tracks.$get>) {
  return ['me', '/me/likes/tracks', args] as const
}

export function useGetMeLikesTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.likes.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeLikesTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.likes.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeLikesTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.likes.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeLikesTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.likes.tracks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.likes.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePlaylistsKey(args: InferRequestType<typeof client.me.playlists.$get>) {
  return ['me', '/me/playlists', args] as const
}

export function useGetMePlaylists<TError = unknown>(
  args: InferRequestType<typeof client.me.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlaylists<TError = unknown>(
  args: InferRequestType<typeof client.me.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMePlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.playlists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMePlaylistsPlaylistIdKey(
  args: InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>,
) {
  return ['me', '/me/playlists/:playlist_id', args] as const
}

export function useGetMePlaylistsPlaylistId<TError = unknown>(
  args: InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
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
        ? getGetMePlaylistsPlaylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.playlists[':playlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMePlaylistsPlaylistId<TError = unknown>(
  args: InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
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
        ? getGetMePlaylistsPlaylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.playlists)[':playlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.playlists[':playlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTracksKey(args: InferRequestType<typeof client.me.tracks.$get>) {
  return ['me', '/me/tracks', args] as const
}

export function useGetMeTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTracks<TError = unknown>(
  args: InferRequestType<typeof client.me.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMeTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.tracks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeTracksTrackIdKey(
  args: InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>,
) {
  return ['me', '/me/tracks/:track_id', args] as const
}

export function useGetMeTracksTrackId<TError = unknown>(
  args: InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
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
        ? getGetMeTracksTrackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tracks[':track_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMeTracksTrackId<TError = unknown>(
  args: InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
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
        ? getGetMeTracksTrackIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.me.tracks)[':track_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.me.tracks[':track_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauth2TokenKey() {
  return ['oauth2', '/oauth2/token', 'POST'] as const
}

export function usePostOauth2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.token.$post> }) =>
        parseResponse(client.oauth2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsKey(args: InferRequestType<typeof client.playlists.$get>) {
  return ['playlists', '/playlists', args] as const
}

export function useGetPlaylists<TError = unknown>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylists<TError = unknown>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlaylistsKey() {
  return ['playlists', '/playlists', 'POST'] as const
}

export function usePostPlaylists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.playlists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlaylistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.playlists.$post> }) =>
        parseResponse(client.playlists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsPlaylistIdKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id', args] as const
}

export function useGetPlaylistsPlaylistId<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
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
        ? getGetPlaylistsPlaylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistId<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
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
        ? getGetPlaylistsPlaylistIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPlaylistsPlaylistIdKey() {
  return ['playlists', '/playlists/:playlist_id', 'PUT'] as const
}

export function usePutPlaylistsPlaylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlaylistsPlaylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['$put']> },
      ) => parseResponse(client.playlists[':playlist_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlaylistsPlaylistIdKey() {
  return ['playlists', '/playlists/:playlist_id', 'DELETE'] as const
}

export function useDeletePlaylistsPlaylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':playlist_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlaylistsPlaylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.playlists)[':playlist_id']['$delete']> },
      ) => parseResponse(client.playlists[':playlist_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsPlaylistIdRepostersKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/reposters', args] as const
}

export function useGetPlaylistsPlaylistIdReposters<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
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
        ? getGetPlaylistsPlaylistIdRepostersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.playlists[':playlist_id'].reposters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistIdReposters<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
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
        ? getGetPlaylistsPlaylistIdRepostersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.playlists[':playlist_id'].reposters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlaylistsPlaylistIdTracksKey(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
) {
  return ['playlists', '/playlists/:playlist_id/tracks', args] as const
}

export function useGetPlaylistsPlaylistIdTracks<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
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
        ? getGetPlaylistsPlaylistIdTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsPlaylistIdTracks<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
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
        ? getGetPlaylistsPlaylistIdTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':playlist_id'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRepostsPlaylistsPlaylistIdKey() {
  return ['reposts', '/reposts/playlists/:playlist_id', 'POST'] as const
}

export function usePostRepostsPlaylistsPlaylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reposts.playlists)[':playlist_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepostsPlaylistsPlaylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$post']> },
      ) => parseResponse(client.reposts.playlists[':playlist_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepostsPlaylistsPlaylistIdKey() {
  return ['reposts', '/reposts/playlists/:playlist_id', 'DELETE'] as const
}

export function useDeleteRepostsPlaylistsPlaylistId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reposts.playlists)[':playlist_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepostsPlaylistsPlaylistIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$delete']> },
      ) => parseResponse(client.reposts.playlists[':playlist_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRepostsTracksTrackIdKey() {
  return ['reposts', '/reposts/tracks/:track_id', 'POST'] as const
}

export function usePostRepostsTracksTrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reposts.tracks)[':track_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reposts.tracks)[':track_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepostsTracksTrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reposts.tracks)[':track_id']['$post']> },
      ) => parseResponse(client.reposts.tracks[':track_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRepostsTracksTrackIdKey() {
  return ['reposts', '/reposts/tracks/:track_id', 'DELETE'] as const
}

export function useDeleteRepostsTracksTrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reposts.tracks)[':track_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reposts.tracks)[':track_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRepostsTracksTrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reposts.tracks)[':track_id']['$delete']> },
      ) => parseResponse(client.reposts.tracks[':track_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResolveKey(args: InferRequestType<typeof client.resolve.$get>) {
  return ['resolve', '/resolve', args] as const
}

export function useGetResolve<TError = unknown>(
  args: InferRequestType<typeof client.resolve.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResolveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.resolve.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetResolve<TError = unknown>(
  args: InferRequestType<typeof client.resolve.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResolveKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolve.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.resolve.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTracksKey(args: InferRequestType<typeof client.tracks.$get>) {
  return ['tracks', '/tracks', args] as const
}

export function useGetTracks<TError = unknown>(
  args: InferRequestType<typeof client.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tracks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTracks<TError = unknown>(
  args: InferRequestType<typeof client.tracks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tracks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTracksKey() {
  return ['tracks', '/tracks', 'POST'] as const
}

export function usePostTracks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tracks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tracks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTracksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tracks.$post> }) =>
        parseResponse(client.tracks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTracksTrackIdKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['$get']>,
) {
  return ['tracks', '/tracks/:track_id', args] as const
}

export function useGetTracksTrackId<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTracksTrackIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracksTrackId<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTracksTrackIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTracksTrackIdKey() {
  return ['tracks', '/tracks/:track_id', 'PUT'] as const
}

export function usePutTracksTrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracks)[':track_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTracksTrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tracks)[':track_id']['$put']> },
      ) => parseResponse(client.tracks[':track_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTracksTrackIdKey() {
  return ['tracks', '/tracks/:track_id', 'DELETE'] as const
}

export function useDeleteTracksTrackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tracks)[':track_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracks)[':track_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTracksTrackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tracks)[':track_id']['$delete']> },
      ) => parseResponse(client.tracks[':track_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTracksTrackIdCommentsKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/comments', args] as const
}

export function useGetTracksTrackIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
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
        ? getGetTracksTrackIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracksTrackIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
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
        ? getGetTracksTrackIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTracksTrackIdCommentsKey() {
  return ['tracks', '/tracks/:track_id/comments', 'POST'] as const
}

export function usePostTracksTrackIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracks)[':track_id']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracks)[':track_id']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTracksTrackIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$post']> },
      ) => parseResponse(client.tracks[':track_id'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTracksTrackIdFavoritersKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/favoriters', args] as const
}

export function useGetTracksTrackIdFavoriters<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
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
        ? getGetTracksTrackIdFavoritersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].favoriters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracksTrackIdFavoriters<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
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
        ? getGetTracksTrackIdFavoritersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['favoriters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].favoriters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTracksTrackIdRelatedKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/related', args] as const
}

export function useGetTracksTrackIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
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
        ? getGetTracksTrackIdRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracksTrackIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
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
        ? getGetTracksTrackIdRelatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['related']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTracksTrackIdRepostersKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/reposters', args] as const
}

export function useGetTracksTrackIdReposters<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
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
        ? getGetTracksTrackIdRepostersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].reposters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracksTrackIdReposters<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
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
        ? getGetTracksTrackIdRepostersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['reposters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].reposters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTracksTrackIdStreamsKey(
  args: InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>,
) {
  return ['tracks', '/tracks/:track_id/streams', args] as const
}

export function useGetTracksTrackIdStreams<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
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
        ? getGetTracksTrackIdStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].streams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracksTrackIdStreams<TError = unknown>(
  args: InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
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
        ? getGetTracksTrackIdStreamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracks)[':track_id']['streams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tracks[':track_id'].streams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdCommentsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>,
) {
  return ['users', '/users/:user_id/comments', args] as const
}

export function useGetUsersUserIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
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
        ? getGetUsersUserIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
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
        ? getGetUsersUserIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdFavoritesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>,
) {
  return ['users', '/users/:user_id/favorites', args] as const
}

export function useGetUsersUserIdFavorites<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
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
        ? getGetUsersUserIdFavoritesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].favorites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdFavorites<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
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
        ? getGetUsersUserIdFavoritesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['favorites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].favorites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdFollowersKey(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
) {
  return ['users', '/users/:user_id/followers', args] as const
}

export function useGetUsersUserIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
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
        ? getGetUsersUserIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
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
        ? getGetUsersUserIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdFollowingsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>,
) {
  return ['users', '/users/:user_id/followings', args] as const
}

export function useGetUsersUserIdFollowings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
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
        ? getGetUsersUserIdFollowingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].followings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdFollowings<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
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
        ? getGetUsersUserIdFollowingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['followings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].followings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdFollowingsFollowingIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>,
) {
  return ['users', '/users/:user_id/followings/:following_id', args] as const
}

export function useGetUsersUserIdFollowingsFollowingId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
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
        ? getGetUsersUserIdFollowingsFollowingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].followings[':following_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdFollowingsFollowingId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
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
        ? getGetUsersUserIdFollowingsFollowingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.users[':user_id'].followings[':following_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdLikesTracksKey(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>,
) {
  return ['users', '/users/:user_id/likes/tracks', args] as const
}

export function useGetUsersUserIdLikesTracks<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
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
        ? getGetUsersUserIdLikesTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].likes.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdLikesTracks<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
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
        ? getGetUsersUserIdLikesTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].likes.tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdPlaylistsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
) {
  return ['users', '/users/:user_id/playlists', args] as const
}

export function useGetUsersUserIdPlaylists<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
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
        ? getGetUsersUserIdPlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdPlaylists<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
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
        ? getGetUsersUserIdPlaylistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['playlists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdTracksKey(
  args: InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>,
) {
  return ['users', '/users/:user_id/tracks', args] as const
}

export function useGetUsersUserIdTracks<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>
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
        ? getGetUsersUserIdTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdTracks<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>
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
        ? getGetUsersUserIdTracksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['tracks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].tracks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdWebProfilesKey(
  args: InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>,
) {
  return ['users', '/users/:user_id/web-profiles', args] as const
}

export function useGetUsersUserIdWebProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
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
        ? getGetUsersUserIdWebProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id']['web-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdWebProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
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
        ? getGetUsersUserIdWebProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['web-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id']['web-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
