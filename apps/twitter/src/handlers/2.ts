import type { RouteHandler } from '@hono/zod-openapi'
import type {
  delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllRoute,
  delete2ActivitySubscriptionsRoute,
  delete2ActivitySubscriptionsSubscriptionIdRoute,
  delete2BotsIdRoute,
  delete2BotsIdTokenRoute,
  delete2BroadcastsChatModeratorsUserIdRoute,
  delete2BroadcastsChatMutesUserIdRoute,
  delete2BroadcastsIdChatMessageIdRoute,
  delete2BroadcastsIdChatMutesUserIdRoute,
  delete2BroadcastsIdRoute,
  delete2BroadcastsScheduledIdRoute,
  delete2CallsScheduledIdRoute,
  delete2ChatConversationsIdArchiveRoute,
  delete2ChatConversationsIdInviteRoute,
  delete2ChatConversationsIdMessageTtlRoute,
  delete2ChatConversationsIdMuteRoute,
  delete2ChatConversationsIdRoute,
  delete2ComplianceJobsIdRoute,
  delete2ConnectionsAllRoute,
  delete2ConnectionsEndpointIdRoute,
  delete2ConnectionsRoute,
  delete2DmEventsEventIdRoute,
  delete2ListsIdMembersUserIdRoute,
  delete2ListsIdRoute,
  delete2MediaLibraryMediaKeyRoute,
  delete2MediaSubtitlesRoute,
  delete2NotesIdRoute,
  delete2PostsDraftsIdRoute,
  delete2SourcesIdRoute,
  delete2TweetsIdRoute,
  delete2TweetsSearchWebhooksWebhookIdRoute,
  delete2UsersIdBookmarksTweetIdRoute,
  delete2UsersIdBroadcastsBroadcastIdRoute,
  delete2UsersIdFollowedListsListIdRoute,
  delete2UsersIdLikesTweetIdRoute,
  delete2UsersIdPinnedListsListIdRoute,
  delete2UsersIdRetweetsSourceTweetIdRoute,
  delete2UsersIdSourcesSourceIdRoute,
  delete2UsersSourceUserIdBlockingTargetUserIdRoute,
  delete2UsersSourceUserIdFollowingTargetUserIdRoute,
  delete2UsersSourceUserIdMutingTargetUserIdRoute,
  delete2WebhooksWebhookIdRoute,
  get2AccountActivitySubscriptionsCountRoute,
  get2AccountActivityWebhooksWebhookIdSubscriptionsAllListRoute,
  get2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute,
  get2AccountRoute,
  get2ActivityStreamRoute,
  get2ActivitySubscriptionsRoute,
  get2BotsRoute,
  get2BroadcastsCategoriesRoute,
  get2BroadcastsChatModeratorsRoute,
  get2BroadcastsChatMutesRoute,
  get2BroadcastsIdChatRoute,
  get2BroadcastsIdRoute,
  get2BroadcastsRoute,
  get2BroadcastsScheduledIdRoute,
  get2BroadcastsScheduledRoute,
  get2CallsIdRoute,
  get2CallsScheduledIdRoute,
  get2CallsScheduledRoute,
  get2ChatConversationsIdAdminRequestsRoute,
  get2ChatConversationsIdEventsRoute,
  get2ChatConversationsIdInvitesTokenRoute,
  get2ChatConversationsIdPinnedMessagesRoute,
  get2ChatConversationsIdRoute,
  get2ChatConversationsRoute,
  get2ChatMediaIdMediaHashKeyRoute,
  get2ChatMessageRequestsIdRoute,
  get2ChatMessageRequestsRoute,
  get2ChatSettingsRoute,
  get2CommunitiesIdRoute,
  get2CommunitiesSearchRoute,
  get2ComplianceJobsIdDownloadRoute,
  get2ComplianceJobsIdRoute,
  get2ComplianceJobsRoute,
  get2ConnectionsRoute,
  get2DmConversationsIdDmEventsRoute,
  get2DmConversationsMediaDmIdMediaIdResourceIdRoute,
  get2DmConversationsWithParticipantIdDmEventsRoute,
  get2DmEventsEventIdRoute,
  get2DmEventsRoute,
  get2LikesComplianceStreamRoute,
  get2LikesFirehoseStreamRoute,
  get2LikesSample10StreamRoute,
  get2ListsIdFollowersRoute,
  get2ListsIdMembersRoute,
  get2ListsIdRoute,
  get2ListsIdTweetsRoute,
  get2MediaAmplifyProgramsProgramIdPostsRoute,
  get2MediaAmplifyProgramsProgramIdRoute,
  get2MediaAmplifyProgramsRoute,
  get2MediaAnalyticsRoute,
  get2MediaLibraryCategoriesRoute,
  get2MediaMediaKeyRoute,
  get2MediaRoute,
  get2MediaUploadRoute,
  get2NewsIdRoute,
  get2NewsSearchRoute,
  get2NotesSearchNotesWrittenRoute,
  get2NotesSearchPostsEligibleForNotesRoute,
  get2OpenapiJsonRoute,
  get2PostsDraftsRoute,
  get2RegionRoute,
  get2SourcesIdRoute,
  get2SourcesIdStreamKeyRoute,
  get2SourcesRoute,
  get2SpacesByCreatorIdsRoute,
  get2SpacesIdBuyersRoute,
  get2SpacesIdRoute,
  get2SpacesIdTweetsRoute,
  get2SpacesRoute,
  get2SpacesSearchRoute,
  get2TrendsByWoeidWoeidRoute,
  get2TrendsLocationsRoute,
  get2TweetsAnalyticsRoute,
  get2TweetsComplianceStreamRoute,
  get2TweetsCountsAllRoute,
  get2TweetsCountsRecentRoute,
  get2TweetsFirehoseStreamLangEnRoute,
  get2TweetsFirehoseStreamLangJaRoute,
  get2TweetsFirehoseStreamLangKoRoute,
  get2TweetsFirehoseStreamLangPtRoute,
  get2TweetsFirehoseStreamRoute,
  get2TweetsIdLikingUsersRoute,
  get2TweetsIdQuoteTweetsRoute,
  get2TweetsIdRetweetedByRoute,
  get2TweetsIdRetweetsRoute,
  get2TweetsIdRoute,
  get2TweetsLabelStreamRoute,
  get2TweetsRoute,
  get2TweetsSample10StreamRoute,
  get2TweetsSampleStreamRoute,
  get2TweetsSearchAllRoute,
  get2TweetsSearchRecentRoute,
  get2TweetsSearchStreamRoute,
  get2TweetsSearchStreamRulesCountsRoute,
  get2TweetsSearchStreamRulesRoute,
  get2TweetsSearchWebhooksRoute,
  get2UsageCreditsRoute,
  get2UsageTweetsRoute,
  get2UsersByRoute,
  get2UsersByUsernameUsernameRoute,
  get2UsersComplianceStreamRoute,
  get2UsersIdAffiliatesRoute,
  get2UsersIdBlockingRoute,
  get2UsersIdBookmarksFoldersFolderIdRoute,
  get2UsersIdBookmarksFoldersRoute,
  get2UsersIdBookmarksRoute,
  get2UsersIdBroadcastsBroadcastIdRoute,
  get2UsersIdBroadcastsRoute,
  get2UsersIdFollowedListsRoute,
  get2UsersIdFollowersRoute,
  get2UsersIdFollowingRoute,
  get2UsersIdLikedTweetsRoute,
  get2UsersIdListMembershipsRoute,
  get2UsersIdMentionsRoute,
  get2UsersIdMutingRoute,
  get2UsersIdOwnedListsRoute,
  get2UsersIdPinnedListsRoute,
  get2UsersIdPublicKeysRoute,
  get2UsersIdRoute,
  get2UsersIdSourcesRoute,
  get2UsersIdSourcesSourceIdRoute,
  get2UsersIdTimelinesReverseChronologicalRoute,
  get2UsersIdTweetsRoute,
  get2UsersMeFollowersRoute,
  get2UsersMeFollowingRoute,
  get2UsersMeRoute,
  get2UsersPersonalizedTrendsRoute,
  get2UsersPublicKeysRoute,
  get2UsersRepostsOfMeRoute,
  get2UsersRoute,
  get2UsersSearchRoute,
  get2WebhooksRoute,
  post2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute,
  post2AccountRoute,
  post2ActivitySubscriptionsRoute,
  post2ArticlesArticleIdPublishRoute,
  post2ArticlesDraftRoute,
  post2BotsIdTokenRoute,
  post2BotsRoute,
  post2BroadcastsChatModeratorsRoute,
  post2BroadcastsChatMutesRoute,
  post2BroadcastsIdChatMutesRoute,
  post2BroadcastsIdChatRoute,
  post2BroadcastsRoute,
  post2BroadcastsScheduledIdLiveRoute,
  post2BroadcastsScheduledRoute,
  post2CallsIdJoinRoute,
  post2CallsIdLeaveRoute,
  post2CallsRoute,
  post2CallsScheduledIdRsvpRoute,
  post2CallsScheduledRoute,
  post2ChatConversationsGroupInitializeRoute,
  post2ChatConversationsGroupRoute,
  post2ChatConversationsIdAdminRequestsRoute,
  post2ChatConversationsIdAdminRequestsUserIdApproveRoute,
  post2ChatConversationsIdAdminRequestsUserIdRejectRoute,
  post2ChatConversationsIdAdminsRemoveRoute,
  post2ChatConversationsIdAdminsRoute,
  post2ChatConversationsIdArchiveRoute,
  post2ChatConversationsIdInviteRoute,
  post2ChatConversationsIdJoinRequestsRejectRoute,
  post2ChatConversationsIdJoinRequestsRoute,
  post2ChatConversationsIdKeysRoute,
  post2ChatConversationsIdMembersRemoveRoute,
  post2ChatConversationsIdMembersRoute,
  post2ChatConversationsIdMessagesDeleteRoute,
  post2ChatConversationsIdMessagesRoute,
  post2ChatConversationsIdMuteRoute,
  post2ChatConversationsIdReadRoute,
  post2ChatConversationsIdTypingRoute,
  post2ChatConversationsIdUnreadRoute,
  post2ChatMediaUploadIdAppendRoute,
  post2ChatMediaUploadIdFinalizeRoute,
  post2ChatMediaUploadInitializeRoute,
  post2ChatMessageRequestsIdAcceptRoute,
  post2ComplianceJobsRoute,
  post2DmConversationsDmConversationIdMessagesRoute,
  post2DmConversationsRoute,
  post2DmConversationsWithParticipantIdMessagesRoute,
  post2ListsIdMembersRoute,
  post2ListsRoute,
  post2MediaAmplifyPostsRoute,
  post2MediaLibraryRoute,
  post2MediaMetadataRoute,
  post2MediaSubtitlesRoute,
  post2MediaUploadIdAppendRoute,
  post2MediaUploadIdFinalizeRoute,
  post2MediaUploadInitializeRoute,
  post2MediaUploadRoute,
  post2NotesEvaluateRoute,
  post2NotesRoute,
  post2PostsDraftsRoute,
  post2SourcesRoute,
  post2TweetsRoute,
  post2TweetsSearchStreamRulesRoute,
  post2TweetsSearchWebhooksWebhookIdRoute,
  post2UsersIdBlockingRoute,
  post2UsersIdBookmarksFoldersRoute,
  post2UsersIdBookmarksRoute,
  post2UsersIdBroadcastsRoute,
  post2UsersIdDmBlockRoute,
  post2UsersIdDmUnblockRoute,
  post2UsersIdFollowedListsRoute,
  post2UsersIdFollowingRoute,
  post2UsersIdLikesRoute,
  post2UsersIdMutingRoute,
  post2UsersIdPinnedListsRoute,
  post2UsersIdPublicKeysRoute,
  post2UsersIdRetweetsRoute,
  post2UsersIdSourcesRoute,
  post2WebhooksReplayRoute,
  post2WebhooksRoute,
  put2ActivitySubscriptionsSubscriptionIdRoute,
  put2BotsIdRoute,
  put2BroadcastsIdRoute,
  put2BroadcastsIdStateRoute,
  put2BroadcastsScheduledIdRoute,
  put2CallsScheduledIdRoute,
  put2ChatConversationsIdAdminSettingsRoute,
  put2ChatConversationsIdMessageTtlRoute,
  put2ChatConversationsIdRoute,
  put2ChatConversationsIdScreenCaptureRoute,
  put2ChatSettingsRoute,
  put2ComplianceJobsIdUploadRoute,
  put2ListsIdRoute,
  put2MediaLibraryMediaKeyRoute,
  put2SourcesIdRoute,
  put2TweetsTweetIdHiddenRoute,
  put2UsersIdBroadcastsBroadcastIdStateRoute,
  put2UsersIdSourcesSourceIdRoute,
  put2WebhooksWebhookIdRoute,
} from '../routes'

export const get2AccountRouteHandler: RouteHandler<typeof get2AccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2AccountRouteHandler: RouteHandler<typeof post2AccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2AccountActivitySubscriptionsCountRouteHandler: RouteHandler<
  typeof get2AccountActivitySubscriptionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2AccountActivityWebhooksWebhookIdSubscriptionsAllRouteHandler: RouteHandler<
  typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2AccountActivityWebhooksWebhookIdSubscriptionsAllRouteHandler: RouteHandler<
  typeof post2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2AccountActivityWebhooksWebhookIdSubscriptionsAllListRouteHandler: RouteHandler<
  typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllRouteHandler: RouteHandler<
  typeof delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ActivityStreamRouteHandler: RouteHandler<typeof get2ActivityStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const delete2ActivitySubscriptionsRouteHandler: RouteHandler<
  typeof delete2ActivitySubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ActivitySubscriptionsRouteHandler: RouteHandler<
  typeof get2ActivitySubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ActivitySubscriptionsRouteHandler: RouteHandler<
  typeof post2ActivitySubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ActivitySubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof delete2ActivitySubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2ActivitySubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof put2ActivitySubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ArticlesDraftRouteHandler: RouteHandler<typeof post2ArticlesDraftRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2ArticlesArticleIdPublishRouteHandler: RouteHandler<
  typeof post2ArticlesArticleIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2BotsRouteHandler: RouteHandler<typeof get2BotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2BotsRouteHandler: RouteHandler<typeof post2BotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2BotsIdRouteHandler: RouteHandler<typeof delete2BotsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const put2BotsIdRouteHandler: RouteHandler<typeof put2BotsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2BotsIdTokenRouteHandler: RouteHandler<typeof delete2BotsIdTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2BotsIdTokenRouteHandler: RouteHandler<typeof post2BotsIdTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2BroadcastsRouteHandler: RouteHandler<typeof get2BroadcastsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2BroadcastsRouteHandler: RouteHandler<typeof post2BroadcastsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2BroadcastsCategoriesRouteHandler: RouteHandler<
  typeof get2BroadcastsCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2BroadcastsChatModeratorsRouteHandler: RouteHandler<
  typeof get2BroadcastsChatModeratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2BroadcastsChatModeratorsRouteHandler: RouteHandler<
  typeof post2BroadcastsChatModeratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2BroadcastsChatModeratorsUserIdRouteHandler: RouteHandler<
  typeof delete2BroadcastsChatModeratorsUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2BroadcastsChatMutesRouteHandler: RouteHandler<
  typeof get2BroadcastsChatMutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2BroadcastsChatMutesRouteHandler: RouteHandler<
  typeof post2BroadcastsChatMutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2BroadcastsChatMutesUserIdRouteHandler: RouteHandler<
  typeof delete2BroadcastsChatMutesUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2BroadcastsScheduledRouteHandler: RouteHandler<
  typeof get2BroadcastsScheduledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2BroadcastsScheduledRouteHandler: RouteHandler<
  typeof post2BroadcastsScheduledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2BroadcastsScheduledIdRouteHandler: RouteHandler<
  typeof delete2BroadcastsScheduledIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2BroadcastsScheduledIdRouteHandler: RouteHandler<
  typeof get2BroadcastsScheduledIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2BroadcastsScheduledIdRouteHandler: RouteHandler<
  typeof put2BroadcastsScheduledIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2BroadcastsScheduledIdLiveRouteHandler: RouteHandler<
  typeof post2BroadcastsScheduledIdLiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2BroadcastsIdRouteHandler: RouteHandler<
  typeof delete2BroadcastsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2BroadcastsIdRouteHandler: RouteHandler<typeof get2BroadcastsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const put2BroadcastsIdRouteHandler: RouteHandler<typeof put2BroadcastsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2BroadcastsIdChatRouteHandler: RouteHandler<
  typeof get2BroadcastsIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2BroadcastsIdChatRouteHandler: RouteHandler<
  typeof post2BroadcastsIdChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2BroadcastsIdChatMutesRouteHandler: RouteHandler<
  typeof post2BroadcastsIdChatMutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2BroadcastsIdChatMutesUserIdRouteHandler: RouteHandler<
  typeof delete2BroadcastsIdChatMutesUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2BroadcastsIdChatMessageIdRouteHandler: RouteHandler<
  typeof delete2BroadcastsIdChatMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2BroadcastsIdStateRouteHandler: RouteHandler<
  typeof put2BroadcastsIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2CallsRouteHandler: RouteHandler<typeof post2CallsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2CallsScheduledRouteHandler: RouteHandler<typeof get2CallsScheduledRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2CallsScheduledRouteHandler: RouteHandler<
  typeof post2CallsScheduledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2CallsScheduledIdRouteHandler: RouteHandler<
  typeof delete2CallsScheduledIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2CallsScheduledIdRouteHandler: RouteHandler<
  typeof get2CallsScheduledIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2CallsScheduledIdRouteHandler: RouteHandler<
  typeof put2CallsScheduledIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2CallsScheduledIdRsvpRouteHandler: RouteHandler<
  typeof post2CallsScheduledIdRsvpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2CallsIdRouteHandler: RouteHandler<typeof get2CallsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2CallsIdJoinRouteHandler: RouteHandler<typeof post2CallsIdJoinRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2CallsIdLeaveRouteHandler: RouteHandler<typeof post2CallsIdLeaveRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2ChatConversationsRouteHandler: RouteHandler<
  typeof get2ChatConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsGroupRouteHandler: RouteHandler<
  typeof post2ChatConversationsGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsGroupInitializeRouteHandler: RouteHandler<
  typeof post2ChatConversationsGroupInitializeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ChatConversationsIdRouteHandler: RouteHandler<
  typeof delete2ChatConversationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatConversationsIdRouteHandler: RouteHandler<
  typeof get2ChatConversationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2ChatConversationsIdRouteHandler: RouteHandler<
  typeof put2ChatConversationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatConversationsIdAdminRequestsRouteHandler: RouteHandler<
  typeof get2ChatConversationsIdAdminRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdAdminRequestsRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdAdminRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdAdminRequestsUserIdApproveRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdAdminRequestsUserIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdAdminRequestsUserIdRejectRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdAdminRequestsUserIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2ChatConversationsIdAdminSettingsRouteHandler: RouteHandler<
  typeof put2ChatConversationsIdAdminSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdAdminsRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdAdminsRemoveRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdAdminsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ChatConversationsIdArchiveRouteHandler: RouteHandler<
  typeof delete2ChatConversationsIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdArchiveRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatConversationsIdEventsRouteHandler: RouteHandler<
  typeof get2ChatConversationsIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ChatConversationsIdInviteRouteHandler: RouteHandler<
  typeof delete2ChatConversationsIdInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdInviteRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatConversationsIdInvitesTokenRouteHandler: RouteHandler<
  typeof get2ChatConversationsIdInvitesTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdJoinRequestsRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdJoinRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdJoinRequestsRejectRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdJoinRequestsRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdKeysRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdMembersRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdMembersRemoveRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdMembersRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ChatConversationsIdMessageTtlRouteHandler: RouteHandler<
  typeof delete2ChatConversationsIdMessageTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2ChatConversationsIdMessageTtlRouteHandler: RouteHandler<
  typeof put2ChatConversationsIdMessageTtlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdMessagesRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdMessagesDeleteRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdMessagesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ChatConversationsIdMuteRouteHandler: RouteHandler<
  typeof delete2ChatConversationsIdMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdMuteRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatConversationsIdPinnedMessagesRouteHandler: RouteHandler<
  typeof get2ChatConversationsIdPinnedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdReadRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2ChatConversationsIdScreenCaptureRouteHandler: RouteHandler<
  typeof put2ChatConversationsIdScreenCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdTypingRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdTypingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatConversationsIdUnreadRouteHandler: RouteHandler<
  typeof post2ChatConversationsIdUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatMediaUploadInitializeRouteHandler: RouteHandler<
  typeof post2ChatMediaUploadInitializeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatMediaUploadIdAppendRouteHandler: RouteHandler<
  typeof post2ChatMediaUploadIdAppendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatMediaUploadIdFinalizeRouteHandler: RouteHandler<
  typeof post2ChatMediaUploadIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatMediaIdMediaHashKeyRouteHandler: RouteHandler<
  typeof get2ChatMediaIdMediaHashKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatMessageRequestsRouteHandler: RouteHandler<
  typeof get2ChatMessageRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatMessageRequestsIdRouteHandler: RouteHandler<
  typeof get2ChatMessageRequestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ChatMessageRequestsIdAcceptRouteHandler: RouteHandler<
  typeof post2ChatMessageRequestsIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ChatSettingsRouteHandler: RouteHandler<typeof get2ChatSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const put2ChatSettingsRouteHandler: RouteHandler<typeof put2ChatSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2CommunitiesSearchRouteHandler: RouteHandler<
  typeof get2CommunitiesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2CommunitiesIdRouteHandler: RouteHandler<typeof get2CommunitiesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2ComplianceJobsRouteHandler: RouteHandler<typeof get2ComplianceJobsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2ComplianceJobsRouteHandler: RouteHandler<
  typeof post2ComplianceJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ComplianceJobsIdRouteHandler: RouteHandler<
  typeof delete2ComplianceJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ComplianceJobsIdRouteHandler: RouteHandler<
  typeof get2ComplianceJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ComplianceJobsIdDownloadRouteHandler: RouteHandler<
  typeof get2ComplianceJobsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2ComplianceJobsIdUploadRouteHandler: RouteHandler<
  typeof put2ComplianceJobsIdUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ConnectionsRouteHandler: RouteHandler<typeof delete2ConnectionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2ConnectionsRouteHandler: RouteHandler<typeof get2ConnectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ConnectionsAllRouteHandler: RouteHandler<
  typeof delete2ConnectionsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ConnectionsEndpointIdRouteHandler: RouteHandler<
  typeof delete2ConnectionsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2DmConversationsRouteHandler: RouteHandler<
  typeof post2DmConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2DmConversationsMediaDmIdMediaIdResourceIdRouteHandler: RouteHandler<
  typeof get2DmConversationsMediaDmIdMediaIdResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2DmConversationsWithParticipantIdDmEventsRouteHandler: RouteHandler<
  typeof get2DmConversationsWithParticipantIdDmEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2DmConversationsWithParticipantIdMessagesRouteHandler: RouteHandler<
  typeof post2DmConversationsWithParticipantIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2DmConversationsDmConversationIdMessagesRouteHandler: RouteHandler<
  typeof post2DmConversationsDmConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2DmConversationsIdDmEventsRouteHandler: RouteHandler<
  typeof get2DmConversationsIdDmEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2DmEventsRouteHandler: RouteHandler<typeof get2DmEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2DmEventsEventIdRouteHandler: RouteHandler<
  typeof delete2DmEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2DmEventsEventIdRouteHandler: RouteHandler<
  typeof get2DmEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2LikesComplianceStreamRouteHandler: RouteHandler<
  typeof get2LikesComplianceStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2LikesFirehoseStreamRouteHandler: RouteHandler<
  typeof get2LikesFirehoseStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2LikesSample10StreamRouteHandler: RouteHandler<
  typeof get2LikesSample10StreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2ListsRouteHandler: RouteHandler<typeof post2ListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ListsIdRouteHandler: RouteHandler<typeof delete2ListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ListsIdRouteHandler: RouteHandler<typeof get2ListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const put2ListsIdRouteHandler: RouteHandler<typeof put2ListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ListsIdFollowersRouteHandler: RouteHandler<
  typeof get2ListsIdFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ListsIdMembersRouteHandler: RouteHandler<typeof get2ListsIdMembersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2ListsIdMembersRouteHandler: RouteHandler<
  typeof post2ListsIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2ListsIdMembersUserIdRouteHandler: RouteHandler<
  typeof delete2ListsIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2ListsIdTweetsRouteHandler: RouteHandler<typeof get2ListsIdTweetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2MediaRouteHandler: RouteHandler<typeof get2MediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2MediaAmplifyPostsRouteHandler: RouteHandler<
  typeof post2MediaAmplifyPostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2MediaAmplifyProgramsRouteHandler: RouteHandler<
  typeof get2MediaAmplifyProgramsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2MediaAmplifyProgramsProgramIdRouteHandler: RouteHandler<
  typeof get2MediaAmplifyProgramsProgramIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2MediaAmplifyProgramsProgramIdPostsRouteHandler: RouteHandler<
  typeof get2MediaAmplifyProgramsProgramIdPostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2MediaAnalyticsRouteHandler: RouteHandler<typeof get2MediaAnalyticsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2MediaLibraryRouteHandler: RouteHandler<typeof post2MediaLibraryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2MediaLibraryCategoriesRouteHandler: RouteHandler<
  typeof get2MediaLibraryCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2MediaLibraryMediaKeyRouteHandler: RouteHandler<
  typeof delete2MediaLibraryMediaKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2MediaLibraryMediaKeyRouteHandler: RouteHandler<
  typeof put2MediaLibraryMediaKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2MediaMetadataRouteHandler: RouteHandler<typeof post2MediaMetadataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const delete2MediaSubtitlesRouteHandler: RouteHandler<
  typeof delete2MediaSubtitlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2MediaSubtitlesRouteHandler: RouteHandler<
  typeof post2MediaSubtitlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2MediaUploadRouteHandler: RouteHandler<typeof get2MediaUploadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2MediaUploadRouteHandler: RouteHandler<typeof post2MediaUploadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2MediaUploadInitializeRouteHandler: RouteHandler<
  typeof post2MediaUploadInitializeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2MediaUploadIdAppendRouteHandler: RouteHandler<
  typeof post2MediaUploadIdAppendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2MediaUploadIdFinalizeRouteHandler: RouteHandler<
  typeof post2MediaUploadIdFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2MediaMediaKeyRouteHandler: RouteHandler<typeof get2MediaMediaKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2NewsSearchRouteHandler: RouteHandler<typeof get2NewsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2NewsIdRouteHandler: RouteHandler<typeof get2NewsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2NotesRouteHandler: RouteHandler<typeof post2NotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2NotesEvaluateRouteHandler: RouteHandler<typeof post2NotesEvaluateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2NotesSearchNotesWrittenRouteHandler: RouteHandler<
  typeof get2NotesSearchNotesWrittenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2NotesSearchPostsEligibleForNotesRouteHandler: RouteHandler<
  typeof get2NotesSearchPostsEligibleForNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2NotesIdRouteHandler: RouteHandler<typeof delete2NotesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2OpenapiJsonRouteHandler: RouteHandler<typeof get2OpenapiJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2PostsDraftsRouteHandler: RouteHandler<typeof get2PostsDraftsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2PostsDraftsRouteHandler: RouteHandler<typeof post2PostsDraftsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const delete2PostsDraftsIdRouteHandler: RouteHandler<
  typeof delete2PostsDraftsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2RegionRouteHandler: RouteHandler<typeof get2RegionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2SourcesRouteHandler: RouteHandler<typeof get2SourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2SourcesRouteHandler: RouteHandler<typeof post2SourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2SourcesIdRouteHandler: RouteHandler<typeof delete2SourcesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2SourcesIdRouteHandler: RouteHandler<typeof get2SourcesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const put2SourcesIdRouteHandler: RouteHandler<typeof put2SourcesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2SourcesIdStreamKeyRouteHandler: RouteHandler<
  typeof get2SourcesIdStreamKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2SpacesRouteHandler: RouteHandler<typeof get2SpacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2SpacesByCreatorIdsRouteHandler: RouteHandler<
  typeof get2SpacesByCreatorIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2SpacesSearchRouteHandler: RouteHandler<typeof get2SpacesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2SpacesIdRouteHandler: RouteHandler<typeof get2SpacesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2SpacesIdBuyersRouteHandler: RouteHandler<typeof get2SpacesIdBuyersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2SpacesIdTweetsRouteHandler: RouteHandler<typeof get2SpacesIdTweetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2TrendsByWoeidWoeidRouteHandler: RouteHandler<
  typeof get2TrendsByWoeidWoeidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TrendsLocationsRouteHandler: RouteHandler<
  typeof get2TrendsLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsRouteHandler: RouteHandler<typeof get2TweetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2TweetsRouteHandler: RouteHandler<typeof post2TweetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsAnalyticsRouteHandler: RouteHandler<
  typeof get2TweetsAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsComplianceStreamRouteHandler: RouteHandler<
  typeof get2TweetsComplianceStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsCountsAllRouteHandler: RouteHandler<
  typeof get2TweetsCountsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsCountsRecentRouteHandler: RouteHandler<
  typeof get2TweetsCountsRecentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsFirehoseStreamRouteHandler: RouteHandler<
  typeof get2TweetsFirehoseStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsFirehoseStreamLangEnRouteHandler: RouteHandler<
  typeof get2TweetsFirehoseStreamLangEnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsFirehoseStreamLangJaRouteHandler: RouteHandler<
  typeof get2TweetsFirehoseStreamLangJaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsFirehoseStreamLangKoRouteHandler: RouteHandler<
  typeof get2TweetsFirehoseStreamLangKoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsFirehoseStreamLangPtRouteHandler: RouteHandler<
  typeof get2TweetsFirehoseStreamLangPtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsLabelStreamRouteHandler: RouteHandler<
  typeof get2TweetsLabelStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsSampleStreamRouteHandler: RouteHandler<
  typeof get2TweetsSampleStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsSample10StreamRouteHandler: RouteHandler<
  typeof get2TweetsSample10StreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsSearchAllRouteHandler: RouteHandler<
  typeof get2TweetsSearchAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsSearchRecentRouteHandler: RouteHandler<
  typeof get2TweetsSearchRecentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsSearchStreamRouteHandler: RouteHandler<
  typeof get2TweetsSearchStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsSearchStreamRulesRouteHandler: RouteHandler<
  typeof get2TweetsSearchStreamRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2TweetsSearchStreamRulesRouteHandler: RouteHandler<
  typeof post2TweetsSearchStreamRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsSearchStreamRulesCountsRouteHandler: RouteHandler<
  typeof get2TweetsSearchStreamRulesCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsSearchWebhooksRouteHandler: RouteHandler<
  typeof get2TweetsSearchWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2TweetsSearchWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof delete2TweetsSearchWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2TweetsSearchWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof post2TweetsSearchWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2TweetsIdRouteHandler: RouteHandler<typeof delete2TweetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsIdRouteHandler: RouteHandler<typeof get2TweetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsIdLikingUsersRouteHandler: RouteHandler<
  typeof get2TweetsIdLikingUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsIdQuoteTweetsRouteHandler: RouteHandler<
  typeof get2TweetsIdQuoteTweetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsIdRetweetedByRouteHandler: RouteHandler<
  typeof get2TweetsIdRetweetedByRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2TweetsIdRetweetsRouteHandler: RouteHandler<
  typeof get2TweetsIdRetweetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2TweetsTweetIdHiddenRouteHandler: RouteHandler<
  typeof put2TweetsTweetIdHiddenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsageCreditsRouteHandler: RouteHandler<typeof get2UsageCreditsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2UsageTweetsRouteHandler: RouteHandler<typeof get2UsageTweetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersRouteHandler: RouteHandler<typeof get2UsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersByRouteHandler: RouteHandler<typeof get2UsersByRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersByUsernameUsernameRouteHandler: RouteHandler<
  typeof get2UsersByUsernameUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersComplianceStreamRouteHandler: RouteHandler<
  typeof get2UsersComplianceStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersMeRouteHandler: RouteHandler<typeof get2UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersMeFollowersRouteHandler: RouteHandler<
  typeof get2UsersMeFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersMeFollowingRouteHandler: RouteHandler<
  typeof get2UsersMeFollowingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersPersonalizedTrendsRouteHandler: RouteHandler<
  typeof get2UsersPersonalizedTrendsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersPublicKeysRouteHandler: RouteHandler<
  typeof get2UsersPublicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersRepostsOfMeRouteHandler: RouteHandler<
  typeof get2UsersRepostsOfMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersSearchRouteHandler: RouteHandler<typeof get2UsersSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdRouteHandler: RouteHandler<typeof get2UsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdAffiliatesRouteHandler: RouteHandler<
  typeof get2UsersIdAffiliatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdBlockingRouteHandler: RouteHandler<
  typeof get2UsersIdBlockingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdBlockingRouteHandler: RouteHandler<
  typeof post2UsersIdBlockingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdBookmarksRouteHandler: RouteHandler<
  typeof get2UsersIdBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdBookmarksRouteHandler: RouteHandler<
  typeof post2UsersIdBookmarksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdBookmarksFoldersRouteHandler: RouteHandler<
  typeof get2UsersIdBookmarksFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdBookmarksFoldersRouteHandler: RouteHandler<
  typeof post2UsersIdBookmarksFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdBookmarksFoldersFolderIdRouteHandler: RouteHandler<
  typeof get2UsersIdBookmarksFoldersFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2UsersIdBookmarksTweetIdRouteHandler: RouteHandler<
  typeof delete2UsersIdBookmarksTweetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdBroadcastsRouteHandler: RouteHandler<
  typeof get2UsersIdBroadcastsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdBroadcastsRouteHandler: RouteHandler<
  typeof post2UsersIdBroadcastsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2UsersIdBroadcastsBroadcastIdRouteHandler: RouteHandler<
  typeof delete2UsersIdBroadcastsBroadcastIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdBroadcastsBroadcastIdRouteHandler: RouteHandler<
  typeof get2UsersIdBroadcastsBroadcastIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2UsersIdBroadcastsBroadcastIdStateRouteHandler: RouteHandler<
  typeof put2UsersIdBroadcastsBroadcastIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdDmBlockRouteHandler: RouteHandler<
  typeof post2UsersIdDmBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdDmUnblockRouteHandler: RouteHandler<
  typeof post2UsersIdDmUnblockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdFollowedListsRouteHandler: RouteHandler<
  typeof get2UsersIdFollowedListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdFollowedListsRouteHandler: RouteHandler<
  typeof post2UsersIdFollowedListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2UsersIdFollowedListsListIdRouteHandler: RouteHandler<
  typeof delete2UsersIdFollowedListsListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdFollowersRouteHandler: RouteHandler<
  typeof get2UsersIdFollowersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdFollowingRouteHandler: RouteHandler<
  typeof get2UsersIdFollowingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdFollowingRouteHandler: RouteHandler<
  typeof post2UsersIdFollowingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdLikedTweetsRouteHandler: RouteHandler<
  typeof get2UsersIdLikedTweetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdLikesRouteHandler: RouteHandler<typeof post2UsersIdLikesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const delete2UsersIdLikesTweetIdRouteHandler: RouteHandler<
  typeof delete2UsersIdLikesTweetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdListMembershipsRouteHandler: RouteHandler<
  typeof get2UsersIdListMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdMentionsRouteHandler: RouteHandler<
  typeof get2UsersIdMentionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdMutingRouteHandler: RouteHandler<typeof get2UsersIdMutingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2UsersIdMutingRouteHandler: RouteHandler<typeof post2UsersIdMutingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const get2UsersIdOwnedListsRouteHandler: RouteHandler<
  typeof get2UsersIdOwnedListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdPinnedListsRouteHandler: RouteHandler<
  typeof get2UsersIdPinnedListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdPinnedListsRouteHandler: RouteHandler<
  typeof post2UsersIdPinnedListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2UsersIdPinnedListsListIdRouteHandler: RouteHandler<
  typeof delete2UsersIdPinnedListsListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdPublicKeysRouteHandler: RouteHandler<
  typeof get2UsersIdPublicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdPublicKeysRouteHandler: RouteHandler<
  typeof post2UsersIdPublicKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const post2UsersIdRetweetsRouteHandler: RouteHandler<
  typeof post2UsersIdRetweetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2UsersIdRetweetsSourceTweetIdRouteHandler: RouteHandler<
  typeof delete2UsersIdRetweetsSourceTweetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdSourcesRouteHandler: RouteHandler<typeof get2UsersIdSourcesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const post2UsersIdSourcesRouteHandler: RouteHandler<
  typeof post2UsersIdSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2UsersIdSourcesSourceIdRouteHandler: RouteHandler<
  typeof delete2UsersIdSourcesSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdSourcesSourceIdRouteHandler: RouteHandler<
  typeof get2UsersIdSourcesSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2UsersIdSourcesSourceIdRouteHandler: RouteHandler<
  typeof put2UsersIdSourcesSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdTimelinesReverseChronologicalRouteHandler: RouteHandler<
  typeof get2UsersIdTimelinesReverseChronologicalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2UsersIdTweetsRouteHandler: RouteHandler<typeof get2UsersIdTweetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const delete2UsersSourceUserIdBlockingTargetUserIdRouteHandler: RouteHandler<
  typeof delete2UsersSourceUserIdBlockingTargetUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2UsersSourceUserIdFollowingTargetUserIdRouteHandler: RouteHandler<
  typeof delete2UsersSourceUserIdFollowingTargetUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2UsersSourceUserIdMutingTargetUserIdRouteHandler: RouteHandler<
  typeof delete2UsersSourceUserIdMutingTargetUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const get2WebhooksRouteHandler: RouteHandler<typeof get2WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2WebhooksRouteHandler: RouteHandler<typeof post2WebhooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const post2WebhooksReplayRouteHandler: RouteHandler<
  typeof post2WebhooksReplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const delete2WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof delete2WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const put2WebhooksWebhookIdRouteHandler: RouteHandler<
  typeof put2WebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
