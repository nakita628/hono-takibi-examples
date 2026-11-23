import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiActivityEntries(
  args: InferRequestType<typeof client.api.activityEntries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.activityEntries.$get(args, options))
}

export async function getApiAlbums(
  args: InferRequestType<typeof client.api.albums.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums.$get(args, options))
}

export async function postApiAlbumsCommentsCommentId(
  args: InferRequestType<(typeof client.api.albums.comments)[':commentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums.comments[':commentId'].$post(args, options))
}

export async function deleteApiAlbumsCommentsCommentId(
  args: InferRequestType<(typeof client.api.albums.comments)[':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums.comments[':commentId'].$delete(args, options))
}

export async function getApiAlbumsNames(
  args: InferRequestType<typeof client.api.albums.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums.names.$get(args, options))
}

export async function getApiAlbumsNew(
  args: InferRequestType<typeof client.api.albums.new.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums.new.$get(args, options))
}

export async function getApiAlbumsTop(
  args: InferRequestType<typeof client.api.albums.top.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums.top.$get(args, options))
}

export async function getApiAlbumsId(
  args: InferRequestType<(typeof client.api.albums)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].$get(args, options))
}

export async function deleteApiAlbumsId(
  args: InferRequestType<(typeof client.api.albums)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].$delete(args, options))
}

export async function getApiAlbumsIdComments(
  args: InferRequestType<(typeof client.api.albums)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].comments.$get(args, options))
}

export async function postApiAlbumsIdComments(
  args: InferRequestType<(typeof client.api.albums)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].comments.$post(args, options))
}

export async function getApiAlbumsIdReviews(
  args: InferRequestType<(typeof client.api.albums)[':id']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].reviews.$get(args, options))
}

export async function postApiAlbumsIdReviews(
  args: InferRequestType<(typeof client.api.albums)[':id']['reviews']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].reviews.$post(args, options))
}

export async function deleteApiAlbumsIdReviewsReviewId(
  args: InferRequestType<(typeof client.api.albums)[':id']['reviews'][':reviewId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].reviews[':reviewId'].$delete(args, options))
}

export async function getApiAlbumsIdTracks(
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].tracks.$get(args, options))
}

export async function getApiAlbumsIdTracksFields(
  args: InferRequestType<(typeof client.api.albums)[':id']['tracks']['fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id'].tracks.fields.$get(args, options))
}

export async function getApiAlbumsIdUserCollections(
  args: InferRequestType<(typeof client.api.albums)[':id']['user-collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.albums[':id']['user-collections'].$get(args, options))
}

export async function getApiArtists(
  args: InferRequestType<typeof client.api.artists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.artists.$get(args, options))
}

export async function postApiArtistsCommentsCommentId(
  args: InferRequestType<(typeof client.api.artists.comments)[':commentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.artists.comments[':commentId'].$post(args, options))
}

export async function deleteApiArtistsCommentsCommentId(
  args: InferRequestType<(typeof client.api.artists.comments)[':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.artists.comments[':commentId'].$delete(args, options))
}

export async function getApiArtistsNames(
  args: InferRequestType<typeof client.api.artists.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.artists.names.$get(args, options))
}

export async function getApiArtistsId(
  args: InferRequestType<(typeof client.api.artists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.artists[':id'].$get(args, options))
}

export async function deleteApiArtistsId(
  args: InferRequestType<(typeof client.api.artists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.artists[':id'].$delete(args, options))
}

export async function getApiArtistsIdComments(
  args: InferRequestType<(typeof client.api.artists)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.artists[':id'].comments.$get(args, options))
}

export async function postApiArtistsIdComments(
  args: InferRequestType<(typeof client.api.artists)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.artists[':id'].comments.$post(args, options))
}

export async function getApiComments(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments.$get(args, options))
}

export async function getApiCommentsEntryTypeComments(
  args: InferRequestType<(typeof client.api.comments)[':entryType-comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments[':entryType-comments'].$get(args, options))
}

export async function postApiCommentsEntryTypeComments(
  args: InferRequestType<(typeof client.api.comments)[':entryType-comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments[':entryType-comments'].$post(args, options))
}

export async function postApiCommentsEntryTypeCommentsCommentId(
  args: InferRequestType<
    (typeof client.api.comments)[':entryType-comments'][':commentId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.comments[':entryType-comments'][':commentId'].$post(args, options),
  )
}

export async function deleteApiCommentsEntryTypeCommentsCommentId(
  args: InferRequestType<
    (typeof client.api.comments)[':entryType-comments'][':commentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.comments[':entryType-comments'][':commentId'].$delete(args, options),
  )
}

export async function postApiDiscussionsCommentsCommentId(
  args: InferRequestType<(typeof client.api.discussions.comments)[':commentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.comments[':commentId'].$post(args, options))
}

export async function deleteApiDiscussionsCommentsCommentId(
  args: InferRequestType<(typeof client.api.discussions.comments)[':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.comments[':commentId'].$delete(args, options))
}

export async function getApiDiscussionsFolders(
  args: InferRequestType<typeof client.api.discussions.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.folders.$get(args, options))
}

export async function postApiDiscussionsFolders(
  args: InferRequestType<typeof client.api.discussions.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.folders.$post(args, options))
}

export async function getApiDiscussionsFoldersFolderIdTopics(
  args: InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.folders[':folderId'].topics.$get(args, options))
}

export async function postApiDiscussionsFoldersFolderIdTopics(
  args: InferRequestType<(typeof client.api.discussions.folders)[':folderId']['topics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.discussions.folders[':folderId'].topics.$post(args, options),
  )
}

export async function getApiDiscussionsTopics(
  args: InferRequestType<typeof client.api.discussions.topics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.topics.$get(args, options))
}

export async function getApiDiscussionsTopicsTopicId(
  args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.topics[':topicId'].$get(args, options))
}

export async function postApiDiscussionsTopicsTopicId(
  args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.topics[':topicId'].$post(args, options))
}

export async function deleteApiDiscussionsTopicsTopicId(
  args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.discussions.topics[':topicId'].$delete(args, options))
}

export async function postApiDiscussionsTopicsTopicIdComments(
  args: InferRequestType<(typeof client.api.discussions.topics)[':topicId']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.discussions.topics[':topicId'].comments.$post(args, options),
  )
}

export async function getApiEntries(
  args: InferRequestType<typeof client.api.entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entries.$get(args, options))
}

export async function getApiEntriesNames(
  args: InferRequestType<typeof client.api.entries.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.entries.names.$get(args, options))
}

export async function getApiEntryTypesEntryTypeSubTypeTag(
  args: InferRequestType<
    (typeof client.api)['entry-types'][':entryType'][':subType']['tag']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['entry-types'][':entryType'][':subType'].tag.$get(args, options),
  )
}

export async function getApiPvsForSongs(
  args: InferRequestType<(typeof client.api.pvs)['for-songs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pvs['for-songs'].$get(args, options))
}

export async function getApiReleaseEventSeries(
  args: InferRequestType<typeof client.api.releaseEventSeries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEventSeries.$get(args, options))
}

export async function getApiReleaseEventSeriesId(
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEventSeries[':id'].$get(args, options))
}

export async function deleteApiReleaseEventSeriesId(
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEventSeries[':id'].$delete(args, options))
}

export async function getApiReleaseEventSeriesIdForEdit(
  args: InferRequestType<(typeof client.api.releaseEventSeries)[':id']['for-edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEventSeries[':id']['for-edit'].$get(args, options))
}

export async function getApiReleaseEvents(
  args: InferRequestType<typeof client.api.releaseEvents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEvents.$get(args, options))
}

export async function getApiReleaseEventsNames(
  args: InferRequestType<typeof client.api.releaseEvents.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEvents.names.$get(args, options))
}

export async function getApiReleaseEventsEventIdAlbums(
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEvents[':eventId'].albums.$get(args, options))
}

export async function getApiReleaseEventsEventIdPublishedSongs(
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['published-songs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.releaseEvents[':eventId']['published-songs'].$get(args, options),
  )
}

export async function postApiReleaseEventsEventIdReports(
  args: InferRequestType<(typeof client.api.releaseEvents)[':eventId']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEvents[':eventId'].reports.$post(args, options))
}

export async function getApiReleaseEventsId(
  args: InferRequestType<(typeof client.api.releaseEvents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEvents[':id'].$get(args, options))
}

export async function deleteApiReleaseEventsId(
  args: InferRequestType<(typeof client.api.releaseEvents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.releaseEvents[':id'].$delete(args, options))
}

export async function getApiResourcesCultureCode(
  args: InferRequestType<(typeof client.api.resources)[':cultureCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.resources[':cultureCode'].$get(args, options))
}

export async function postApiSongLists(
  args: InferRequestType<typeof client.api.songLists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists.$post(args, options))
}

export async function postApiSongListsCommentsCommentId(
  args: InferRequestType<(typeof client.api.songLists.comments)[':commentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists.comments[':commentId'].$post(args, options))
}

export async function deleteApiSongListsCommentsCommentId(
  args: InferRequestType<(typeof client.api.songLists.comments)[':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists.comments[':commentId'].$delete(args, options))
}

export async function getApiSongListsFeatured(
  args: InferRequestType<typeof client.api.songLists.featured.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists.featured.$get(args, options))
}

export async function getApiSongListsFeaturedNames(
  args: InferRequestType<typeof client.api.songLists.featured.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists.featured.names.$get(args, options))
}

export async function deleteApiSongListsId(
  args: InferRequestType<(typeof client.api.songLists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists[':id'].$delete(args, options))
}

export async function getApiSongListsListIdComments(
  args: InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists[':listId'].comments.$get(args, options))
}

export async function postApiSongListsListIdComments(
  args: InferRequestType<(typeof client.api.songLists)[':listId']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists[':listId'].comments.$post(args, options))
}

export async function getApiSongListsListIdSongs(
  args: InferRequestType<(typeof client.api.songLists)[':listId']['songs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songLists[':listId'].songs.$get(args, options))
}

export async function getApiSongs(
  args: InferRequestType<typeof client.api.songs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs.$get(args, options))
}

export async function getApiSongsByPv(
  args: InferRequestType<typeof client.api.songs.byPv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs.byPv.$get(args, options))
}

export async function postApiSongsCommentsCommentId(
  args: InferRequestType<(typeof client.api.songs.comments)[':commentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs.comments[':commentId'].$post(args, options))
}

export async function deleteApiSongsCommentsCommentId(
  args: InferRequestType<(typeof client.api.songs.comments)[':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs.comments[':commentId'].$delete(args, options))
}

export async function getApiSongsHighlighted(
  args: InferRequestType<typeof client.api.songs.highlighted.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs.highlighted.$get(args, options))
}

export async function getApiSongsLyricsLyricsId(
  args: InferRequestType<(typeof client.api.songs.lyrics)[':lyricsId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs.lyrics[':lyricsId'].$get(args, options))
}

export async function getApiSongsNames(
  args: InferRequestType<typeof client.api.songs.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs.names.$get(args, options))
}

export async function getApiSongsTopRated(
  args: InferRequestType<(typeof client.api.songs)['top-rated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs['top-rated'].$get(args, options))
}

export async function getApiSongsId(
  args: InferRequestType<(typeof client.api.songs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs[':id'].$get(args, options))
}

export async function deleteApiSongsId(
  args: InferRequestType<(typeof client.api.songs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs[':id'].$delete(args, options))
}

export async function getApiSongsIdComments(
  args: InferRequestType<(typeof client.api.songs)[':id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs[':id'].comments.$get(args, options))
}

export async function postApiSongsIdComments(
  args: InferRequestType<(typeof client.api.songs)[':id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs[':id'].comments.$post(args, options))
}

export async function getApiSongsIdDerived(
  args: InferRequestType<(typeof client.api.songs)[':id']['derived']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs[':id'].derived.$get(args, options))
}

export async function getApiSongsIdRatings(
  args: InferRequestType<(typeof client.api.songs)[':id']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs[':id'].ratings.$get(args, options))
}

export async function postApiSongsIdRatings(
  args: InferRequestType<(typeof client.api.songs)[':id']['ratings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs[':id'].ratings.$post(args, options))
}

export async function getApiSongsIdRelated(
  args: InferRequestType<(typeof client.api.songs)[':id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.songs[':id'].related.$get(args, options))
}

export async function getApiTags(
  args: InferRequestType<typeof client.api.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.$get(args, options))
}

export async function postApiTags(
  args: InferRequestType<typeof client.api.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.$post(args, options))
}

export async function getApiTagsByNameName(
  args: InferRequestType<(typeof client.api.tags.byName)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.byName[':name'].$get(args, options))
}

export async function getApiTagsCategoryNames(
  args: InferRequestType<typeof client.api.tags.categoryNames.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.categoryNames.$get(args, options))
}

export async function postApiTagsCommentsCommentId(
  args: InferRequestType<(typeof client.api.tags.comments)[':commentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.comments[':commentId'].$post(args, options))
}

export async function deleteApiTagsCommentsCommentId(
  args: InferRequestType<(typeof client.api.tags.comments)[':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.comments[':commentId'].$delete(args, options))
}

export async function getApiTagsNames(
  args: InferRequestType<typeof client.api.tags.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.names.$get(args, options))
}

export async function getApiTagsTop(
  args: InferRequestType<typeof client.api.tags.top.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags.top.$get(args, options))
}

export async function getApiTagsId(
  args: InferRequestType<(typeof client.api.tags)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags[':id'].$get(args, options))
}

export async function deleteApiTagsId(
  args: InferRequestType<(typeof client.api.tags)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags[':id'].$delete(args, options))
}

export async function getApiTagsTagIdChildren(
  args: InferRequestType<(typeof client.api.tags)[':tagId']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags[':tagId'].children.$get(args, options))
}

export async function getApiTagsTagIdComments(
  args: InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags[':tagId'].comments.$get(args, options))
}

export async function postApiTagsTagIdComments(
  args: InferRequestType<(typeof client.api.tags)[':tagId']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags[':tagId'].comments.$post(args, options))
}

export async function postApiTagsTagIdReports(
  args: InferRequestType<(typeof client.api.tags)[':tagId']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tags[':tagId'].reports.$post(args, options))
}

export async function getApiUsers(
  args: InferRequestType<typeof client.api.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.$get(args, options))
}

export async function getApiUsersCurrent(
  args: InferRequestType<typeof client.api.users.current.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.current.$get(args, options))
}

export async function getApiUsersCurrentAlbumCollectionStatusesAlbumId(
  args: InferRequestType<
    (typeof client.api.users.current)['album-collection-statuses'][':albumId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users.current['album-collection-statuses'][':albumId'].$get(args, options),
  )
}

export async function postApiUsersCurrentAlbumsAlbumId(
  args: InferRequestType<(typeof client.api.users.current.albums)[':albumId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.current.albums[':albumId'].$post(args, options))
}

export async function getApiUsersCurrentFollowedArtistsArtistId(
  args: InferRequestType<(typeof client.api.users.current.followedArtists)[':artistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users.current.followedArtists[':artistId'].$get(args, options),
  )
}

export async function postApiUsersCurrentFollowedTagsTagId(
  args: InferRequestType<(typeof client.api.users.current.followedTags)[':tagId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.current.followedTags[':tagId'].$post(args, options))
}

export async function deleteApiUsersCurrentFollowedTagsTagId(
  args: InferRequestType<(typeof client.api.users.current.followedTags)[':tagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.current.followedTags[':tagId'].$delete(args, options))
}

export async function getApiUsersCurrentRatedSongsSongId(
  args: InferRequestType<(typeof client.api.users.current.ratedSongs)[':songId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.current.ratedSongs[':songId'].$get(args, options))
}

export async function postApiUsersCurrentRefreshEntryEdit(
  args: InferRequestType<typeof client.api.users.current.refreshEntryEdit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.current.refreshEntryEdit.$post(args, options))
}

export async function postApiUsersCurrentSongTagsSongId(
  args: InferRequestType<(typeof client.api.users.current.songTags)[':songId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.current.songTags[':songId'].$post(args, options))
}

export async function getApiUsersMessagesMessageId(
  args: InferRequestType<(typeof client.api.users.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.messages[':messageId'].$get(args, options))
}

export async function getApiUsersNames(
  args: InferRequestType<typeof client.api.users.names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.names.$get(args, options))
}

export async function postApiUsersProfileCommentsCommentId(
  args: InferRequestType<(typeof client.api.users.profileComments)[':commentId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.profileComments[':commentId'].$post(args, options))
}

export async function deleteApiUsersProfileCommentsCommentId(
  args: InferRequestType<(typeof client.api.users.profileComments)[':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.profileComments[':commentId'].$delete(args, options))
}

export async function getApiUsersId(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].$get(args, options))
}

export async function getApiUsersIdAlbumCollectionStatusesAlbumId(
  args: InferRequestType<
    (typeof client.api.users)[':id']['album-collection-statuses'][':albumId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users[':id']['album-collection-statuses'][':albumId'].$get(args, options),
  )
}

export async function getApiUsersIdAlbums(
  args: InferRequestType<(typeof client.api.users)[':id']['albums']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].albums.$get(args, options))
}

export async function getApiUsersIdEvents(
  args: InferRequestType<(typeof client.api.users)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].events.$get(args, options))
}

export async function getApiUsersIdFollowedArtists(
  args: InferRequestType<(typeof client.api.users)[':id']['followedArtists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].followedArtists.$get(args, options))
}

export async function getApiUsersIdFollowedArtistsArtistId(
  args: InferRequestType<(typeof client.api.users)[':id']['followedArtists'][':artistId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.users[':id'].followedArtists[':artistId'].$get(args, options),
  )
}

export async function getApiUsersIdMessages(
  args: InferRequestType<(typeof client.api.users)[':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].messages.$get(args, options))
}

export async function postApiUsersIdMessages(
  args: InferRequestType<(typeof client.api.users)[':id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].messages.$post(args, options))
}

export async function deleteApiUsersIdMessages(
  args: InferRequestType<(typeof client.api.users)[':id']['messages']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].messages.$delete(args, options))
}

export async function getApiUsersIdProfileComments(
  args: InferRequestType<(typeof client.api.users)[':id']['profileComments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].profileComments.$get(args, options))
}

export async function postApiUsersIdProfileComments(
  args: InferRequestType<(typeof client.api.users)[':id']['profileComments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].profileComments.$post(args, options))
}

export async function getApiUsersIdRatedSongs(
  args: InferRequestType<(typeof client.api.users)[':id']['ratedSongs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].ratedSongs.$get(args, options))
}

export async function getApiUsersIdRatedSongsSongId(
  args: InferRequestType<(typeof client.api.users)[':id']['ratedSongs'][':songId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].ratedSongs[':songId'].$get(args, options))
}

export async function postApiUsersIdReports(
  args: InferRequestType<(typeof client.api.users)[':id']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].reports.$post(args, options))
}

export async function postApiUsersIdSettingsSettingName(
  args: InferRequestType<(typeof client.api.users)[':id']['settings'][':settingName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].settings[':settingName'].$post(args, options))
}

export async function getApiUsersIdSongLists(
  args: InferRequestType<(typeof client.api.users)[':id']['songLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].songLists.$get(args, options))
}

export async function getApiVenues(
  args: InferRequestType<typeof client.api.venues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.venues.$get(args, options))
}

export async function deleteApiVenuesId(
  args: InferRequestType<(typeof client.api.venues)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.venues[':id'].$delete(args, options))
}

export async function postApiVenuesIdReports(
  args: InferRequestType<(typeof client.api.venues)[':id']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.venues[':id'].reports.$post(args, options))
}
