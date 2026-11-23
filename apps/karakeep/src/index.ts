import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupsBackupIdRoute,
  deleteBookmarksBookmarkIdAssetsAssetIdRoute,
  deleteBookmarksBookmarkIdRoute,
  deleteBookmarksBookmarkIdTagsRoute,
  deleteFeedsFeedIdRoute,
  deleteHighlightsHighlightIdRoute,
  deleteListsListIdBookmarksBookmarkIdRoute,
  deleteListsListIdRoute,
  deleteTagsTagIdRoute,
  getAssetsAssetIdRoute,
  getAssetsAssetIdSignedUrlRoute,
  getBackupsBackupIdDownloadRoute,
  getBackupsBackupIdRoute,
  getBackupsRoute,
  getBookmarksBookmarkIdContentRoute,
  getBookmarksBookmarkIdHighlightsRoute,
  getBookmarksBookmarkIdListsRoute,
  getBookmarksBookmarkIdRoute,
  getBookmarksCheckUrlRoute,
  getBookmarksRoute,
  getBookmarksSearchRoute,
  getFeedsFeedIdRoute,
  getFeedsRoute,
  getHighlightsHighlightIdRoute,
  getHighlightsRoute,
  getListsListIdBookmarksRoute,
  getListsListIdRoute,
  getListsRoute,
  getTagsRoute,
  getTagsTagIdBookmarksRoute,
  getTagsTagIdRoute,
  getUsersMeRoute,
  getUsersMeStatsRoute,
  patchBookmarksBookmarkIdRoute,
  patchFeedsFeedIdRoute,
  patchHighlightsHighlightIdRoute,
  patchListsListIdRoute,
  patchTagsTagIdRoute,
  postAdminJobsTriggerInferenceRoute,
  postAdminJobsTriggerRecrawlRoute,
  postAdminJobsTriggerReindexRoute,
  postAssetsRoute,
  postBackupsRoute,
  postBookmarksBookmarkIdAssetsRoute,
  postBookmarksBookmarkIdSummarizeRoute,
  postBookmarksBookmarkIdTagsRoute,
  postBookmarksRoute,
  postFeedsFeedIdFetchRoute,
  postFeedsRoute,
  postHighlightsRoute,
  postListsRoute,
  postTagsRoute,
  putAdminUsersUserIdRoute,
  putBookmarksBookmarkIdAssetsAssetIdRoute,
  putListsListIdBookmarksBookmarkIdRoute,
} from './routes'
import {
  deleteBackupsBackupIdRouteHandler,
  deleteBookmarksBookmarkIdAssetsAssetIdRouteHandler,
  deleteBookmarksBookmarkIdRouteHandler,
  deleteBookmarksBookmarkIdTagsRouteHandler,
  deleteFeedsFeedIdRouteHandler,
  deleteHighlightsHighlightIdRouteHandler,
  deleteListsListIdBookmarksBookmarkIdRouteHandler,
  deleteListsListIdRouteHandler,
  deleteTagsTagIdRouteHandler,
  getAssetsAssetIdRouteHandler,
  getAssetsAssetIdSignedUrlRouteHandler,
  getBackupsBackupIdDownloadRouteHandler,
  getBackupsBackupIdRouteHandler,
  getBackupsRouteHandler,
  getBookmarksBookmarkIdContentRouteHandler,
  getBookmarksBookmarkIdHighlightsRouteHandler,
  getBookmarksBookmarkIdListsRouteHandler,
  getBookmarksBookmarkIdRouteHandler,
  getBookmarksCheckUrlRouteHandler,
  getBookmarksRouteHandler,
  getBookmarksSearchRouteHandler,
  getFeedsFeedIdRouteHandler,
  getFeedsRouteHandler,
  getHighlightsHighlightIdRouteHandler,
  getHighlightsRouteHandler,
  getListsListIdBookmarksRouteHandler,
  getListsListIdRouteHandler,
  getListsRouteHandler,
  getTagsRouteHandler,
  getTagsTagIdBookmarksRouteHandler,
  getTagsTagIdRouteHandler,
  getUsersMeRouteHandler,
  getUsersMeStatsRouteHandler,
  patchBookmarksBookmarkIdRouteHandler,
  patchFeedsFeedIdRouteHandler,
  patchHighlightsHighlightIdRouteHandler,
  patchListsListIdRouteHandler,
  patchTagsTagIdRouteHandler,
  postAdminJobsTriggerInferenceRouteHandler,
  postAdminJobsTriggerRecrawlRouteHandler,
  postAdminJobsTriggerReindexRouteHandler,
  postAssetsRouteHandler,
  postBackupsRouteHandler,
  postBookmarksBookmarkIdAssetsRouteHandler,
  postBookmarksBookmarkIdSummarizeRouteHandler,
  postBookmarksBookmarkIdTagsRouteHandler,
  postBookmarksRouteHandler,
  postFeedsFeedIdFetchRouteHandler,
  postFeedsRouteHandler,
  postHighlightsRouteHandler,
  postListsRouteHandler,
  postTagsRouteHandler,
  putAdminUsersUserIdRouteHandler,
  putBookmarksBookmarkIdAssetsAssetIdRouteHandler,
  putListsListIdBookmarksBookmarkIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBookmarksRoute, getBookmarksRouteHandler)
  .openapi(postBookmarksRoute, postBookmarksRouteHandler)
  .openapi(getBookmarksSearchRoute, getBookmarksSearchRouteHandler)
  .openapi(getBookmarksCheckUrlRoute, getBookmarksCheckUrlRouteHandler)
  .openapi(getBookmarksBookmarkIdRoute, getBookmarksBookmarkIdRouteHandler)
  .openapi(deleteBookmarksBookmarkIdRoute, deleteBookmarksBookmarkIdRouteHandler)
  .openapi(patchBookmarksBookmarkIdRoute, patchBookmarksBookmarkIdRouteHandler)
  .openapi(getBookmarksBookmarkIdContentRoute, getBookmarksBookmarkIdContentRouteHandler)
  .openapi(postBookmarksBookmarkIdSummarizeRoute, postBookmarksBookmarkIdSummarizeRouteHandler)
  .openapi(postBookmarksBookmarkIdTagsRoute, postBookmarksBookmarkIdTagsRouteHandler)
  .openapi(deleteBookmarksBookmarkIdTagsRoute, deleteBookmarksBookmarkIdTagsRouteHandler)
  .openapi(getBookmarksBookmarkIdListsRoute, getBookmarksBookmarkIdListsRouteHandler)
  .openapi(getBookmarksBookmarkIdHighlightsRoute, getBookmarksBookmarkIdHighlightsRouteHandler)
  .openapi(postBookmarksBookmarkIdAssetsRoute, postBookmarksBookmarkIdAssetsRouteHandler)
  .openapi(
    putBookmarksBookmarkIdAssetsAssetIdRoute,
    putBookmarksBookmarkIdAssetsAssetIdRouteHandler,
  )
  .openapi(
    deleteBookmarksBookmarkIdAssetsAssetIdRoute,
    deleteBookmarksBookmarkIdAssetsAssetIdRouteHandler,
  )
  .openapi(getListsRoute, getListsRouteHandler)
  .openapi(postListsRoute, postListsRouteHandler)
  .openapi(getListsListIdRoute, getListsListIdRouteHandler)
  .openapi(deleteListsListIdRoute, deleteListsListIdRouteHandler)
  .openapi(patchListsListIdRoute, patchListsListIdRouteHandler)
  .openapi(getListsListIdBookmarksRoute, getListsListIdBookmarksRouteHandler)
  .openapi(putListsListIdBookmarksBookmarkIdRoute, putListsListIdBookmarksBookmarkIdRouteHandler)
  .openapi(
    deleteListsListIdBookmarksBookmarkIdRoute,
    deleteListsListIdBookmarksBookmarkIdRouteHandler,
  )
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(postTagsRoute, postTagsRouteHandler)
  .openapi(getTagsTagIdRoute, getTagsTagIdRouteHandler)
  .openapi(deleteTagsTagIdRoute, deleteTagsTagIdRouteHandler)
  .openapi(patchTagsTagIdRoute, patchTagsTagIdRouteHandler)
  .openapi(getTagsTagIdBookmarksRoute, getTagsTagIdBookmarksRouteHandler)
  .openapi(getHighlightsRoute, getHighlightsRouteHandler)
  .openapi(postHighlightsRoute, postHighlightsRouteHandler)
  .openapi(getHighlightsHighlightIdRoute, getHighlightsHighlightIdRouteHandler)
  .openapi(deleteHighlightsHighlightIdRoute, deleteHighlightsHighlightIdRouteHandler)
  .openapi(patchHighlightsHighlightIdRoute, patchHighlightsHighlightIdRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(getUsersMeStatsRoute, getUsersMeStatsRouteHandler)
  .openapi(postAssetsRoute, postAssetsRouteHandler)
  .openapi(getAssetsAssetIdRoute, getAssetsAssetIdRouteHandler)
  .openapi(getAssetsAssetIdSignedUrlRoute, getAssetsAssetIdSignedUrlRouteHandler)
  .openapi(putAdminUsersUserIdRoute, putAdminUsersUserIdRouteHandler)
  .openapi(postAdminJobsTriggerRecrawlRoute, postAdminJobsTriggerRecrawlRouteHandler)
  .openapi(postAdminJobsTriggerReindexRoute, postAdminJobsTriggerReindexRouteHandler)
  .openapi(postAdminJobsTriggerInferenceRoute, postAdminJobsTriggerInferenceRouteHandler)
  .openapi(getBackupsRoute, getBackupsRouteHandler)
  .openapi(postBackupsRoute, postBackupsRouteHandler)
  .openapi(getBackupsBackupIdRoute, getBackupsBackupIdRouteHandler)
  .openapi(deleteBackupsBackupIdRoute, deleteBackupsBackupIdRouteHandler)
  .openapi(getBackupsBackupIdDownloadRoute, getBackupsBackupIdDownloadRouteHandler)
  .openapi(getFeedsRoute, getFeedsRouteHandler)
  .openapi(postFeedsRoute, postFeedsRouteHandler)
  .openapi(getFeedsFeedIdRoute, getFeedsFeedIdRouteHandler)
  .openapi(patchFeedsFeedIdRoute, patchFeedsFeedIdRouteHandler)
  .openapi(deleteFeedsFeedIdRoute, deleteFeedsFeedIdRouteHandler)
  .openapi(postFeedsFeedIdFetchRoute, postFeedsFeedIdFetchRouteHandler)

export default app
