import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AnnouncementsIdReactionsNameRoute,
  deleteApiV1ConversationsIdRoute,
  deleteApiV1DomainBlocksRoute,
  deleteApiV1FeaturedTagsIdRoute,
  deleteApiV1FiltersIdRoute,
  deleteApiV1ListsIdAccountsRoute,
  deleteApiV1ListsRoute,
  deleteApiV1PushSubscriptionRoute,
  deleteApiV1ScheduledStatusesIdRoute,
  deleteApiV1StatusesIdRoute,
  deleteApiV1SuggestionsIdRoute,
  getApiOembedRoute,
  getApiProofsRoute,
  getApiV1AccountsIdFeaturedTagsRoute,
  getApiV1AccountsIdFollowersRoute,
  getApiV1AccountsIdFollowingRoute,
  getApiV1AccountsIdIdentityProofsRoute,
  getApiV1AccountsIdListsRoute,
  getApiV1AccountsIdRoute,
  getApiV1AccountsIdStatusesRoute,
  getApiV1AccountsRelationshipsRoute,
  getApiV1AccountsSearchRoute,
  getApiV1AccountsVerifyCredentialsRoute,
  getApiV1AdminAccountsIdRoute,
  getApiV1AdminAccountsRoute,
  getApiV1AdminReportsIdRoute,
  getApiV1AdminReportsRoute,
  getApiV1AnnouncementsRoute,
  getApiV1AppsVerifyCredentialsRoute,
  getApiV1BlocksRoute,
  getApiV1BookmarksRoute,
  getApiV1ConversationsRoute,
  getApiV1CustomEmojisRoute,
  getApiV1DirectoryRoute,
  getApiV1DomainBlocksRoute,
  getApiV1EndorsementsRoute,
  getApiV1FavouritesRoute,
  getApiV1FeaturedTagsRoute,
  getApiV1FeaturedTagsSuggestionsRoute,
  getApiV1FiltersIdRoute,
  getApiV1FiltersRoute,
  getApiV1FollowRequestsRoute,
  getApiV1InstanceActivityRoute,
  getApiV1InstancePeersRoute,
  getApiV1InstanceRoute,
  getApiV1ListsIdAccountsRoute,
  getApiV1ListsIdRoute,
  getApiV1ListsRoute,
  getApiV1MarkersRoute,
  getApiV1MediaIdRoute,
  getApiV1MutesRoute,
  getApiV1NotificationsIdRoute,
  getApiV1NotificationsRoute,
  getApiV1PollsIdRoute,
  getApiV1PreferencesRoute,
  getApiV1PushSubscriptionRoute,
  getApiV1ScheduledStatusesIdRoute,
  getApiV1ScheduledStatusesRoute,
  getApiV1StatusesIdContextRoute,
  getApiV1StatusesIdFavouritedByRoute,
  getApiV1StatusesIdRebloggedByRoute,
  getApiV1StatusesIdRoute,
  getApiV1SuggestionsRoute,
  getApiV1TimelinesHomeRoute,
  getApiV1TimelinesListListIdRoute,
  getApiV1TimelinesPublicRoute,
  getApiV1TimelinesTagHashtagRoute,
  getApiV1TrendsRoute,
  getApiV2SearchRoute,
  getOauthAuthorizeRoute,
  patchApiV1AccountsUpdateCredentialsRoute,
  postApiV1AccountsIdBlockRoute,
  postApiV1AccountsIdFollowRoute,
  postApiV1AccountsIdMuteRoute,
  postApiV1AccountsIdNoteRoute,
  postApiV1AccountsIdPinRoute,
  postApiV1AccountsIdUnblockRoute,
  postApiV1AccountsIdUnfollowRoute,
  postApiV1AccountsIdUnmuteRoute,
  postApiV1AccountsIdUnpinRoute,
  postApiV1AccountsRoute,
  postApiV1AdminAccountsIdActionRoute,
  postApiV1AdminAccountsIdApproveRoute,
  postApiV1AdminAccountsIdEnableRoute,
  postApiV1AdminAccountsIdRejectRoute,
  postApiV1AdminAccountsIdUnsilenceRoute,
  postApiV1AdminAccountsIdUnsuspendRoute,
  postApiV1AdminReportsIdAssignToSelfRoute,
  postApiV1AdminReportsIdReopenRoute,
  postApiV1AdminReportsIdResolveRoute,
  postApiV1AdminReportsIdUnassignRoute,
  postApiV1AnnouncementsIdDismissRoute,
  postApiV1AppsRoute,
  postApiV1ConversationsIdReadRoute,
  postApiV1DomainBlocksRoute,
  postApiV1FeaturedTagsRoute,
  postApiV1FiltersRoute,
  postApiV1FollowRequestsIdAuthorizeRoute,
  postApiV1FollowRequestsIdRejectRoute,
  postApiV1ListsIdAccountsRoute,
  postApiV1ListsRoute,
  postApiV1MarkersRoute,
  postApiV1MediaIdRoute,
  postApiV1MediaRoute,
  postApiV1NotificationsClearRoute,
  postApiV1NotificationsIdDismissRoute,
  postApiV1PollsIdRoute,
  postApiV1PushSubscriptionRoute,
  postApiV1ReportsRoute,
  postApiV1StatusesIdBookmarkRoute,
  postApiV1StatusesIdFavouriteRoute,
  postApiV1StatusesIdMuteRoute,
  postApiV1StatusesIdPinRoute,
  postApiV1StatusesIdReblogRoute,
  postApiV1StatusesIdUnbookmarkRoute,
  postApiV1StatusesIdUnfavouriteRoute,
  postApiV1StatusesIdUnmuteRoute,
  postApiV1StatusesIdUnpinRoute,
  postApiV1StatusesIdUnreblogRoute,
  postApiV1StatusesRoute,
  postOauthRevokeRoute,
  postOauthTokenRoute,
  putApiV1AnnouncementsIdReactionsNameRoute,
  putApiV1FiltersIdRoute,
  putApiV1ListsRoute,
  putApiV1PushSubscriptionRoute,
  putApiV1ScheduledStatusesIdRoute,
} from './routes'
import {
  deleteApiV1AnnouncementsIdReactionsNameRouteHandler,
  deleteApiV1ConversationsIdRouteHandler,
  deleteApiV1DomainBlocksRouteHandler,
  deleteApiV1FeaturedTagsIdRouteHandler,
  deleteApiV1FiltersIdRouteHandler,
  deleteApiV1ListsIdAccountsRouteHandler,
  deleteApiV1ListsRouteHandler,
  deleteApiV1PushSubscriptionRouteHandler,
  deleteApiV1ScheduledStatusesIdRouteHandler,
  deleteApiV1StatusesIdRouteHandler,
  deleteApiV1SuggestionsIdRouteHandler,
  getApiOembedRouteHandler,
  getApiProofsRouteHandler,
  getApiV1AccountsIdFeaturedTagsRouteHandler,
  getApiV1AccountsIdFollowersRouteHandler,
  getApiV1AccountsIdFollowingRouteHandler,
  getApiV1AccountsIdIdentityProofsRouteHandler,
  getApiV1AccountsIdListsRouteHandler,
  getApiV1AccountsIdRouteHandler,
  getApiV1AccountsIdStatusesRouteHandler,
  getApiV1AccountsRelationshipsRouteHandler,
  getApiV1AccountsSearchRouteHandler,
  getApiV1AccountsVerifyCredentialsRouteHandler,
  getApiV1AdminAccountsIdRouteHandler,
  getApiV1AdminAccountsRouteHandler,
  getApiV1AdminReportsIdRouteHandler,
  getApiV1AdminReportsRouteHandler,
  getApiV1AnnouncementsRouteHandler,
  getApiV1AppsVerifyCredentialsRouteHandler,
  getApiV1BlocksRouteHandler,
  getApiV1BookmarksRouteHandler,
  getApiV1ConversationsRouteHandler,
  getApiV1CustomEmojisRouteHandler,
  getApiV1DirectoryRouteHandler,
  getApiV1DomainBlocksRouteHandler,
  getApiV1EndorsementsRouteHandler,
  getApiV1FavouritesRouteHandler,
  getApiV1FeaturedTagsRouteHandler,
  getApiV1FeaturedTagsSuggestionsRouteHandler,
  getApiV1FiltersIdRouteHandler,
  getApiV1FiltersRouteHandler,
  getApiV1FollowRequestsRouteHandler,
  getApiV1InstanceActivityRouteHandler,
  getApiV1InstancePeersRouteHandler,
  getApiV1InstanceRouteHandler,
  getApiV1ListsIdAccountsRouteHandler,
  getApiV1ListsIdRouteHandler,
  getApiV1ListsRouteHandler,
  getApiV1MarkersRouteHandler,
  getApiV1MediaIdRouteHandler,
  getApiV1MutesRouteHandler,
  getApiV1NotificationsIdRouteHandler,
  getApiV1NotificationsRouteHandler,
  getApiV1PollsIdRouteHandler,
  getApiV1PreferencesRouteHandler,
  getApiV1PushSubscriptionRouteHandler,
  getApiV1ScheduledStatusesIdRouteHandler,
  getApiV1ScheduledStatusesRouteHandler,
  getApiV1StatusesIdContextRouteHandler,
  getApiV1StatusesIdFavouritedByRouteHandler,
  getApiV1StatusesIdRebloggedByRouteHandler,
  getApiV1StatusesIdRouteHandler,
  getApiV1SuggestionsRouteHandler,
  getApiV1TimelinesHomeRouteHandler,
  getApiV1TimelinesListListIdRouteHandler,
  getApiV1TimelinesPublicRouteHandler,
  getApiV1TimelinesTagHashtagRouteHandler,
  getApiV1TrendsRouteHandler,
  getApiV2SearchRouteHandler,
  getOauthAuthorizeRouteHandler,
  patchApiV1AccountsUpdateCredentialsRouteHandler,
  postApiV1AccountsIdBlockRouteHandler,
  postApiV1AccountsIdFollowRouteHandler,
  postApiV1AccountsIdMuteRouteHandler,
  postApiV1AccountsIdNoteRouteHandler,
  postApiV1AccountsIdPinRouteHandler,
  postApiV1AccountsIdUnblockRouteHandler,
  postApiV1AccountsIdUnfollowRouteHandler,
  postApiV1AccountsIdUnmuteRouteHandler,
  postApiV1AccountsIdUnpinRouteHandler,
  postApiV1AccountsRouteHandler,
  postApiV1AdminAccountsIdActionRouteHandler,
  postApiV1AdminAccountsIdApproveRouteHandler,
  postApiV1AdminAccountsIdEnableRouteHandler,
  postApiV1AdminAccountsIdRejectRouteHandler,
  postApiV1AdminAccountsIdUnsilenceRouteHandler,
  postApiV1AdminAccountsIdUnsuspendRouteHandler,
  postApiV1AdminReportsIdAssignToSelfRouteHandler,
  postApiV1AdminReportsIdReopenRouteHandler,
  postApiV1AdminReportsIdResolveRouteHandler,
  postApiV1AdminReportsIdUnassignRouteHandler,
  postApiV1AnnouncementsIdDismissRouteHandler,
  postApiV1AppsRouteHandler,
  postApiV1ConversationsIdReadRouteHandler,
  postApiV1DomainBlocksRouteHandler,
  postApiV1FeaturedTagsRouteHandler,
  postApiV1FiltersRouteHandler,
  postApiV1FollowRequestsIdAuthorizeRouteHandler,
  postApiV1FollowRequestsIdRejectRouteHandler,
  postApiV1ListsIdAccountsRouteHandler,
  postApiV1ListsRouteHandler,
  postApiV1MarkersRouteHandler,
  postApiV1MediaIdRouteHandler,
  postApiV1MediaRouteHandler,
  postApiV1NotificationsClearRouteHandler,
  postApiV1NotificationsIdDismissRouteHandler,
  postApiV1PollsIdRouteHandler,
  postApiV1PushSubscriptionRouteHandler,
  postApiV1ReportsRouteHandler,
  postApiV1StatusesIdBookmarkRouteHandler,
  postApiV1StatusesIdFavouriteRouteHandler,
  postApiV1StatusesIdMuteRouteHandler,
  postApiV1StatusesIdPinRouteHandler,
  postApiV1StatusesIdReblogRouteHandler,
  postApiV1StatusesIdUnbookmarkRouteHandler,
  postApiV1StatusesIdUnfavouriteRouteHandler,
  postApiV1StatusesIdUnmuteRouteHandler,
  postApiV1StatusesIdUnpinRouteHandler,
  postApiV1StatusesIdUnreblogRouteHandler,
  postApiV1StatusesRouteHandler,
  postOauthRevokeRouteHandler,
  postOauthTokenRouteHandler,
  putApiV1AnnouncementsIdReactionsNameRouteHandler,
  putApiV1FiltersIdRouteHandler,
  putApiV1ListsRouteHandler,
  putApiV1PushSubscriptionRouteHandler,
  putApiV1ScheduledStatusesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiOembedRoute, getApiOembedRouteHandler)
  .openapi(getApiProofsRoute, getApiProofsRouteHandler)
  .openapi(postApiV1AccountsRoute, postApiV1AccountsRouteHandler)
  .openapi(getApiV1AccountsRelationshipsRoute, getApiV1AccountsRelationshipsRouteHandler)
  .openapi(getApiV1AccountsSearchRoute, getApiV1AccountsSearchRouteHandler)
  .openapi(
    patchApiV1AccountsUpdateCredentialsRoute,
    patchApiV1AccountsUpdateCredentialsRouteHandler,
  )
  .openapi(getApiV1AccountsVerifyCredentialsRoute, getApiV1AccountsVerifyCredentialsRouteHandler)
  .openapi(getApiV1AccountsIdRoute, getApiV1AccountsIdRouteHandler)
  .openapi(postApiV1AccountsIdBlockRoute, postApiV1AccountsIdBlockRouteHandler)
  .openapi(getApiV1AccountsIdFeaturedTagsRoute, getApiV1AccountsIdFeaturedTagsRouteHandler)
  .openapi(postApiV1AccountsIdFollowRoute, postApiV1AccountsIdFollowRouteHandler)
  .openapi(getApiV1AccountsIdFollowersRoute, getApiV1AccountsIdFollowersRouteHandler)
  .openapi(getApiV1AccountsIdFollowingRoute, getApiV1AccountsIdFollowingRouteHandler)
  .openapi(getApiV1AccountsIdIdentityProofsRoute, getApiV1AccountsIdIdentityProofsRouteHandler)
  .openapi(getApiV1AccountsIdListsRoute, getApiV1AccountsIdListsRouteHandler)
  .openapi(postApiV1AccountsIdMuteRoute, postApiV1AccountsIdMuteRouteHandler)
  .openapi(postApiV1AccountsIdNoteRoute, postApiV1AccountsIdNoteRouteHandler)
  .openapi(postApiV1AccountsIdPinRoute, postApiV1AccountsIdPinRouteHandler)
  .openapi(getApiV1AccountsIdStatusesRoute, getApiV1AccountsIdStatusesRouteHandler)
  .openapi(postApiV1AccountsIdUnblockRoute, postApiV1AccountsIdUnblockRouteHandler)
  .openapi(postApiV1AccountsIdUnfollowRoute, postApiV1AccountsIdUnfollowRouteHandler)
  .openapi(postApiV1AccountsIdUnmuteRoute, postApiV1AccountsIdUnmuteRouteHandler)
  .openapi(postApiV1AccountsIdUnpinRoute, postApiV1AccountsIdUnpinRouteHandler)
  .openapi(getApiV1AdminAccountsRoute, getApiV1AdminAccountsRouteHandler)
  .openapi(getApiV1AdminAccountsIdRoute, getApiV1AdminAccountsIdRouteHandler)
  .openapi(postApiV1AdminAccountsIdActionRoute, postApiV1AdminAccountsIdActionRouteHandler)
  .openapi(postApiV1AdminAccountsIdApproveRoute, postApiV1AdminAccountsIdApproveRouteHandler)
  .openapi(postApiV1AdminAccountsIdEnableRoute, postApiV1AdminAccountsIdEnableRouteHandler)
  .openapi(postApiV1AdminAccountsIdRejectRoute, postApiV1AdminAccountsIdRejectRouteHandler)
  .openapi(postApiV1AdminAccountsIdUnsilenceRoute, postApiV1AdminAccountsIdUnsilenceRouteHandler)
  .openapi(postApiV1AdminAccountsIdUnsuspendRoute, postApiV1AdminAccountsIdUnsuspendRouteHandler)
  .openapi(getApiV1AdminReportsRoute, getApiV1AdminReportsRouteHandler)
  .openapi(getApiV1AdminReportsIdRoute, getApiV1AdminReportsIdRouteHandler)
  .openapi(
    postApiV1AdminReportsIdAssignToSelfRoute,
    postApiV1AdminReportsIdAssignToSelfRouteHandler,
  )
  .openapi(postApiV1AdminReportsIdReopenRoute, postApiV1AdminReportsIdReopenRouteHandler)
  .openapi(postApiV1AdminReportsIdResolveRoute, postApiV1AdminReportsIdResolveRouteHandler)
  .openapi(postApiV1AdminReportsIdUnassignRoute, postApiV1AdminReportsIdUnassignRouteHandler)
  .openapi(getApiV1AnnouncementsRoute, getApiV1AnnouncementsRouteHandler)
  .openapi(postApiV1AnnouncementsIdDismissRoute, postApiV1AnnouncementsIdDismissRouteHandler)
  .openapi(
    deleteApiV1AnnouncementsIdReactionsNameRoute,
    deleteApiV1AnnouncementsIdReactionsNameRouteHandler,
  )
  .openapi(
    putApiV1AnnouncementsIdReactionsNameRoute,
    putApiV1AnnouncementsIdReactionsNameRouteHandler,
  )
  .openapi(postApiV1AppsRoute, postApiV1AppsRouteHandler)
  .openapi(getApiV1AppsVerifyCredentialsRoute, getApiV1AppsVerifyCredentialsRouteHandler)
  .openapi(getApiV1BlocksRoute, getApiV1BlocksRouteHandler)
  .openapi(getApiV1BookmarksRoute, getApiV1BookmarksRouteHandler)
  .openapi(getApiV1ConversationsRoute, getApiV1ConversationsRouteHandler)
  .openapi(deleteApiV1ConversationsIdRoute, deleteApiV1ConversationsIdRouteHandler)
  .openapi(postApiV1ConversationsIdReadRoute, postApiV1ConversationsIdReadRouteHandler)
  .openapi(getApiV1CustomEmojisRoute, getApiV1CustomEmojisRouteHandler)
  .openapi(getApiV1DirectoryRoute, getApiV1DirectoryRouteHandler)
  .openapi(deleteApiV1DomainBlocksRoute, deleteApiV1DomainBlocksRouteHandler)
  .openapi(getApiV1DomainBlocksRoute, getApiV1DomainBlocksRouteHandler)
  .openapi(postApiV1DomainBlocksRoute, postApiV1DomainBlocksRouteHandler)
  .openapi(getApiV1EndorsementsRoute, getApiV1EndorsementsRouteHandler)
  .openapi(getApiV1FavouritesRoute, getApiV1FavouritesRouteHandler)
  .openapi(getApiV1FeaturedTagsRoute, getApiV1FeaturedTagsRouteHandler)
  .openapi(postApiV1FeaturedTagsRoute, postApiV1FeaturedTagsRouteHandler)
  .openapi(getApiV1FeaturedTagsSuggestionsRoute, getApiV1FeaturedTagsSuggestionsRouteHandler)
  .openapi(deleteApiV1FeaturedTagsIdRoute, deleteApiV1FeaturedTagsIdRouteHandler)
  .openapi(getApiV1FiltersRoute, getApiV1FiltersRouteHandler)
  .openapi(postApiV1FiltersRoute, postApiV1FiltersRouteHandler)
  .openapi(deleteApiV1FiltersIdRoute, deleteApiV1FiltersIdRouteHandler)
  .openapi(getApiV1FiltersIdRoute, getApiV1FiltersIdRouteHandler)
  .openapi(putApiV1FiltersIdRoute, putApiV1FiltersIdRouteHandler)
  .openapi(getApiV1FollowRequestsRoute, getApiV1FollowRequestsRouteHandler)
  .openapi(postApiV1FollowRequestsIdAuthorizeRoute, postApiV1FollowRequestsIdAuthorizeRouteHandler)
  .openapi(postApiV1FollowRequestsIdRejectRoute, postApiV1FollowRequestsIdRejectRouteHandler)
  .openapi(getApiV1InstanceRoute, getApiV1InstanceRouteHandler)
  .openapi(getApiV1InstanceActivityRoute, getApiV1InstanceActivityRouteHandler)
  .openapi(getApiV1InstancePeersRoute, getApiV1InstancePeersRouteHandler)
  .openapi(deleteApiV1ListsRoute, deleteApiV1ListsRouteHandler)
  .openapi(getApiV1ListsRoute, getApiV1ListsRouteHandler)
  .openapi(postApiV1ListsRoute, postApiV1ListsRouteHandler)
  .openapi(putApiV1ListsRoute, putApiV1ListsRouteHandler)
  .openapi(getApiV1ListsIdRoute, getApiV1ListsIdRouteHandler)
  .openapi(deleteApiV1ListsIdAccountsRoute, deleteApiV1ListsIdAccountsRouteHandler)
  .openapi(getApiV1ListsIdAccountsRoute, getApiV1ListsIdAccountsRouteHandler)
  .openapi(postApiV1ListsIdAccountsRoute, postApiV1ListsIdAccountsRouteHandler)
  .openapi(getApiV1MarkersRoute, getApiV1MarkersRouteHandler)
  .openapi(postApiV1MarkersRoute, postApiV1MarkersRouteHandler)
  .openapi(postApiV1MediaRoute, postApiV1MediaRouteHandler)
  .openapi(getApiV1MediaIdRoute, getApiV1MediaIdRouteHandler)
  .openapi(postApiV1MediaIdRoute, postApiV1MediaIdRouteHandler)
  .openapi(getApiV1MutesRoute, getApiV1MutesRouteHandler)
  .openapi(getApiV1NotificationsRoute, getApiV1NotificationsRouteHandler)
  .openapi(postApiV1NotificationsClearRoute, postApiV1NotificationsClearRouteHandler)
  .openapi(getApiV1NotificationsIdRoute, getApiV1NotificationsIdRouteHandler)
  .openapi(postApiV1NotificationsIdDismissRoute, postApiV1NotificationsIdDismissRouteHandler)
  .openapi(getApiV1PollsIdRoute, getApiV1PollsIdRouteHandler)
  .openapi(postApiV1PollsIdRoute, postApiV1PollsIdRouteHandler)
  .openapi(getApiV1PreferencesRoute, getApiV1PreferencesRouteHandler)
  .openapi(deleteApiV1PushSubscriptionRoute, deleteApiV1PushSubscriptionRouteHandler)
  .openapi(getApiV1PushSubscriptionRoute, getApiV1PushSubscriptionRouteHandler)
  .openapi(postApiV1PushSubscriptionRoute, postApiV1PushSubscriptionRouteHandler)
  .openapi(putApiV1PushSubscriptionRoute, putApiV1PushSubscriptionRouteHandler)
  .openapi(postApiV1ReportsRoute, postApiV1ReportsRouteHandler)
  .openapi(getApiV1ScheduledStatusesRoute, getApiV1ScheduledStatusesRouteHandler)
  .openapi(deleteApiV1ScheduledStatusesIdRoute, deleteApiV1ScheduledStatusesIdRouteHandler)
  .openapi(getApiV1ScheduledStatusesIdRoute, getApiV1ScheduledStatusesIdRouteHandler)
  .openapi(putApiV1ScheduledStatusesIdRoute, putApiV1ScheduledStatusesIdRouteHandler)
  .openapi(postApiV1StatusesRoute, postApiV1StatusesRouteHandler)
  .openapi(deleteApiV1StatusesIdRoute, deleteApiV1StatusesIdRouteHandler)
  .openapi(getApiV1StatusesIdRoute, getApiV1StatusesIdRouteHandler)
  .openapi(postApiV1StatusesIdBookmarkRoute, postApiV1StatusesIdBookmarkRouteHandler)
  .openapi(getApiV1StatusesIdContextRoute, getApiV1StatusesIdContextRouteHandler)
  .openapi(postApiV1StatusesIdFavouriteRoute, postApiV1StatusesIdFavouriteRouteHandler)
  .openapi(getApiV1StatusesIdFavouritedByRoute, getApiV1StatusesIdFavouritedByRouteHandler)
  .openapi(postApiV1StatusesIdMuteRoute, postApiV1StatusesIdMuteRouteHandler)
  .openapi(postApiV1StatusesIdPinRoute, postApiV1StatusesIdPinRouteHandler)
  .openapi(postApiV1StatusesIdReblogRoute, postApiV1StatusesIdReblogRouteHandler)
  .openapi(getApiV1StatusesIdRebloggedByRoute, getApiV1StatusesIdRebloggedByRouteHandler)
  .openapi(postApiV1StatusesIdUnbookmarkRoute, postApiV1StatusesIdUnbookmarkRouteHandler)
  .openapi(postApiV1StatusesIdUnfavouriteRoute, postApiV1StatusesIdUnfavouriteRouteHandler)
  .openapi(postApiV1StatusesIdUnmuteRoute, postApiV1StatusesIdUnmuteRouteHandler)
  .openapi(postApiV1StatusesIdUnpinRoute, postApiV1StatusesIdUnpinRouteHandler)
  .openapi(postApiV1StatusesIdUnreblogRoute, postApiV1StatusesIdUnreblogRouteHandler)
  .openapi(getApiV1SuggestionsRoute, getApiV1SuggestionsRouteHandler)
  .openapi(deleteApiV1SuggestionsIdRoute, deleteApiV1SuggestionsIdRouteHandler)
  .openapi(getApiV1TimelinesHomeRoute, getApiV1TimelinesHomeRouteHandler)
  .openapi(getApiV1TimelinesListListIdRoute, getApiV1TimelinesListListIdRouteHandler)
  .openapi(getApiV1TimelinesPublicRoute, getApiV1TimelinesPublicRouteHandler)
  .openapi(getApiV1TimelinesTagHashtagRoute, getApiV1TimelinesTagHashtagRouteHandler)
  .openapi(getApiV1TrendsRoute, getApiV1TrendsRouteHandler)
  .openapi(getApiV2SearchRoute, getApiV2SearchRouteHandler)
  .openapi(getOauthAuthorizeRoute, getOauthAuthorizeRouteHandler)
  .openapi(postOauthRevokeRoute, postOauthRevokeRouteHandler)
  .openapi(postOauthTokenRoute, postOauthTokenRouteHandler)

export default app
