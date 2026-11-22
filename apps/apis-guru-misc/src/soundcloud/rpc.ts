import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConnect(
  args: InferRequestType<typeof client.connect.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect.$get(args, options))
}

export async function postLikesPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.likes.playlists[':playlist_id'].$post(args, options))
}

export async function deleteLikesPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.likes.playlists)[':playlist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.likes.playlists[':playlist_id'].$delete(args, options))
}

export async function postLikesTracksTrackId(
  args: InferRequestType<(typeof client.likes.tracks)[':track_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.likes.tracks[':track_id'].$post(args, options))
}

export async function deleteLikesTracksTrackId(
  args: InferRequestType<(typeof client.likes.tracks)[':track_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.likes.tracks[':track_id'].$delete(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getMeActivities(
  args: InferRequestType<typeof client.me.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.activities.$get(args, options))
}

export async function getMeActivitiesAllOwn(
  args: InferRequestType<typeof client.me.activities.all.own.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.activities.all.own.$get(args, options))
}

export async function getMeActivitiesTracks(
  args: InferRequestType<typeof client.me.activities.tracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.activities.tracks.$get(args, options))
}

export async function getMeConnections(
  args: InferRequestType<typeof client.me.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.connections.$get(args, options))
}

export async function getMeConnectionsConnectionId(
  args: InferRequestType<(typeof client.me.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.connections[':connection_id'].$get(args, options))
}

export async function getMeFavoritesIds(
  args: InferRequestType<typeof client.me.favorites.ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.favorites.ids.$get(args, options))
}

export async function getMeFollowers(
  args: InferRequestType<typeof client.me.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.followers.$get(args, options))
}

export async function getMeFollowersFollowerId(
  args: InferRequestType<(typeof client.me.followers)[':follower_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.followers[':follower_id'].$get(args, options))
}

export async function getMeFollowings(
  args: InferRequestType<typeof client.me.followings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.followings.$get(args, options))
}

export async function getMeFollowingsTracks(
  args: InferRequestType<typeof client.me.followings.tracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.followings.tracks.$get(args, options))
}

export async function getMeFollowingsUserId(
  args: InferRequestType<(typeof client.me.followings)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.followings[':user_id'].$get(args, options))
}

export async function putMeFollowingsUserId(
  args: InferRequestType<(typeof client.me.followings)[':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.followings[':user_id'].$put(args, options))
}

export async function deleteMeFollowingsUserId(
  args: InferRequestType<(typeof client.me.followings)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.followings[':user_id'].$delete(args, options))
}

export async function getMeLikesTracks(
  args: InferRequestType<typeof client.me.likes.tracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.likes.tracks.$get(args, options))
}

export async function getMePlaylists(
  args: InferRequestType<typeof client.me.playlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.playlists.$get(args, options))
}

export async function getMePlaylistsPlaylistId(
  args: InferRequestType<(typeof client.me.playlists)[':playlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.playlists[':playlist_id'].$get(args, options))
}

export async function getMeTracks(
  args: InferRequestType<typeof client.me.tracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tracks.$get(args, options))
}

export async function getMeTracksTrackId(
  args: InferRequestType<(typeof client.me.tracks)[':track_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tracks[':track_id'].$get(args, options))
}

export async function postOauth2Token(
  args: InferRequestType<typeof client.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.token.$post(args, options))
}

export async function getPlaylists(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists.$get(args, options))
}

export async function postPlaylists(
  args: InferRequestType<typeof client.playlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists.$post(args, options))
}

export async function getPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].$get(args, options))
}

export async function putPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].$put(args, options))
}

export async function deletePlaylistsPlaylistId(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].$delete(args, options))
}

export async function getPlaylistsPlaylistIdReposters(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['reposters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].reposters.$get(args, options))
}

export async function getPlaylistsPlaylistIdTracks(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].tracks.$get(args, options))
}

export async function postRepostsPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reposts.playlists[':playlist_id'].$post(args, options))
}

export async function deleteRepostsPlaylistsPlaylistId(
  args: InferRequestType<(typeof client.reposts.playlists)[':playlist_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reposts.playlists[':playlist_id'].$delete(args, options))
}

export async function postRepostsTracksTrackId(
  args: InferRequestType<(typeof client.reposts.tracks)[':track_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reposts.tracks[':track_id'].$post(args, options))
}

export async function deleteRepostsTracksTrackId(
  args: InferRequestType<(typeof client.reposts.tracks)[':track_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reposts.tracks[':track_id'].$delete(args, options))
}

export async function getResolve(
  args: InferRequestType<typeof client.resolve.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resolve.$get(args, options))
}

export async function getTracks(
  args: InferRequestType<typeof client.tracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks.$get(args, options))
}

export async function postTracks(
  args: InferRequestType<typeof client.tracks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks.$post(args, options))
}

export async function getTracksTrackId(
  args: InferRequestType<(typeof client.tracks)[':track_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].$get(args, options))
}

export async function putTracksTrackId(
  args: InferRequestType<(typeof client.tracks)[':track_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].$put(args, options))
}

export async function deleteTracksTrackId(
  args: InferRequestType<(typeof client.tracks)[':track_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].$delete(args, options))
}

export async function getTracksTrackIdComments(
  args: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].comments.$get(args, options))
}

export async function postTracksTrackIdComments(
  args: InferRequestType<(typeof client.tracks)[':track_id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].comments.$post(args, options))
}

export async function getTracksTrackIdFavoriters(
  args: InferRequestType<(typeof client.tracks)[':track_id']['favoriters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].favoriters.$get(args, options))
}

export async function getTracksTrackIdRelated(
  args: InferRequestType<(typeof client.tracks)[':track_id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].related.$get(args, options))
}

export async function getTracksTrackIdReposters(
  args: InferRequestType<(typeof client.tracks)[':track_id']['reposters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].reposters.$get(args, options))
}

export async function getTracksTrackIdStreams(
  args: InferRequestType<(typeof client.tracks)[':track_id']['streams']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':track_id'].streams.$get(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function getUsersUserIdComments(
  args: InferRequestType<(typeof client.users)[':user_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].comments.$get(args, options))
}

export async function getUsersUserIdFavorites(
  args: InferRequestType<(typeof client.users)[':user_id']['favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].favorites.$get(args, options))
}

export async function getUsersUserIdFollowers(
  args: InferRequestType<(typeof client.users)[':user_id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].followers.$get(args, options))
}

export async function getUsersUserIdFollowings(
  args: InferRequestType<(typeof client.users)[':user_id']['followings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].followings.$get(args, options))
}

export async function getUsersUserIdFollowingsFollowingId(
  args: InferRequestType<(typeof client.users)[':user_id']['followings'][':following_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].followings[':following_id'].$get(args, options),
  )
}

export async function getUsersUserIdLikesTracks(
  args: InferRequestType<(typeof client.users)[':user_id']['likes']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].likes.tracks.$get(args, options))
}

export async function getUsersUserIdPlaylists(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].playlists.$get(args, options))
}

export async function getUsersUserIdTracks(
  args: InferRequestType<(typeof client.users)[':user_id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].tracks.$get(args, options))
}

export async function getUsersUserIdWebProfiles(
  args: InferRequestType<(typeof client.users)[':user_id']['web-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id']['web-profiles'].$get(args, options))
}
