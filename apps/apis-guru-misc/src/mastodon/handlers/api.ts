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
  getApiV1AdminAccountsIdRoute,
  getApiV1AdminAccountsRoute,
  getApiV1AdminReportsIdRoute,
  getApiV1AdminReportsRoute,
  getApiV1AnnouncementsRoute,
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
  putApiV1AnnouncementsIdReactionsNameRoute,
  putApiV1FiltersIdRoute,
  putApiV1ListsRoute,
  putApiV1PushSubscriptionRoute,
  putApiV1ScheduledStatusesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiOembedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProofsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AdminAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AdminAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminAccountsIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminAccountsIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminAccountsIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminAccountsIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminAccountsIdUnsilenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminAccountsIdUnsuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AdminReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AdminReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminReportsIdAssignToSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminReportsIdReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminReportsIdResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AdminReportsIdUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AnnouncementsIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AnnouncementsIdReactionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AnnouncementsIdReactionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BookmarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConversationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConversationsIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomEmojisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DomainBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DomainBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DomainBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EndorsementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FavouritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FeaturedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FeaturedTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FeaturedTagsSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1FeaturedTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1FiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1FiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FollowRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FollowRequestsIdAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FollowRequestsIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstanceActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstancePeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ListsIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ListsIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ListsIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationsClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationsIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PollsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PollsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PushSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PushSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PushSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PushSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ScheduledStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ScheduledStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ScheduledStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ScheduledStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1StatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdBookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatusesIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatusesIdFavouritedByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdReblogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatusesIdRebloggedByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdUnbookmarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdUnfavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdUnmuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdUnpinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StatusesIdUnreblogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SuggestionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TimelinesHomeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TimelinesListListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TimelinesPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TimelinesTagHashtagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TrendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
