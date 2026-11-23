import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAlbumsId(
  args: InferRequestType<(typeof client.albums)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].$get(args, options))
}

export async function getAlbums(
  args: InferRequestType<typeof client.albums.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums.$get(args, options))
}

export async function getAlbumsIdTracks(
  args: InferRequestType<(typeof client.albums)[':id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.albums[':id'].tracks.$get(args, options))
}

export async function getArtistsId(
  args: InferRequestType<(typeof client.artists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.artists[':id'].$get(args, options))
}

export async function getArtists(
  args: InferRequestType<typeof client.artists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.artists.$get(args, options))
}

export async function getArtistsIdAlbums(
  args: InferRequestType<(typeof client.artists)[':id']['albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.artists[':id'].albums.$get(args, options))
}

export async function getArtistsIdTopTracks(
  args: InferRequestType<(typeof client.artists)[':id']['top-tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.artists[':id']['top-tracks'].$get(args, options))
}

export async function getArtistsIdRelatedArtists(
  args: InferRequestType<(typeof client.artists)[':id']['related-artists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.artists[':id']['related-artists'].$get(args, options))
}

export async function getShowsId(
  args: InferRequestType<(typeof client.shows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].$get(args, options))
}

export async function getShows(
  args: InferRequestType<typeof client.shows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows.$get(args, options))
}

export async function getShowsIdEpisodes(
  args: InferRequestType<(typeof client.shows)[':id']['episodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shows[':id'].episodes.$get(args, options))
}

export async function getEpisodesId(
  args: InferRequestType<(typeof client.episodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes[':id'].$get(args, options))
}

export async function getEpisodes(
  args: InferRequestType<typeof client.episodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.episodes.$get(args, options))
}

export async function getAudiobooksId(
  args: InferRequestType<(typeof client.audiobooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiobooks[':id'].$get(args, options))
}

export async function getAudiobooks(
  args: InferRequestType<typeof client.audiobooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiobooks.$get(args, options))
}

export async function getAudiobooksIdChapters(
  args: InferRequestType<(typeof client.audiobooks)[':id']['chapters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiobooks[':id'].chapters.$get(args, options))
}

export async function getMeAudiobooks(
  args: InferRequestType<typeof client.me.audiobooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.audiobooks.$get(args, options))
}

export async function putMeAudiobooks(
  args: InferRequestType<typeof client.me.audiobooks.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.audiobooks.$put(args, options))
}

export async function deleteMeAudiobooks(
  args: InferRequestType<typeof client.me.audiobooks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.audiobooks.$delete(args, options))
}

export async function getMeAudiobooksContains(
  args: InferRequestType<typeof client.me.audiobooks.contains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.audiobooks.contains.$get(args, options))
}

export async function getChaptersId(
  args: InferRequestType<(typeof client.chapters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chapters[':id'].$get(args, options))
}

export async function getChapters(
  args: InferRequestType<typeof client.chapters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chapters.$get(args, options))
}

export async function getTracksId(
  args: InferRequestType<(typeof client.tracks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks[':id'].$get(args, options))
}

export async function getTracks(
  args: InferRequestType<typeof client.tracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tracks.$get(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
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

export async function getPlaylistsPlaylistIdTracks(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].tracks.$get(args, options))
}

export async function putPlaylistsPlaylistIdTracks(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].tracks.$put(args, options))
}

export async function postPlaylistsPlaylistIdTracks(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].tracks.$post(args, options))
}

export async function deletePlaylistsPlaylistIdTracks(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['tracks']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].tracks.$delete(args, options))
}

export async function getPlaylistsPlaylistIdItems(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].items.$get(args, options))
}

export async function putPlaylistsPlaylistIdItems(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].items.$put(args, options))
}

export async function postPlaylistsPlaylistIdItems(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].items.$post(args, options))
}

export async function deletePlaylistsPlaylistIdItems(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['items']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].items.$delete(args, options))
}

export async function getMePlaylists(
  args: InferRequestType<typeof client.me.playlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.playlists.$get(args, options))
}

export async function postMePlaylists(
  args: InferRequestType<typeof client.me.playlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.playlists.$post(args, options))
}

export async function putMeLibrary(
  args: InferRequestType<typeof client.me.library.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.library.$put(args, options))
}

export async function deleteMeLibrary(
  args: InferRequestType<typeof client.me.library.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.library.$delete(args, options))
}

export async function getMeLibraryContains(
  args: InferRequestType<typeof client.me.library.contains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.library.contains.$get(args, options))
}

export async function getMeAlbums(
  args: InferRequestType<typeof client.me.albums.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums.$get(args, options))
}

export async function putMeAlbums(
  args: InferRequestType<typeof client.me.albums.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums.$put(args, options))
}

export async function deleteMeAlbums(
  args: InferRequestType<typeof client.me.albums.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums.$delete(args, options))
}

export async function getMeAlbumsContains(
  args: InferRequestType<typeof client.me.albums.contains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.albums.contains.$get(args, options))
}

export async function getMeTracks(
  args: InferRequestType<typeof client.me.tracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tracks.$get(args, options))
}

export async function putMeTracks(
  args: InferRequestType<typeof client.me.tracks.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tracks.$put(args, options))
}

export async function deleteMeTracks(
  args: InferRequestType<typeof client.me.tracks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tracks.$delete(args, options))
}

export async function getMeTracksContains(
  args: InferRequestType<typeof client.me.tracks.contains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.tracks.contains.$get(args, options))
}

export async function getMeEpisodes(
  args: InferRequestType<typeof client.me.episodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.episodes.$get(args, options))
}

export async function putMeEpisodes(
  args: InferRequestType<typeof client.me.episodes.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.episodes.$put(args, options))
}

export async function deleteMeEpisodes(
  args: InferRequestType<typeof client.me.episodes.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.episodes.$delete(args, options))
}

export async function getMeEpisodesContains(
  args: InferRequestType<typeof client.me.episodes.contains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.episodes.contains.$get(args, options))
}

export async function getMeShows(
  args: InferRequestType<typeof client.me.shows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.shows.$get(args, options))
}

export async function putMeShows(
  args: InferRequestType<typeof client.me.shows.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.shows.$put(args, options))
}

export async function deleteMeShows(
  args: InferRequestType<typeof client.me.shows.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.shows.$delete(args, options))
}

export async function getMeShowsContains(
  args: InferRequestType<typeof client.me.shows.contains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.shows.contains.$get(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function getUsersUserIdPlaylists(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].playlists.$get(args, options))
}

export async function postUsersUserIdPlaylists(
  args: InferRequestType<(typeof client.users)[':user_id']['playlists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].playlists.$post(args, options))
}

export async function putPlaylistsPlaylistIdFollowers(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].followers.$put(args, options))
}

export async function deletePlaylistsPlaylistIdFollowers(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['followers']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].followers.$delete(args, options))
}

export async function getBrowseFeaturedPlaylists(
  args: InferRequestType<(typeof client.browse)['featured-playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browse['featured-playlists'].$get(args, options))
}

export async function getBrowseCategories(
  args: InferRequestType<typeof client.browse.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browse.categories.$get(args, options))
}

export async function getBrowseCategoriesCategoryId(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browse.categories[':category_id'].$get(args, options))
}

export async function getBrowseCategoriesCategoryIdPlaylists(
  args: InferRequestType<(typeof client.browse.categories)[':category_id']['playlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browse.categories[':category_id'].playlists.$get(args, options))
}

export async function getPlaylistsPlaylistIdImages(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].images.$get(args, options))
}

export async function putPlaylistsPlaylistIdImages(
  args: InferRequestType<(typeof client.playlists)[':playlist_id']['images']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.playlists[':playlist_id'].images.$put(args, options))
}

export async function getBrowseNewReleases(
  args: InferRequestType<(typeof client.browse)['new-releases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.browse['new-releases'].$get(args, options))
}

export async function getMeFollowing(
  args: InferRequestType<typeof client.me.following.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following.$get(args, options))
}

export async function putMeFollowing(
  args: InferRequestType<typeof client.me.following.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following.$put(args, options))
}

export async function deleteMeFollowing(
  args: InferRequestType<typeof client.me.following.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following.$delete(args, options))
}

export async function getMeFollowingContains(
  args: InferRequestType<typeof client.me.following.contains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.following.contains.$get(args, options))
}

export async function getPlaylistsPlaylistIdFollowersContains(
  args: InferRequestType<
    (typeof client.playlists)[':playlist_id']['followers']['contains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.playlists[':playlist_id'].followers.contains.$get(args, options),
  )
}

export async function getAudioFeatures(
  args: InferRequestType<(typeof client)['audio-features']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['audio-features'].$get(args, options))
}

export async function getAudioFeaturesId(
  args: InferRequestType<(typeof client)['audio-features'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['audio-features'][':id'].$get(args, options))
}

export async function getAudioAnalysisId(
  args: InferRequestType<(typeof client)['audio-analysis'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['audio-analysis'][':id'].$get(args, options))
}

export async function getRecommendations(
  args: InferRequestType<typeof client.recommendations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recommendations.$get(args, options))
}

export async function getRecommendationsAvailableGenreSeeds(options?: ClientRequestOptions) {
  return await parseResponse(
    client.recommendations['available-genre-seeds'].$get(undefined, options),
  )
}

export async function getMePlayer(
  args: InferRequestType<typeof client.me.player.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.$get(args, options))
}

export async function putMePlayer(
  args: InferRequestType<typeof client.me.player.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.$put(args, options))
}

export async function getMePlayerDevices(options?: ClientRequestOptions) {
  return await parseResponse(client.me.player.devices.$get(undefined, options))
}

export async function getMePlayerCurrentlyPlaying(
  args: InferRequestType<(typeof client.me.player)['currently-playing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player['currently-playing'].$get(args, options))
}

export async function putMePlayerPlay(
  args: InferRequestType<typeof client.me.player.play.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.play.$put(args, options))
}

export async function putMePlayerPause(
  args: InferRequestType<typeof client.me.player.pause.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.pause.$put(args, options))
}

export async function postMePlayerNext(
  args: InferRequestType<typeof client.me.player.next.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.next.$post(args, options))
}

export async function postMePlayerPrevious(
  args: InferRequestType<typeof client.me.player.previous.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.previous.$post(args, options))
}

export async function putMePlayerSeek(
  args: InferRequestType<typeof client.me.player.seek.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.seek.$put(args, options))
}

export async function putMePlayerRepeat(
  args: InferRequestType<typeof client.me.player.repeat.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.repeat.$put(args, options))
}

export async function putMePlayerVolume(
  args: InferRequestType<typeof client.me.player.volume.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.volume.$put(args, options))
}

export async function putMePlayerShuffle(
  args: InferRequestType<typeof client.me.player.shuffle.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.shuffle.$put(args, options))
}

export async function getMePlayerRecentlyPlayed(
  args: InferRequestType<(typeof client.me.player)['recently-played']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player['recently-played'].$get(args, options))
}

export async function getMePlayerQueue(options?: ClientRequestOptions) {
  return await parseResponse(client.me.player.queue.$get(undefined, options))
}

export async function postMePlayerQueue(
  args: InferRequestType<typeof client.me.player.queue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.player.queue.$post(args, options))
}

export async function getMarkets(options?: ClientRequestOptions) {
  return await parseResponse(client.markets.$get(undefined, options))
}

export async function getMeTopArtists(
  args: InferRequestType<typeof client.me.top.artists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.top.artists.$get(args, options))
}

export async function getMeTopTracks(
  args: InferRequestType<typeof client.me.top.tracks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.top.tracks.$get(args, options))
}
