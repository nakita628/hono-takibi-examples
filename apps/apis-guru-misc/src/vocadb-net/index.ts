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
} from './routes'
import {
  deleteApiAlbumsCommentsCommentIdRouteHandler,
  deleteApiAlbumsIdReviewsReviewIdRouteHandler,
  deleteApiAlbumsIdRouteHandler,
  deleteApiArtistsCommentsCommentIdRouteHandler,
  deleteApiArtistsIdRouteHandler,
  deleteApiCommentsEntryTypeCommentsCommentIdRouteHandler,
  deleteApiDiscussionsCommentsCommentIdRouteHandler,
  deleteApiDiscussionsTopicsTopicIdRouteHandler,
  deleteApiReleaseEventSeriesIdRouteHandler,
  deleteApiReleaseEventsIdRouteHandler,
  deleteApiSongListsCommentsCommentIdRouteHandler,
  deleteApiSongListsIdRouteHandler,
  deleteApiSongsCommentsCommentIdRouteHandler,
  deleteApiSongsIdRouteHandler,
  deleteApiTagsCommentsCommentIdRouteHandler,
  deleteApiTagsIdRouteHandler,
  deleteApiUsersCurrentFollowedTagsTagIdRouteHandler,
  deleteApiUsersIdMessagesRouteHandler,
  deleteApiUsersProfileCommentsCommentIdRouteHandler,
  deleteApiVenuesIdRouteHandler,
  getApiActivityEntriesRouteHandler,
  getApiAlbumsIdCommentsRouteHandler,
  getApiAlbumsIdReviewsRouteHandler,
  getApiAlbumsIdRouteHandler,
  getApiAlbumsIdTracksFieldsRouteHandler,
  getApiAlbumsIdTracksRouteHandler,
  getApiAlbumsIdUserCollectionsRouteHandler,
  getApiAlbumsNamesRouteHandler,
  getApiAlbumsNewRouteHandler,
  getApiAlbumsRouteHandler,
  getApiAlbumsTopRouteHandler,
  getApiArtistsIdCommentsRouteHandler,
  getApiArtistsIdRouteHandler,
  getApiArtistsNamesRouteHandler,
  getApiArtistsRouteHandler,
  getApiCommentsEntryTypeCommentsRouteHandler,
  getApiCommentsRouteHandler,
  getApiDiscussionsFoldersFolderIdTopicsRouteHandler,
  getApiDiscussionsFoldersRouteHandler,
  getApiDiscussionsTopicsRouteHandler,
  getApiDiscussionsTopicsTopicIdRouteHandler,
  getApiEntriesNamesRouteHandler,
  getApiEntriesRouteHandler,
  getApiEntryTypesEntryTypeSubTypeTagRouteHandler,
  getApiPvsForSongsRouteHandler,
  getApiReleaseEventSeriesIdForEditRouteHandler,
  getApiReleaseEventSeriesIdRouteHandler,
  getApiReleaseEventSeriesRouteHandler,
  getApiReleaseEventsEventIdAlbumsRouteHandler,
  getApiReleaseEventsEventIdPublishedSongsRouteHandler,
  getApiReleaseEventsIdRouteHandler,
  getApiReleaseEventsNamesRouteHandler,
  getApiReleaseEventsRouteHandler,
  getApiResourcesCultureCodeRouteHandler,
  getApiSongListsFeaturedNamesRouteHandler,
  getApiSongListsFeaturedRouteHandler,
  getApiSongListsListIdCommentsRouteHandler,
  getApiSongListsListIdSongsRouteHandler,
  getApiSongsByPvRouteHandler,
  getApiSongsHighlightedRouteHandler,
  getApiSongsIdCommentsRouteHandler,
  getApiSongsIdDerivedRouteHandler,
  getApiSongsIdRatingsRouteHandler,
  getApiSongsIdRelatedRouteHandler,
  getApiSongsIdRouteHandler,
  getApiSongsLyricsLyricsIdRouteHandler,
  getApiSongsNamesRouteHandler,
  getApiSongsRouteHandler,
  getApiSongsTopRatedRouteHandler,
  getApiTagsByNameNameRouteHandler,
  getApiTagsCategoryNamesRouteHandler,
  getApiTagsIdRouteHandler,
  getApiTagsNamesRouteHandler,
  getApiTagsRouteHandler,
  getApiTagsTagIdChildrenRouteHandler,
  getApiTagsTagIdCommentsRouteHandler,
  getApiTagsTopRouteHandler,
  getApiUsersCurrentAlbumCollectionStatusesAlbumIdRouteHandler,
  getApiUsersCurrentFollowedArtistsArtistIdRouteHandler,
  getApiUsersCurrentRatedSongsSongIdRouteHandler,
  getApiUsersCurrentRouteHandler,
  getApiUsersIdAlbumCollectionStatusesAlbumIdRouteHandler,
  getApiUsersIdAlbumsRouteHandler,
  getApiUsersIdEventsRouteHandler,
  getApiUsersIdFollowedArtistsArtistIdRouteHandler,
  getApiUsersIdFollowedArtistsRouteHandler,
  getApiUsersIdMessagesRouteHandler,
  getApiUsersIdProfileCommentsRouteHandler,
  getApiUsersIdRatedSongsRouteHandler,
  getApiUsersIdRatedSongsSongIdRouteHandler,
  getApiUsersIdRouteHandler,
  getApiUsersIdSongListsRouteHandler,
  getApiUsersMessagesMessageIdRouteHandler,
  getApiUsersNamesRouteHandler,
  getApiUsersRouteHandler,
  getApiVenuesRouteHandler,
  postApiAlbumsCommentsCommentIdRouteHandler,
  postApiAlbumsIdCommentsRouteHandler,
  postApiAlbumsIdReviewsRouteHandler,
  postApiArtistsCommentsCommentIdRouteHandler,
  postApiArtistsIdCommentsRouteHandler,
  postApiCommentsEntryTypeCommentsCommentIdRouteHandler,
  postApiCommentsEntryTypeCommentsRouteHandler,
  postApiDiscussionsCommentsCommentIdRouteHandler,
  postApiDiscussionsFoldersFolderIdTopicsRouteHandler,
  postApiDiscussionsFoldersRouteHandler,
  postApiDiscussionsTopicsTopicIdCommentsRouteHandler,
  postApiDiscussionsTopicsTopicIdRouteHandler,
  postApiReleaseEventsEventIdReportsRouteHandler,
  postApiSongListsCommentsCommentIdRouteHandler,
  postApiSongListsListIdCommentsRouteHandler,
  postApiSongListsRouteHandler,
  postApiSongsCommentsCommentIdRouteHandler,
  postApiSongsIdCommentsRouteHandler,
  postApiSongsIdRatingsRouteHandler,
  postApiTagsCommentsCommentIdRouteHandler,
  postApiTagsRouteHandler,
  postApiTagsTagIdCommentsRouteHandler,
  postApiTagsTagIdReportsRouteHandler,
  postApiUsersCurrentAlbumsAlbumIdRouteHandler,
  postApiUsersCurrentFollowedTagsTagIdRouteHandler,
  postApiUsersCurrentRefreshEntryEditRouteHandler,
  postApiUsersCurrentSongTagsSongIdRouteHandler,
  postApiUsersIdMessagesRouteHandler,
  postApiUsersIdProfileCommentsRouteHandler,
  postApiUsersIdReportsRouteHandler,
  postApiUsersIdSettingsSettingNameRouteHandler,
  postApiUsersProfileCommentsCommentIdRouteHandler,
  postApiVenuesIdReportsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiActivityEntriesRoute, getApiActivityEntriesRouteHandler)
  .openapi(getApiAlbumsRoute, getApiAlbumsRouteHandler)
  .openapi(deleteApiAlbumsCommentsCommentIdRoute, deleteApiAlbumsCommentsCommentIdRouteHandler)
  .openapi(postApiAlbumsCommentsCommentIdRoute, postApiAlbumsCommentsCommentIdRouteHandler)
  .openapi(getApiAlbumsNamesRoute, getApiAlbumsNamesRouteHandler)
  .openapi(getApiAlbumsNewRoute, getApiAlbumsNewRouteHandler)
  .openapi(getApiAlbumsTopRoute, getApiAlbumsTopRouteHandler)
  .openapi(deleteApiAlbumsIdRoute, deleteApiAlbumsIdRouteHandler)
  .openapi(getApiAlbumsIdRoute, getApiAlbumsIdRouteHandler)
  .openapi(getApiAlbumsIdCommentsRoute, getApiAlbumsIdCommentsRouteHandler)
  .openapi(postApiAlbumsIdCommentsRoute, postApiAlbumsIdCommentsRouteHandler)
  .openapi(getApiAlbumsIdReviewsRoute, getApiAlbumsIdReviewsRouteHandler)
  .openapi(postApiAlbumsIdReviewsRoute, postApiAlbumsIdReviewsRouteHandler)
  .openapi(deleteApiAlbumsIdReviewsReviewIdRoute, deleteApiAlbumsIdReviewsReviewIdRouteHandler)
  .openapi(getApiAlbumsIdTracksRoute, getApiAlbumsIdTracksRouteHandler)
  .openapi(getApiAlbumsIdTracksFieldsRoute, getApiAlbumsIdTracksFieldsRouteHandler)
  .openapi(getApiAlbumsIdUserCollectionsRoute, getApiAlbumsIdUserCollectionsRouteHandler)
  .openapi(getApiArtistsRoute, getApiArtistsRouteHandler)
  .openapi(deleteApiArtistsCommentsCommentIdRoute, deleteApiArtistsCommentsCommentIdRouteHandler)
  .openapi(postApiArtistsCommentsCommentIdRoute, postApiArtistsCommentsCommentIdRouteHandler)
  .openapi(getApiArtistsNamesRoute, getApiArtistsNamesRouteHandler)
  .openapi(deleteApiArtistsIdRoute, deleteApiArtistsIdRouteHandler)
  .openapi(getApiArtistsIdRoute, getApiArtistsIdRouteHandler)
  .openapi(getApiArtistsIdCommentsRoute, getApiArtistsIdCommentsRouteHandler)
  .openapi(postApiArtistsIdCommentsRoute, postApiArtistsIdCommentsRouteHandler)
  .openapi(getApiCommentsRoute, getApiCommentsRouteHandler)
  .openapi(getApiCommentsEntryTypeCommentsRoute, getApiCommentsEntryTypeCommentsRouteHandler)
  .openapi(postApiCommentsEntryTypeCommentsRoute, postApiCommentsEntryTypeCommentsRouteHandler)
  .openapi(
    deleteApiCommentsEntryTypeCommentsCommentIdRoute,
    deleteApiCommentsEntryTypeCommentsCommentIdRouteHandler,
  )
  .openapi(
    postApiCommentsEntryTypeCommentsCommentIdRoute,
    postApiCommentsEntryTypeCommentsCommentIdRouteHandler,
  )
  .openapi(
    deleteApiDiscussionsCommentsCommentIdRoute,
    deleteApiDiscussionsCommentsCommentIdRouteHandler,
  )
  .openapi(
    postApiDiscussionsCommentsCommentIdRoute,
    postApiDiscussionsCommentsCommentIdRouteHandler,
  )
  .openapi(getApiDiscussionsFoldersRoute, getApiDiscussionsFoldersRouteHandler)
  .openapi(postApiDiscussionsFoldersRoute, postApiDiscussionsFoldersRouteHandler)
  .openapi(
    getApiDiscussionsFoldersFolderIdTopicsRoute,
    getApiDiscussionsFoldersFolderIdTopicsRouteHandler,
  )
  .openapi(
    postApiDiscussionsFoldersFolderIdTopicsRoute,
    postApiDiscussionsFoldersFolderIdTopicsRouteHandler,
  )
  .openapi(getApiDiscussionsTopicsRoute, getApiDiscussionsTopicsRouteHandler)
  .openapi(deleteApiDiscussionsTopicsTopicIdRoute, deleteApiDiscussionsTopicsTopicIdRouteHandler)
  .openapi(getApiDiscussionsTopicsTopicIdRoute, getApiDiscussionsTopicsTopicIdRouteHandler)
  .openapi(postApiDiscussionsTopicsTopicIdRoute, postApiDiscussionsTopicsTopicIdRouteHandler)
  .openapi(
    postApiDiscussionsTopicsTopicIdCommentsRoute,
    postApiDiscussionsTopicsTopicIdCommentsRouteHandler,
  )
  .openapi(getApiEntriesRoute, getApiEntriesRouteHandler)
  .openapi(getApiEntriesNamesRoute, getApiEntriesNamesRouteHandler)
  .openapi(
    getApiEntryTypesEntryTypeSubTypeTagRoute,
    getApiEntryTypesEntryTypeSubTypeTagRouteHandler,
  )
  .openapi(getApiPvsForSongsRoute, getApiPvsForSongsRouteHandler)
  .openapi(getApiReleaseEventSeriesRoute, getApiReleaseEventSeriesRouteHandler)
  .openapi(deleteApiReleaseEventSeriesIdRoute, deleteApiReleaseEventSeriesIdRouteHandler)
  .openapi(getApiReleaseEventSeriesIdRoute, getApiReleaseEventSeriesIdRouteHandler)
  .openapi(getApiReleaseEventSeriesIdForEditRoute, getApiReleaseEventSeriesIdForEditRouteHandler)
  .openapi(getApiReleaseEventsRoute, getApiReleaseEventsRouteHandler)
  .openapi(getApiReleaseEventsNamesRoute, getApiReleaseEventsNamesRouteHandler)
  .openapi(getApiReleaseEventsEventIdAlbumsRoute, getApiReleaseEventsEventIdAlbumsRouteHandler)
  .openapi(
    getApiReleaseEventsEventIdPublishedSongsRoute,
    getApiReleaseEventsEventIdPublishedSongsRouteHandler,
  )
  .openapi(postApiReleaseEventsEventIdReportsRoute, postApiReleaseEventsEventIdReportsRouteHandler)
  .openapi(deleteApiReleaseEventsIdRoute, deleteApiReleaseEventsIdRouteHandler)
  .openapi(getApiReleaseEventsIdRoute, getApiReleaseEventsIdRouteHandler)
  .openapi(getApiResourcesCultureCodeRoute, getApiResourcesCultureCodeRouteHandler)
  .openapi(postApiSongListsRoute, postApiSongListsRouteHandler)
  .openapi(
    deleteApiSongListsCommentsCommentIdRoute,
    deleteApiSongListsCommentsCommentIdRouteHandler,
  )
  .openapi(postApiSongListsCommentsCommentIdRoute, postApiSongListsCommentsCommentIdRouteHandler)
  .openapi(getApiSongListsFeaturedRoute, getApiSongListsFeaturedRouteHandler)
  .openapi(getApiSongListsFeaturedNamesRoute, getApiSongListsFeaturedNamesRouteHandler)
  .openapi(deleteApiSongListsIdRoute, deleteApiSongListsIdRouteHandler)
  .openapi(getApiSongListsListIdCommentsRoute, getApiSongListsListIdCommentsRouteHandler)
  .openapi(postApiSongListsListIdCommentsRoute, postApiSongListsListIdCommentsRouteHandler)
  .openapi(getApiSongListsListIdSongsRoute, getApiSongListsListIdSongsRouteHandler)
  .openapi(getApiSongsRoute, getApiSongsRouteHandler)
  .openapi(getApiSongsByPvRoute, getApiSongsByPvRouteHandler)
  .openapi(deleteApiSongsCommentsCommentIdRoute, deleteApiSongsCommentsCommentIdRouteHandler)
  .openapi(postApiSongsCommentsCommentIdRoute, postApiSongsCommentsCommentIdRouteHandler)
  .openapi(getApiSongsHighlightedRoute, getApiSongsHighlightedRouteHandler)
  .openapi(getApiSongsLyricsLyricsIdRoute, getApiSongsLyricsLyricsIdRouteHandler)
  .openapi(getApiSongsNamesRoute, getApiSongsNamesRouteHandler)
  .openapi(getApiSongsTopRatedRoute, getApiSongsTopRatedRouteHandler)
  .openapi(deleteApiSongsIdRoute, deleteApiSongsIdRouteHandler)
  .openapi(getApiSongsIdRoute, getApiSongsIdRouteHandler)
  .openapi(getApiSongsIdCommentsRoute, getApiSongsIdCommentsRouteHandler)
  .openapi(postApiSongsIdCommentsRoute, postApiSongsIdCommentsRouteHandler)
  .openapi(getApiSongsIdDerivedRoute, getApiSongsIdDerivedRouteHandler)
  .openapi(getApiSongsIdRatingsRoute, getApiSongsIdRatingsRouteHandler)
  .openapi(postApiSongsIdRatingsRoute, postApiSongsIdRatingsRouteHandler)
  .openapi(getApiSongsIdRelatedRoute, getApiSongsIdRelatedRouteHandler)
  .openapi(getApiTagsRoute, getApiTagsRouteHandler)
  .openapi(postApiTagsRoute, postApiTagsRouteHandler)
  .openapi(getApiTagsByNameNameRoute, getApiTagsByNameNameRouteHandler)
  .openapi(getApiTagsCategoryNamesRoute, getApiTagsCategoryNamesRouteHandler)
  .openapi(deleteApiTagsCommentsCommentIdRoute, deleteApiTagsCommentsCommentIdRouteHandler)
  .openapi(postApiTagsCommentsCommentIdRoute, postApiTagsCommentsCommentIdRouteHandler)
  .openapi(getApiTagsNamesRoute, getApiTagsNamesRouteHandler)
  .openapi(getApiTagsTopRoute, getApiTagsTopRouteHandler)
  .openapi(deleteApiTagsIdRoute, deleteApiTagsIdRouteHandler)
  .openapi(getApiTagsIdRoute, getApiTagsIdRouteHandler)
  .openapi(getApiTagsTagIdChildrenRoute, getApiTagsTagIdChildrenRouteHandler)
  .openapi(getApiTagsTagIdCommentsRoute, getApiTagsTagIdCommentsRouteHandler)
  .openapi(postApiTagsTagIdCommentsRoute, postApiTagsTagIdCommentsRouteHandler)
  .openapi(postApiTagsTagIdReportsRoute, postApiTagsTagIdReportsRouteHandler)
  .openapi(getApiUsersRoute, getApiUsersRouteHandler)
  .openapi(getApiUsersCurrentRoute, getApiUsersCurrentRouteHandler)
  .openapi(
    getApiUsersCurrentAlbumCollectionStatusesAlbumIdRoute,
    getApiUsersCurrentAlbumCollectionStatusesAlbumIdRouteHandler,
  )
  .openapi(postApiUsersCurrentAlbumsAlbumIdRoute, postApiUsersCurrentAlbumsAlbumIdRouteHandler)
  .openapi(
    getApiUsersCurrentFollowedArtistsArtistIdRoute,
    getApiUsersCurrentFollowedArtistsArtistIdRouteHandler,
  )
  .openapi(
    deleteApiUsersCurrentFollowedTagsTagIdRoute,
    deleteApiUsersCurrentFollowedTagsTagIdRouteHandler,
  )
  .openapi(
    postApiUsersCurrentFollowedTagsTagIdRoute,
    postApiUsersCurrentFollowedTagsTagIdRouteHandler,
  )
  .openapi(getApiUsersCurrentRatedSongsSongIdRoute, getApiUsersCurrentRatedSongsSongIdRouteHandler)
  .openapi(
    postApiUsersCurrentRefreshEntryEditRoute,
    postApiUsersCurrentRefreshEntryEditRouteHandler,
  )
  .openapi(postApiUsersCurrentSongTagsSongIdRoute, postApiUsersCurrentSongTagsSongIdRouteHandler)
  .openapi(getApiUsersMessagesMessageIdRoute, getApiUsersMessagesMessageIdRouteHandler)
  .openapi(getApiUsersNamesRoute, getApiUsersNamesRouteHandler)
  .openapi(
    deleteApiUsersProfileCommentsCommentIdRoute,
    deleteApiUsersProfileCommentsCommentIdRouteHandler,
  )
  .openapi(
    postApiUsersProfileCommentsCommentIdRoute,
    postApiUsersProfileCommentsCommentIdRouteHandler,
  )
  .openapi(getApiUsersIdRoute, getApiUsersIdRouteHandler)
  .openapi(
    getApiUsersIdAlbumCollectionStatusesAlbumIdRoute,
    getApiUsersIdAlbumCollectionStatusesAlbumIdRouteHandler,
  )
  .openapi(getApiUsersIdAlbumsRoute, getApiUsersIdAlbumsRouteHandler)
  .openapi(getApiUsersIdEventsRoute, getApiUsersIdEventsRouteHandler)
  .openapi(getApiUsersIdFollowedArtistsRoute, getApiUsersIdFollowedArtistsRouteHandler)
  .openapi(
    getApiUsersIdFollowedArtistsArtistIdRoute,
    getApiUsersIdFollowedArtistsArtistIdRouteHandler,
  )
  .openapi(deleteApiUsersIdMessagesRoute, deleteApiUsersIdMessagesRouteHandler)
  .openapi(getApiUsersIdMessagesRoute, getApiUsersIdMessagesRouteHandler)
  .openapi(postApiUsersIdMessagesRoute, postApiUsersIdMessagesRouteHandler)
  .openapi(getApiUsersIdProfileCommentsRoute, getApiUsersIdProfileCommentsRouteHandler)
  .openapi(postApiUsersIdProfileCommentsRoute, postApiUsersIdProfileCommentsRouteHandler)
  .openapi(getApiUsersIdRatedSongsRoute, getApiUsersIdRatedSongsRouteHandler)
  .openapi(getApiUsersIdRatedSongsSongIdRoute, getApiUsersIdRatedSongsSongIdRouteHandler)
  .openapi(postApiUsersIdReportsRoute, postApiUsersIdReportsRouteHandler)
  .openapi(postApiUsersIdSettingsSettingNameRoute, postApiUsersIdSettingsSettingNameRouteHandler)
  .openapi(getApiUsersIdSongListsRoute, getApiUsersIdSongListsRouteHandler)
  .openapi(getApiVenuesRoute, getApiVenuesRouteHandler)
  .openapi(deleteApiVenuesIdRoute, deleteApiVenuesIdRouteHandler)
  .openapi(postApiVenuesIdReportsRoute, postApiVenuesIdReportsRouteHandler)

export default app
