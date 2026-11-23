import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAlbumsCommentsCommentIdRoute,
  deleteApiAlbumsIdReviewsReviewIdRoute,
  deleteApiAlbumsIdRoute,
  deleteApiArtistsCommentsCommentIdRoute,
  deleteApiArtistsIdRoute,
  deleteApiCommentsEntryTypeCommentsCommentIdRoute,
  deleteApiDiscussionsCommentsCommentIdRoute,
  deleteApiDiscussionsTopicsTopicIdRoute,
  deleteApiReleaseEventSeriesIdRoute,
  deleteApiReleaseEventsIdRoute,
  deleteApiSongListsCommentsCommentIdRoute,
  deleteApiSongListsIdRoute,
  deleteApiSongsCommentsCommentIdRoute,
  deleteApiSongsIdRoute,
  deleteApiTagsCommentsCommentIdRoute,
  deleteApiTagsIdRoute,
  deleteApiUsersCurrentFollowedTagsTagIdRoute,
  deleteApiUsersIdMessagesRoute,
  deleteApiUsersProfileCommentsCommentIdRoute,
  deleteApiVenuesIdRoute,
  getApiActivityEntriesRoute,
  getApiAlbumsIdCommentsRoute,
  getApiAlbumsIdReviewsRoute,
  getApiAlbumsIdRoute,
  getApiAlbumsIdTracksFieldsRoute,
  getApiAlbumsIdTracksRoute,
  getApiAlbumsIdUserCollectionsRoute,
  getApiAlbumsNamesRoute,
  getApiAlbumsNewRoute,
  getApiAlbumsRoute,
  getApiAlbumsTopRoute,
  getApiArtistsIdCommentsRoute,
  getApiArtistsIdRoute,
  getApiArtistsNamesRoute,
  getApiArtistsRoute,
  getApiCommentsEntryTypeCommentsRoute,
  getApiCommentsRoute,
  getApiDiscussionsFoldersFolderIdTopicsRoute,
  getApiDiscussionsFoldersRoute,
  getApiDiscussionsTopicsRoute,
  getApiDiscussionsTopicsTopicIdRoute,
  getApiEntriesNamesRoute,
  getApiEntriesRoute,
  getApiEntryTypesEntryTypeSubTypeTagRoute,
  getApiPvsForSongsRoute,
  getApiReleaseEventSeriesIdForEditRoute,
  getApiReleaseEventSeriesIdRoute,
  getApiReleaseEventSeriesRoute,
  getApiReleaseEventsEventIdAlbumsRoute,
  getApiReleaseEventsEventIdPublishedSongsRoute,
  getApiReleaseEventsIdRoute,
  getApiReleaseEventsNamesRoute,
  getApiReleaseEventsRoute,
  getApiResourcesCultureCodeRoute,
  getApiSongListsFeaturedNamesRoute,
  getApiSongListsFeaturedRoute,
  getApiSongListsListIdCommentsRoute,
  getApiSongListsListIdSongsRoute,
  getApiSongsByPvRoute,
  getApiSongsHighlightedRoute,
  getApiSongsIdCommentsRoute,
  getApiSongsIdDerivedRoute,
  getApiSongsIdRatingsRoute,
  getApiSongsIdRelatedRoute,
  getApiSongsIdRoute,
  getApiSongsLyricsLyricsIdRoute,
  getApiSongsNamesRoute,
  getApiSongsRoute,
  getApiSongsTopRatedRoute,
  getApiTagsByNameNameRoute,
  getApiTagsCategoryNamesRoute,
  getApiTagsIdRoute,
  getApiTagsNamesRoute,
  getApiTagsRoute,
  getApiTagsTagIdChildrenRoute,
  getApiTagsTagIdCommentsRoute,
  getApiTagsTopRoute,
  getApiUsersCurrentAlbumCollectionStatusesAlbumIdRoute,
  getApiUsersCurrentFollowedArtistsArtistIdRoute,
  getApiUsersCurrentRatedSongsSongIdRoute,
  getApiUsersCurrentRoute,
  getApiUsersIdAlbumCollectionStatusesAlbumIdRoute,
  getApiUsersIdAlbumsRoute,
  getApiUsersIdEventsRoute,
  getApiUsersIdFollowedArtistsArtistIdRoute,
  getApiUsersIdFollowedArtistsRoute,
  getApiUsersIdMessagesRoute,
  getApiUsersIdProfileCommentsRoute,
  getApiUsersIdRatedSongsRoute,
  getApiUsersIdRatedSongsSongIdRoute,
  getApiUsersIdRoute,
  getApiUsersIdSongListsRoute,
  getApiUsersMessagesMessageIdRoute,
  getApiUsersNamesRoute,
  getApiUsersRoute,
  getApiVenuesRoute,
  postApiAlbumsCommentsCommentIdRoute,
  postApiAlbumsIdCommentsRoute,
  postApiAlbumsIdReviewsRoute,
  postApiArtistsCommentsCommentIdRoute,
  postApiArtistsIdCommentsRoute,
  postApiCommentsEntryTypeCommentsCommentIdRoute,
  postApiCommentsEntryTypeCommentsRoute,
  postApiDiscussionsCommentsCommentIdRoute,
  postApiDiscussionsFoldersFolderIdTopicsRoute,
  postApiDiscussionsFoldersRoute,
  postApiDiscussionsTopicsTopicIdCommentsRoute,
  postApiDiscussionsTopicsTopicIdRoute,
  postApiReleaseEventsEventIdReportsRoute,
  postApiSongListsCommentsCommentIdRoute,
  postApiSongListsListIdCommentsRoute,
  postApiSongListsRoute,
  postApiSongsCommentsCommentIdRoute,
  postApiSongsIdCommentsRoute,
  postApiSongsIdRatingsRoute,
  postApiTagsCommentsCommentIdRoute,
  postApiTagsRoute,
  postApiTagsTagIdCommentsRoute,
  postApiTagsTagIdReportsRoute,
  postApiUsersCurrentAlbumsAlbumIdRoute,
  postApiUsersCurrentFollowedTagsTagIdRoute,
  postApiUsersCurrentRefreshEntryEditRoute,
  postApiUsersCurrentSongTagsSongIdRoute,
  postApiUsersIdMessagesRoute,
  postApiUsersIdProfileCommentsRoute,
  postApiUsersIdReportsRoute,
  postApiUsersIdSettingsSettingNameRoute,
  postApiUsersProfileCommentsCommentIdRoute,
  postApiVenuesIdReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiActivityEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAlbumsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAlbumsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAlbumsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAlbumsIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAlbumsIdReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdTracksFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAlbumsIdUserCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiArtistsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiArtistsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArtistsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiArtistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArtistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiArtistsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiArtistsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommentsEntryTypeCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCommentsEntryTypeCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCommentsEntryTypeCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCommentsEntryTypeCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDiscussionsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDiscussionsFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDiscussionsFoldersFolderIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsFoldersFolderIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDiscussionsTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDiscussionsTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDiscussionsTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDiscussionsTopicsTopicIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntriesNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEntryTypesEntryTypeSubTypeTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvsForSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReleaseEventSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventSeriesIdForEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsEventIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsEventIdPublishedSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReleaseEventsEventIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReleaseEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiResourcesCultureCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSongListsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongListsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongListsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongListsFeaturedNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSongListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongListsListIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongListsListIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongListsListIdSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsByPvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSongsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsHighlightedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsLyricsLyricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsTopRatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSongsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongsIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsCategoryNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTagsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTagsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsTagIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsTagIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTagsTagIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTagsTagIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersCurrentAlbumCollectionStatusesAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersCurrentAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersCurrentFollowedArtistsArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersCurrentFollowedTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersCurrentFollowedTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersCurrentRatedSongsSongIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersCurrentRefreshEntryEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersCurrentSongTagsSongIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersProfileCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersProfileCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdAlbumCollectionStatusesAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdFollowedArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdFollowedArtistsArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdProfileCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersIdProfileCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRatedSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRatedSongsSongIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersIdSettingsSettingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdSongListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVenuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVenuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVenuesIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
