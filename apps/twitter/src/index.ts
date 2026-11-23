import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllRouteHandler,
  delete2ActivitySubscriptionsRouteHandler,
  delete2ActivitySubscriptionsSubscriptionIdRouteHandler,
  delete2BotsIdRouteHandler,
  delete2BotsIdTokenRouteHandler,
  delete2BroadcastsChatModeratorsUserIdRouteHandler,
  delete2BroadcastsChatMutesUserIdRouteHandler,
  delete2BroadcastsIdChatMessageIdRouteHandler,
  delete2BroadcastsIdChatMutesUserIdRouteHandler,
  delete2BroadcastsIdRouteHandler,
  delete2BroadcastsScheduledIdRouteHandler,
  delete2CallsScheduledIdRouteHandler,
  delete2ChatConversationsIdArchiveRouteHandler,
  delete2ChatConversationsIdInviteRouteHandler,
  delete2ChatConversationsIdMessageTtlRouteHandler,
  delete2ChatConversationsIdMuteRouteHandler,
  delete2ChatConversationsIdRouteHandler,
  delete2ComplianceJobsIdRouteHandler,
  delete2ConnectionsAllRouteHandler,
  delete2ConnectionsEndpointIdRouteHandler,
  delete2ConnectionsRouteHandler,
  delete2DmEventsEventIdRouteHandler,
  delete2ListsIdMembersUserIdRouteHandler,
  delete2ListsIdRouteHandler,
  delete2MediaLibraryMediaKeyRouteHandler,
  delete2MediaSubtitlesRouteHandler,
  delete2NotesIdRouteHandler,
  delete2PostsDraftsIdRouteHandler,
  delete2SourcesIdRouteHandler,
  delete2TweetsIdRouteHandler,
  delete2TweetsSearchWebhooksWebhookIdRouteHandler,
  delete2UsersIdBookmarksTweetIdRouteHandler,
  delete2UsersIdBroadcastsBroadcastIdRouteHandler,
  delete2UsersIdFollowedListsListIdRouteHandler,
  delete2UsersIdLikesTweetIdRouteHandler,
  delete2UsersIdPinnedListsListIdRouteHandler,
  delete2UsersIdRetweetsSourceTweetIdRouteHandler,
  delete2UsersIdSourcesSourceIdRouteHandler,
  delete2UsersSourceUserIdBlockingTargetUserIdRouteHandler,
  delete2UsersSourceUserIdFollowingTargetUserIdRouteHandler,
  delete2UsersSourceUserIdMutingTargetUserIdRouteHandler,
  delete2WebhooksWebhookIdRouteHandler,
  get2AccountActivitySubscriptionsCountRouteHandler,
  get2AccountActivityWebhooksWebhookIdSubscriptionsAllListRouteHandler,
  get2AccountActivityWebhooksWebhookIdSubscriptionsAllRouteHandler,
  get2AccountRouteHandler,
  get2ActivityStreamRouteHandler,
  get2ActivitySubscriptionsRouteHandler,
  get2BotsRouteHandler,
  get2BroadcastsCategoriesRouteHandler,
  get2BroadcastsChatModeratorsRouteHandler,
  get2BroadcastsChatMutesRouteHandler,
  get2BroadcastsIdChatRouteHandler,
  get2BroadcastsIdRouteHandler,
  get2BroadcastsRouteHandler,
  get2BroadcastsScheduledIdRouteHandler,
  get2BroadcastsScheduledRouteHandler,
  get2CallsIdRouteHandler,
  get2CallsScheduledIdRouteHandler,
  get2CallsScheduledRouteHandler,
  get2ChatConversationsIdAdminRequestsRouteHandler,
  get2ChatConversationsIdEventsRouteHandler,
  get2ChatConversationsIdInvitesTokenRouteHandler,
  get2ChatConversationsIdPinnedMessagesRouteHandler,
  get2ChatConversationsIdRouteHandler,
  get2ChatConversationsRouteHandler,
  get2ChatMediaIdMediaHashKeyRouteHandler,
  get2ChatMessageRequestsIdRouteHandler,
  get2ChatMessageRequestsRouteHandler,
  get2ChatSettingsRouteHandler,
  get2CommunitiesIdRouteHandler,
  get2CommunitiesSearchRouteHandler,
  get2ComplianceJobsIdDownloadRouteHandler,
  get2ComplianceJobsIdRouteHandler,
  get2ComplianceJobsRouteHandler,
  get2ConnectionsRouteHandler,
  get2DmConversationsIdDmEventsRouteHandler,
  get2DmConversationsMediaDmIdMediaIdResourceIdRouteHandler,
  get2DmConversationsWithParticipantIdDmEventsRouteHandler,
  get2DmEventsEventIdRouteHandler,
  get2DmEventsRouteHandler,
  get2LikesComplianceStreamRouteHandler,
  get2LikesFirehoseStreamRouteHandler,
  get2LikesSample10StreamRouteHandler,
  get2ListsIdFollowersRouteHandler,
  get2ListsIdMembersRouteHandler,
  get2ListsIdRouteHandler,
  get2ListsIdTweetsRouteHandler,
  get2MediaAmplifyProgramsProgramIdPostsRouteHandler,
  get2MediaAmplifyProgramsProgramIdRouteHandler,
  get2MediaAmplifyProgramsRouteHandler,
  get2MediaAnalyticsRouteHandler,
  get2MediaLibraryCategoriesRouteHandler,
  get2MediaMediaKeyRouteHandler,
  get2MediaRouteHandler,
  get2MediaUploadRouteHandler,
  get2NewsIdRouteHandler,
  get2NewsSearchRouteHandler,
  get2NotesSearchNotesWrittenRouteHandler,
  get2NotesSearchPostsEligibleForNotesRouteHandler,
  get2OpenapiJsonRouteHandler,
  get2PostsDraftsRouteHandler,
  get2RegionRouteHandler,
  get2SourcesIdRouteHandler,
  get2SourcesIdStreamKeyRouteHandler,
  get2SourcesRouteHandler,
  get2SpacesByCreatorIdsRouteHandler,
  get2SpacesIdBuyersRouteHandler,
  get2SpacesIdRouteHandler,
  get2SpacesIdTweetsRouteHandler,
  get2SpacesRouteHandler,
  get2SpacesSearchRouteHandler,
  get2TrendsByWoeidWoeidRouteHandler,
  get2TrendsLocationsRouteHandler,
  get2TweetsAnalyticsRouteHandler,
  get2TweetsComplianceStreamRouteHandler,
  get2TweetsCountsAllRouteHandler,
  get2TweetsCountsRecentRouteHandler,
  get2TweetsFirehoseStreamLangEnRouteHandler,
  get2TweetsFirehoseStreamLangJaRouteHandler,
  get2TweetsFirehoseStreamLangKoRouteHandler,
  get2TweetsFirehoseStreamLangPtRouteHandler,
  get2TweetsFirehoseStreamRouteHandler,
  get2TweetsIdLikingUsersRouteHandler,
  get2TweetsIdQuoteTweetsRouteHandler,
  get2TweetsIdRetweetedByRouteHandler,
  get2TweetsIdRetweetsRouteHandler,
  get2TweetsIdRouteHandler,
  get2TweetsLabelStreamRouteHandler,
  get2TweetsRouteHandler,
  get2TweetsSample10StreamRouteHandler,
  get2TweetsSampleStreamRouteHandler,
  get2TweetsSearchAllRouteHandler,
  get2TweetsSearchRecentRouteHandler,
  get2TweetsSearchStreamRouteHandler,
  get2TweetsSearchStreamRulesCountsRouteHandler,
  get2TweetsSearchStreamRulesRouteHandler,
  get2TweetsSearchWebhooksRouteHandler,
  get2UsageCreditsRouteHandler,
  get2UsageTweetsRouteHandler,
  get2UsersByRouteHandler,
  get2UsersByUsernameUsernameRouteHandler,
  get2UsersComplianceStreamRouteHandler,
  get2UsersIdAffiliatesRouteHandler,
  get2UsersIdBlockingRouteHandler,
  get2UsersIdBookmarksFoldersFolderIdRouteHandler,
  get2UsersIdBookmarksFoldersRouteHandler,
  get2UsersIdBookmarksRouteHandler,
  get2UsersIdBroadcastsBroadcastIdRouteHandler,
  get2UsersIdBroadcastsRouteHandler,
  get2UsersIdFollowedListsRouteHandler,
  get2UsersIdFollowersRouteHandler,
  get2UsersIdFollowingRouteHandler,
  get2UsersIdLikedTweetsRouteHandler,
  get2UsersIdListMembershipsRouteHandler,
  get2UsersIdMentionsRouteHandler,
  get2UsersIdMutingRouteHandler,
  get2UsersIdOwnedListsRouteHandler,
  get2UsersIdPinnedListsRouteHandler,
  get2UsersIdPublicKeysRouteHandler,
  get2UsersIdRouteHandler,
  get2UsersIdSourcesRouteHandler,
  get2UsersIdSourcesSourceIdRouteHandler,
  get2UsersIdTimelinesReverseChronologicalRouteHandler,
  get2UsersIdTweetsRouteHandler,
  get2UsersMeFollowersRouteHandler,
  get2UsersMeFollowingRouteHandler,
  get2UsersMeRouteHandler,
  get2UsersPersonalizedTrendsRouteHandler,
  get2UsersPublicKeysRouteHandler,
  get2UsersRepostsOfMeRouteHandler,
  get2UsersRouteHandler,
  get2UsersSearchRouteHandler,
  get2WebhooksRouteHandler,
  post2AccountActivityWebhooksWebhookIdSubscriptionsAllRouteHandler,
  post2AccountRouteHandler,
  post2ActivitySubscriptionsRouteHandler,
  post2ArticlesArticleIdPublishRouteHandler,
  post2ArticlesDraftRouteHandler,
  post2BotsIdTokenRouteHandler,
  post2BotsRouteHandler,
  post2BroadcastsChatModeratorsRouteHandler,
  post2BroadcastsChatMutesRouteHandler,
  post2BroadcastsIdChatMutesRouteHandler,
  post2BroadcastsIdChatRouteHandler,
  post2BroadcastsRouteHandler,
  post2BroadcastsScheduledIdLiveRouteHandler,
  post2BroadcastsScheduledRouteHandler,
  post2CallsIdJoinRouteHandler,
  post2CallsIdLeaveRouteHandler,
  post2CallsRouteHandler,
  post2CallsScheduledIdRsvpRouteHandler,
  post2CallsScheduledRouteHandler,
  post2ChatConversationsGroupInitializeRouteHandler,
  post2ChatConversationsGroupRouteHandler,
  post2ChatConversationsIdAdminRequestsRouteHandler,
  post2ChatConversationsIdAdminRequestsUserIdApproveRouteHandler,
  post2ChatConversationsIdAdminRequestsUserIdRejectRouteHandler,
  post2ChatConversationsIdAdminsRemoveRouteHandler,
  post2ChatConversationsIdAdminsRouteHandler,
  post2ChatConversationsIdArchiveRouteHandler,
  post2ChatConversationsIdInviteRouteHandler,
  post2ChatConversationsIdJoinRequestsRejectRouteHandler,
  post2ChatConversationsIdJoinRequestsRouteHandler,
  post2ChatConversationsIdKeysRouteHandler,
  post2ChatConversationsIdMembersRemoveRouteHandler,
  post2ChatConversationsIdMembersRouteHandler,
  post2ChatConversationsIdMessagesDeleteRouteHandler,
  post2ChatConversationsIdMessagesRouteHandler,
  post2ChatConversationsIdMuteRouteHandler,
  post2ChatConversationsIdReadRouteHandler,
  post2ChatConversationsIdTypingRouteHandler,
  post2ChatConversationsIdUnreadRouteHandler,
  post2ChatMediaUploadIdAppendRouteHandler,
  post2ChatMediaUploadIdFinalizeRouteHandler,
  post2ChatMediaUploadInitializeRouteHandler,
  post2ChatMessageRequestsIdAcceptRouteHandler,
  post2ComplianceJobsRouteHandler,
  post2DmConversationsDmConversationIdMessagesRouteHandler,
  post2DmConversationsRouteHandler,
  post2DmConversationsWithParticipantIdMessagesRouteHandler,
  post2ListsIdMembersRouteHandler,
  post2ListsRouteHandler,
  post2MediaAmplifyPostsRouteHandler,
  post2MediaLibraryRouteHandler,
  post2MediaMetadataRouteHandler,
  post2MediaSubtitlesRouteHandler,
  post2MediaUploadIdAppendRouteHandler,
  post2MediaUploadIdFinalizeRouteHandler,
  post2MediaUploadInitializeRouteHandler,
  post2MediaUploadRouteHandler,
  post2NotesEvaluateRouteHandler,
  post2NotesRouteHandler,
  post2PostsDraftsRouteHandler,
  post2SourcesRouteHandler,
  post2TweetsRouteHandler,
  post2TweetsSearchStreamRulesRouteHandler,
  post2TweetsSearchWebhooksWebhookIdRouteHandler,
  post2UsersIdBlockingRouteHandler,
  post2UsersIdBookmarksFoldersRouteHandler,
  post2UsersIdBookmarksRouteHandler,
  post2UsersIdBroadcastsRouteHandler,
  post2UsersIdDmBlockRouteHandler,
  post2UsersIdDmUnblockRouteHandler,
  post2UsersIdFollowedListsRouteHandler,
  post2UsersIdFollowingRouteHandler,
  post2UsersIdLikesRouteHandler,
  post2UsersIdMutingRouteHandler,
  post2UsersIdPinnedListsRouteHandler,
  post2UsersIdPublicKeysRouteHandler,
  post2UsersIdRetweetsRouteHandler,
  post2UsersIdSourcesRouteHandler,
  post2WebhooksReplayRouteHandler,
  post2WebhooksRouteHandler,
  put2ActivitySubscriptionsSubscriptionIdRouteHandler,
  put2BotsIdRouteHandler,
  put2BroadcastsIdRouteHandler,
  put2BroadcastsIdStateRouteHandler,
  put2BroadcastsScheduledIdRouteHandler,
  put2CallsScheduledIdRouteHandler,
  put2ChatConversationsIdAdminSettingsRouteHandler,
  put2ChatConversationsIdMessageTtlRouteHandler,
  put2ChatConversationsIdRouteHandler,
  put2ChatConversationsIdScreenCaptureRouteHandler,
  put2ChatSettingsRouteHandler,
  put2ComplianceJobsIdUploadRouteHandler,
  put2ListsIdRouteHandler,
  put2MediaLibraryMediaKeyRouteHandler,
  put2SourcesIdRouteHandler,
  put2TweetsTweetIdHiddenRouteHandler,
  put2UsersIdBroadcastsBroadcastIdStateRouteHandler,
  put2UsersIdSourcesSourceIdRouteHandler,
  put2WebhooksWebhookIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(get2AccountRoute, get2AccountRouteHandler)
  .openapi(post2AccountRoute, post2AccountRouteHandler)
  .openapi(
    get2AccountActivitySubscriptionsCountRoute,
    get2AccountActivitySubscriptionsCountRouteHandler,
  )
  .openapi(
    get2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute,
    get2AccountActivityWebhooksWebhookIdSubscriptionsAllRouteHandler,
  )
  .openapi(
    post2AccountActivityWebhooksWebhookIdSubscriptionsAllRoute,
    post2AccountActivityWebhooksWebhookIdSubscriptionsAllRouteHandler,
  )
  .openapi(
    get2AccountActivityWebhooksWebhookIdSubscriptionsAllListRoute,
    get2AccountActivityWebhooksWebhookIdSubscriptionsAllListRouteHandler,
  )
  .openapi(
    delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllRoute,
    delete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllRouteHandler,
  )
  .openapi(get2ActivityStreamRoute, get2ActivityStreamRouteHandler)
  .openapi(delete2ActivitySubscriptionsRoute, delete2ActivitySubscriptionsRouteHandler)
  .openapi(get2ActivitySubscriptionsRoute, get2ActivitySubscriptionsRouteHandler)
  .openapi(post2ActivitySubscriptionsRoute, post2ActivitySubscriptionsRouteHandler)
  .openapi(
    delete2ActivitySubscriptionsSubscriptionIdRoute,
    delete2ActivitySubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    put2ActivitySubscriptionsSubscriptionIdRoute,
    put2ActivitySubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(post2ArticlesDraftRoute, post2ArticlesDraftRouteHandler)
  .openapi(post2ArticlesArticleIdPublishRoute, post2ArticlesArticleIdPublishRouteHandler)
  .openapi(get2BotsRoute, get2BotsRouteHandler)
  .openapi(post2BotsRoute, post2BotsRouteHandler)
  .openapi(delete2BotsIdRoute, delete2BotsIdRouteHandler)
  .openapi(put2BotsIdRoute, put2BotsIdRouteHandler)
  .openapi(delete2BotsIdTokenRoute, delete2BotsIdTokenRouteHandler)
  .openapi(post2BotsIdTokenRoute, post2BotsIdTokenRouteHandler)
  .openapi(get2BroadcastsRoute, get2BroadcastsRouteHandler)
  .openapi(post2BroadcastsRoute, post2BroadcastsRouteHandler)
  .openapi(get2BroadcastsCategoriesRoute, get2BroadcastsCategoriesRouteHandler)
  .openapi(get2BroadcastsChatModeratorsRoute, get2BroadcastsChatModeratorsRouteHandler)
  .openapi(post2BroadcastsChatModeratorsRoute, post2BroadcastsChatModeratorsRouteHandler)
  .openapi(
    delete2BroadcastsChatModeratorsUserIdRoute,
    delete2BroadcastsChatModeratorsUserIdRouteHandler,
  )
  .openapi(get2BroadcastsChatMutesRoute, get2BroadcastsChatMutesRouteHandler)
  .openapi(post2BroadcastsChatMutesRoute, post2BroadcastsChatMutesRouteHandler)
  .openapi(delete2BroadcastsChatMutesUserIdRoute, delete2BroadcastsChatMutesUserIdRouteHandler)
  .openapi(get2BroadcastsScheduledRoute, get2BroadcastsScheduledRouteHandler)
  .openapi(post2BroadcastsScheduledRoute, post2BroadcastsScheduledRouteHandler)
  .openapi(delete2BroadcastsScheduledIdRoute, delete2BroadcastsScheduledIdRouteHandler)
  .openapi(get2BroadcastsScheduledIdRoute, get2BroadcastsScheduledIdRouteHandler)
  .openapi(put2BroadcastsScheduledIdRoute, put2BroadcastsScheduledIdRouteHandler)
  .openapi(post2BroadcastsScheduledIdLiveRoute, post2BroadcastsScheduledIdLiveRouteHandler)
  .openapi(delete2BroadcastsIdRoute, delete2BroadcastsIdRouteHandler)
  .openapi(get2BroadcastsIdRoute, get2BroadcastsIdRouteHandler)
  .openapi(put2BroadcastsIdRoute, put2BroadcastsIdRouteHandler)
  .openapi(get2BroadcastsIdChatRoute, get2BroadcastsIdChatRouteHandler)
  .openapi(post2BroadcastsIdChatRoute, post2BroadcastsIdChatRouteHandler)
  .openapi(post2BroadcastsIdChatMutesRoute, post2BroadcastsIdChatMutesRouteHandler)
  .openapi(delete2BroadcastsIdChatMutesUserIdRoute, delete2BroadcastsIdChatMutesUserIdRouteHandler)
  .openapi(delete2BroadcastsIdChatMessageIdRoute, delete2BroadcastsIdChatMessageIdRouteHandler)
  .openapi(put2BroadcastsIdStateRoute, put2BroadcastsIdStateRouteHandler)
  .openapi(post2CallsRoute, post2CallsRouteHandler)
  .openapi(get2CallsScheduledRoute, get2CallsScheduledRouteHandler)
  .openapi(post2CallsScheduledRoute, post2CallsScheduledRouteHandler)
  .openapi(delete2CallsScheduledIdRoute, delete2CallsScheduledIdRouteHandler)
  .openapi(get2CallsScheduledIdRoute, get2CallsScheduledIdRouteHandler)
  .openapi(put2CallsScheduledIdRoute, put2CallsScheduledIdRouteHandler)
  .openapi(post2CallsScheduledIdRsvpRoute, post2CallsScheduledIdRsvpRouteHandler)
  .openapi(get2CallsIdRoute, get2CallsIdRouteHandler)
  .openapi(post2CallsIdJoinRoute, post2CallsIdJoinRouteHandler)
  .openapi(post2CallsIdLeaveRoute, post2CallsIdLeaveRouteHandler)
  .openapi(get2ChatConversationsRoute, get2ChatConversationsRouteHandler)
  .openapi(post2ChatConversationsGroupRoute, post2ChatConversationsGroupRouteHandler)
  .openapi(
    post2ChatConversationsGroupInitializeRoute,
    post2ChatConversationsGroupInitializeRouteHandler,
  )
  .openapi(delete2ChatConversationsIdRoute, delete2ChatConversationsIdRouteHandler)
  .openapi(get2ChatConversationsIdRoute, get2ChatConversationsIdRouteHandler)
  .openapi(put2ChatConversationsIdRoute, put2ChatConversationsIdRouteHandler)
  .openapi(
    get2ChatConversationsIdAdminRequestsRoute,
    get2ChatConversationsIdAdminRequestsRouteHandler,
  )
  .openapi(
    post2ChatConversationsIdAdminRequestsRoute,
    post2ChatConversationsIdAdminRequestsRouteHandler,
  )
  .openapi(
    post2ChatConversationsIdAdminRequestsUserIdApproveRoute,
    post2ChatConversationsIdAdminRequestsUserIdApproveRouteHandler,
  )
  .openapi(
    post2ChatConversationsIdAdminRequestsUserIdRejectRoute,
    post2ChatConversationsIdAdminRequestsUserIdRejectRouteHandler,
  )
  .openapi(
    put2ChatConversationsIdAdminSettingsRoute,
    put2ChatConversationsIdAdminSettingsRouteHandler,
  )
  .openapi(post2ChatConversationsIdAdminsRoute, post2ChatConversationsIdAdminsRouteHandler)
  .openapi(
    post2ChatConversationsIdAdminsRemoveRoute,
    post2ChatConversationsIdAdminsRemoveRouteHandler,
  )
  .openapi(delete2ChatConversationsIdArchiveRoute, delete2ChatConversationsIdArchiveRouteHandler)
  .openapi(post2ChatConversationsIdArchiveRoute, post2ChatConversationsIdArchiveRouteHandler)
  .openapi(get2ChatConversationsIdEventsRoute, get2ChatConversationsIdEventsRouteHandler)
  .openapi(delete2ChatConversationsIdInviteRoute, delete2ChatConversationsIdInviteRouteHandler)
  .openapi(post2ChatConversationsIdInviteRoute, post2ChatConversationsIdInviteRouteHandler)
  .openapi(
    get2ChatConversationsIdInvitesTokenRoute,
    get2ChatConversationsIdInvitesTokenRouteHandler,
  )
  .openapi(
    post2ChatConversationsIdJoinRequestsRoute,
    post2ChatConversationsIdJoinRequestsRouteHandler,
  )
  .openapi(
    post2ChatConversationsIdJoinRequestsRejectRoute,
    post2ChatConversationsIdJoinRequestsRejectRouteHandler,
  )
  .openapi(post2ChatConversationsIdKeysRoute, post2ChatConversationsIdKeysRouteHandler)
  .openapi(post2ChatConversationsIdMembersRoute, post2ChatConversationsIdMembersRouteHandler)
  .openapi(
    post2ChatConversationsIdMembersRemoveRoute,
    post2ChatConversationsIdMembersRemoveRouteHandler,
  )
  .openapi(
    delete2ChatConversationsIdMessageTtlRoute,
    delete2ChatConversationsIdMessageTtlRouteHandler,
  )
  .openapi(put2ChatConversationsIdMessageTtlRoute, put2ChatConversationsIdMessageTtlRouteHandler)
  .openapi(post2ChatConversationsIdMessagesRoute, post2ChatConversationsIdMessagesRouteHandler)
  .openapi(
    post2ChatConversationsIdMessagesDeleteRoute,
    post2ChatConversationsIdMessagesDeleteRouteHandler,
  )
  .openapi(delete2ChatConversationsIdMuteRoute, delete2ChatConversationsIdMuteRouteHandler)
  .openapi(post2ChatConversationsIdMuteRoute, post2ChatConversationsIdMuteRouteHandler)
  .openapi(
    get2ChatConversationsIdPinnedMessagesRoute,
    get2ChatConversationsIdPinnedMessagesRouteHandler,
  )
  .openapi(post2ChatConversationsIdReadRoute, post2ChatConversationsIdReadRouteHandler)
  .openapi(
    put2ChatConversationsIdScreenCaptureRoute,
    put2ChatConversationsIdScreenCaptureRouteHandler,
  )
  .openapi(post2ChatConversationsIdTypingRoute, post2ChatConversationsIdTypingRouteHandler)
  .openapi(post2ChatConversationsIdUnreadRoute, post2ChatConversationsIdUnreadRouteHandler)
  .openapi(post2ChatMediaUploadInitializeRoute, post2ChatMediaUploadInitializeRouteHandler)
  .openapi(post2ChatMediaUploadIdAppendRoute, post2ChatMediaUploadIdAppendRouteHandler)
  .openapi(post2ChatMediaUploadIdFinalizeRoute, post2ChatMediaUploadIdFinalizeRouteHandler)
  .openapi(get2ChatMediaIdMediaHashKeyRoute, get2ChatMediaIdMediaHashKeyRouteHandler)
  .openapi(get2ChatMessageRequestsRoute, get2ChatMessageRequestsRouteHandler)
  .openapi(get2ChatMessageRequestsIdRoute, get2ChatMessageRequestsIdRouteHandler)
  .openapi(post2ChatMessageRequestsIdAcceptRoute, post2ChatMessageRequestsIdAcceptRouteHandler)
  .openapi(get2ChatSettingsRoute, get2ChatSettingsRouteHandler)
  .openapi(put2ChatSettingsRoute, put2ChatSettingsRouteHandler)
  .openapi(get2CommunitiesSearchRoute, get2CommunitiesSearchRouteHandler)
  .openapi(get2CommunitiesIdRoute, get2CommunitiesIdRouteHandler)
  .openapi(get2ComplianceJobsRoute, get2ComplianceJobsRouteHandler)
  .openapi(post2ComplianceJobsRoute, post2ComplianceJobsRouteHandler)
  .openapi(delete2ComplianceJobsIdRoute, delete2ComplianceJobsIdRouteHandler)
  .openapi(get2ComplianceJobsIdRoute, get2ComplianceJobsIdRouteHandler)
  .openapi(get2ComplianceJobsIdDownloadRoute, get2ComplianceJobsIdDownloadRouteHandler)
  .openapi(put2ComplianceJobsIdUploadRoute, put2ComplianceJobsIdUploadRouteHandler)
  .openapi(delete2ConnectionsRoute, delete2ConnectionsRouteHandler)
  .openapi(get2ConnectionsRoute, get2ConnectionsRouteHandler)
  .openapi(delete2ConnectionsAllRoute, delete2ConnectionsAllRouteHandler)
  .openapi(delete2ConnectionsEndpointIdRoute, delete2ConnectionsEndpointIdRouteHandler)
  .openapi(post2DmConversationsRoute, post2DmConversationsRouteHandler)
  .openapi(
    get2DmConversationsMediaDmIdMediaIdResourceIdRoute,
    get2DmConversationsMediaDmIdMediaIdResourceIdRouteHandler,
  )
  .openapi(
    get2DmConversationsWithParticipantIdDmEventsRoute,
    get2DmConversationsWithParticipantIdDmEventsRouteHandler,
  )
  .openapi(
    post2DmConversationsWithParticipantIdMessagesRoute,
    post2DmConversationsWithParticipantIdMessagesRouteHandler,
  )
  .openapi(
    post2DmConversationsDmConversationIdMessagesRoute,
    post2DmConversationsDmConversationIdMessagesRouteHandler,
  )
  .openapi(get2DmConversationsIdDmEventsRoute, get2DmConversationsIdDmEventsRouteHandler)
  .openapi(get2DmEventsRoute, get2DmEventsRouteHandler)
  .openapi(delete2DmEventsEventIdRoute, delete2DmEventsEventIdRouteHandler)
  .openapi(get2DmEventsEventIdRoute, get2DmEventsEventIdRouteHandler)
  .openapi(get2LikesComplianceStreamRoute, get2LikesComplianceStreamRouteHandler)
  .openapi(get2LikesFirehoseStreamRoute, get2LikesFirehoseStreamRouteHandler)
  .openapi(get2LikesSample10StreamRoute, get2LikesSample10StreamRouteHandler)
  .openapi(post2ListsRoute, post2ListsRouteHandler)
  .openapi(delete2ListsIdRoute, delete2ListsIdRouteHandler)
  .openapi(get2ListsIdRoute, get2ListsIdRouteHandler)
  .openapi(put2ListsIdRoute, put2ListsIdRouteHandler)
  .openapi(get2ListsIdFollowersRoute, get2ListsIdFollowersRouteHandler)
  .openapi(get2ListsIdMembersRoute, get2ListsIdMembersRouteHandler)
  .openapi(post2ListsIdMembersRoute, post2ListsIdMembersRouteHandler)
  .openapi(delete2ListsIdMembersUserIdRoute, delete2ListsIdMembersUserIdRouteHandler)
  .openapi(get2ListsIdTweetsRoute, get2ListsIdTweetsRouteHandler)
  .openapi(get2MediaRoute, get2MediaRouteHandler)
  .openapi(post2MediaAmplifyPostsRoute, post2MediaAmplifyPostsRouteHandler)
  .openapi(get2MediaAmplifyProgramsRoute, get2MediaAmplifyProgramsRouteHandler)
  .openapi(get2MediaAmplifyProgramsProgramIdRoute, get2MediaAmplifyProgramsProgramIdRouteHandler)
  .openapi(
    get2MediaAmplifyProgramsProgramIdPostsRoute,
    get2MediaAmplifyProgramsProgramIdPostsRouteHandler,
  )
  .openapi(get2MediaAnalyticsRoute, get2MediaAnalyticsRouteHandler)
  .openapi(post2MediaLibraryRoute, post2MediaLibraryRouteHandler)
  .openapi(get2MediaLibraryCategoriesRoute, get2MediaLibraryCategoriesRouteHandler)
  .openapi(delete2MediaLibraryMediaKeyRoute, delete2MediaLibraryMediaKeyRouteHandler)
  .openapi(put2MediaLibraryMediaKeyRoute, put2MediaLibraryMediaKeyRouteHandler)
  .openapi(post2MediaMetadataRoute, post2MediaMetadataRouteHandler)
  .openapi(delete2MediaSubtitlesRoute, delete2MediaSubtitlesRouteHandler)
  .openapi(post2MediaSubtitlesRoute, post2MediaSubtitlesRouteHandler)
  .openapi(get2MediaUploadRoute, get2MediaUploadRouteHandler)
  .openapi(post2MediaUploadRoute, post2MediaUploadRouteHandler)
  .openapi(post2MediaUploadInitializeRoute, post2MediaUploadInitializeRouteHandler)
  .openapi(post2MediaUploadIdAppendRoute, post2MediaUploadIdAppendRouteHandler)
  .openapi(post2MediaUploadIdFinalizeRoute, post2MediaUploadIdFinalizeRouteHandler)
  .openapi(get2MediaMediaKeyRoute, get2MediaMediaKeyRouteHandler)
  .openapi(get2NewsSearchRoute, get2NewsSearchRouteHandler)
  .openapi(get2NewsIdRoute, get2NewsIdRouteHandler)
  .openapi(post2NotesRoute, post2NotesRouteHandler)
  .openapi(post2NotesEvaluateRoute, post2NotesEvaluateRouteHandler)
  .openapi(get2NotesSearchNotesWrittenRoute, get2NotesSearchNotesWrittenRouteHandler)
  .openapi(
    get2NotesSearchPostsEligibleForNotesRoute,
    get2NotesSearchPostsEligibleForNotesRouteHandler,
  )
  .openapi(delete2NotesIdRoute, delete2NotesIdRouteHandler)
  .openapi(get2OpenapiJsonRoute, get2OpenapiJsonRouteHandler)
  .openapi(get2PostsDraftsRoute, get2PostsDraftsRouteHandler)
  .openapi(post2PostsDraftsRoute, post2PostsDraftsRouteHandler)
  .openapi(delete2PostsDraftsIdRoute, delete2PostsDraftsIdRouteHandler)
  .openapi(get2RegionRoute, get2RegionRouteHandler)
  .openapi(get2SourcesRoute, get2SourcesRouteHandler)
  .openapi(post2SourcesRoute, post2SourcesRouteHandler)
  .openapi(delete2SourcesIdRoute, delete2SourcesIdRouteHandler)
  .openapi(get2SourcesIdRoute, get2SourcesIdRouteHandler)
  .openapi(put2SourcesIdRoute, put2SourcesIdRouteHandler)
  .openapi(get2SourcesIdStreamKeyRoute, get2SourcesIdStreamKeyRouteHandler)
  .openapi(get2SpacesRoute, get2SpacesRouteHandler)
  .openapi(get2SpacesByCreatorIdsRoute, get2SpacesByCreatorIdsRouteHandler)
  .openapi(get2SpacesSearchRoute, get2SpacesSearchRouteHandler)
  .openapi(get2SpacesIdRoute, get2SpacesIdRouteHandler)
  .openapi(get2SpacesIdBuyersRoute, get2SpacesIdBuyersRouteHandler)
  .openapi(get2SpacesIdTweetsRoute, get2SpacesIdTweetsRouteHandler)
  .openapi(get2TrendsByWoeidWoeidRoute, get2TrendsByWoeidWoeidRouteHandler)
  .openapi(get2TrendsLocationsRoute, get2TrendsLocationsRouteHandler)
  .openapi(get2TweetsRoute, get2TweetsRouteHandler)
  .openapi(post2TweetsRoute, post2TweetsRouteHandler)
  .openapi(get2TweetsAnalyticsRoute, get2TweetsAnalyticsRouteHandler)
  .openapi(get2TweetsComplianceStreamRoute, get2TweetsComplianceStreamRouteHandler)
  .openapi(get2TweetsCountsAllRoute, get2TweetsCountsAllRouteHandler)
  .openapi(get2TweetsCountsRecentRoute, get2TweetsCountsRecentRouteHandler)
  .openapi(get2TweetsFirehoseStreamRoute, get2TweetsFirehoseStreamRouteHandler)
  .openapi(get2TweetsFirehoseStreamLangEnRoute, get2TweetsFirehoseStreamLangEnRouteHandler)
  .openapi(get2TweetsFirehoseStreamLangJaRoute, get2TweetsFirehoseStreamLangJaRouteHandler)
  .openapi(get2TweetsFirehoseStreamLangKoRoute, get2TweetsFirehoseStreamLangKoRouteHandler)
  .openapi(get2TweetsFirehoseStreamLangPtRoute, get2TweetsFirehoseStreamLangPtRouteHandler)
  .openapi(get2TweetsLabelStreamRoute, get2TweetsLabelStreamRouteHandler)
  .openapi(get2TweetsSampleStreamRoute, get2TweetsSampleStreamRouteHandler)
  .openapi(get2TweetsSample10StreamRoute, get2TweetsSample10StreamRouteHandler)
  .openapi(get2TweetsSearchAllRoute, get2TweetsSearchAllRouteHandler)
  .openapi(get2TweetsSearchRecentRoute, get2TweetsSearchRecentRouteHandler)
  .openapi(get2TweetsSearchStreamRoute, get2TweetsSearchStreamRouteHandler)
  .openapi(get2TweetsSearchStreamRulesRoute, get2TweetsSearchStreamRulesRouteHandler)
  .openapi(post2TweetsSearchStreamRulesRoute, post2TweetsSearchStreamRulesRouteHandler)
  .openapi(get2TweetsSearchStreamRulesCountsRoute, get2TweetsSearchStreamRulesCountsRouteHandler)
  .openapi(get2TweetsSearchWebhooksRoute, get2TweetsSearchWebhooksRouteHandler)
  .openapi(
    delete2TweetsSearchWebhooksWebhookIdRoute,
    delete2TweetsSearchWebhooksWebhookIdRouteHandler,
  )
  .openapi(post2TweetsSearchWebhooksWebhookIdRoute, post2TweetsSearchWebhooksWebhookIdRouteHandler)
  .openapi(delete2TweetsIdRoute, delete2TweetsIdRouteHandler)
  .openapi(get2TweetsIdRoute, get2TweetsIdRouteHandler)
  .openapi(get2TweetsIdLikingUsersRoute, get2TweetsIdLikingUsersRouteHandler)
  .openapi(get2TweetsIdQuoteTweetsRoute, get2TweetsIdQuoteTweetsRouteHandler)
  .openapi(get2TweetsIdRetweetedByRoute, get2TweetsIdRetweetedByRouteHandler)
  .openapi(get2TweetsIdRetweetsRoute, get2TweetsIdRetweetsRouteHandler)
  .openapi(put2TweetsTweetIdHiddenRoute, put2TweetsTweetIdHiddenRouteHandler)
  .openapi(get2UsageCreditsRoute, get2UsageCreditsRouteHandler)
  .openapi(get2UsageTweetsRoute, get2UsageTweetsRouteHandler)
  .openapi(get2UsersRoute, get2UsersRouteHandler)
  .openapi(get2UsersByRoute, get2UsersByRouteHandler)
  .openapi(get2UsersByUsernameUsernameRoute, get2UsersByUsernameUsernameRouteHandler)
  .openapi(get2UsersComplianceStreamRoute, get2UsersComplianceStreamRouteHandler)
  .openapi(get2UsersMeRoute, get2UsersMeRouteHandler)
  .openapi(get2UsersMeFollowersRoute, get2UsersMeFollowersRouteHandler)
  .openapi(get2UsersMeFollowingRoute, get2UsersMeFollowingRouteHandler)
  .openapi(get2UsersPersonalizedTrendsRoute, get2UsersPersonalizedTrendsRouteHandler)
  .openapi(get2UsersPublicKeysRoute, get2UsersPublicKeysRouteHandler)
  .openapi(get2UsersRepostsOfMeRoute, get2UsersRepostsOfMeRouteHandler)
  .openapi(get2UsersSearchRoute, get2UsersSearchRouteHandler)
  .openapi(get2UsersIdRoute, get2UsersIdRouteHandler)
  .openapi(get2UsersIdAffiliatesRoute, get2UsersIdAffiliatesRouteHandler)
  .openapi(get2UsersIdBlockingRoute, get2UsersIdBlockingRouteHandler)
  .openapi(post2UsersIdBlockingRoute, post2UsersIdBlockingRouteHandler)
  .openapi(get2UsersIdBookmarksRoute, get2UsersIdBookmarksRouteHandler)
  .openapi(post2UsersIdBookmarksRoute, post2UsersIdBookmarksRouteHandler)
  .openapi(get2UsersIdBookmarksFoldersRoute, get2UsersIdBookmarksFoldersRouteHandler)
  .openapi(post2UsersIdBookmarksFoldersRoute, post2UsersIdBookmarksFoldersRouteHandler)
  .openapi(
    get2UsersIdBookmarksFoldersFolderIdRoute,
    get2UsersIdBookmarksFoldersFolderIdRouteHandler,
  )
  .openapi(delete2UsersIdBookmarksTweetIdRoute, delete2UsersIdBookmarksTweetIdRouteHandler)
  .openapi(get2UsersIdBroadcastsRoute, get2UsersIdBroadcastsRouteHandler)
  .openapi(post2UsersIdBroadcastsRoute, post2UsersIdBroadcastsRouteHandler)
  .openapi(
    delete2UsersIdBroadcastsBroadcastIdRoute,
    delete2UsersIdBroadcastsBroadcastIdRouteHandler,
  )
  .openapi(get2UsersIdBroadcastsBroadcastIdRoute, get2UsersIdBroadcastsBroadcastIdRouteHandler)
  .openapi(
    put2UsersIdBroadcastsBroadcastIdStateRoute,
    put2UsersIdBroadcastsBroadcastIdStateRouteHandler,
  )
  .openapi(post2UsersIdDmBlockRoute, post2UsersIdDmBlockRouteHandler)
  .openapi(post2UsersIdDmUnblockRoute, post2UsersIdDmUnblockRouteHandler)
  .openapi(get2UsersIdFollowedListsRoute, get2UsersIdFollowedListsRouteHandler)
  .openapi(post2UsersIdFollowedListsRoute, post2UsersIdFollowedListsRouteHandler)
  .openapi(delete2UsersIdFollowedListsListIdRoute, delete2UsersIdFollowedListsListIdRouteHandler)
  .openapi(get2UsersIdFollowersRoute, get2UsersIdFollowersRouteHandler)
  .openapi(get2UsersIdFollowingRoute, get2UsersIdFollowingRouteHandler)
  .openapi(post2UsersIdFollowingRoute, post2UsersIdFollowingRouteHandler)
  .openapi(get2UsersIdLikedTweetsRoute, get2UsersIdLikedTweetsRouteHandler)
  .openapi(post2UsersIdLikesRoute, post2UsersIdLikesRouteHandler)
  .openapi(delete2UsersIdLikesTweetIdRoute, delete2UsersIdLikesTweetIdRouteHandler)
  .openapi(get2UsersIdListMembershipsRoute, get2UsersIdListMembershipsRouteHandler)
  .openapi(get2UsersIdMentionsRoute, get2UsersIdMentionsRouteHandler)
  .openapi(get2UsersIdMutingRoute, get2UsersIdMutingRouteHandler)
  .openapi(post2UsersIdMutingRoute, post2UsersIdMutingRouteHandler)
  .openapi(get2UsersIdOwnedListsRoute, get2UsersIdOwnedListsRouteHandler)
  .openapi(get2UsersIdPinnedListsRoute, get2UsersIdPinnedListsRouteHandler)
  .openapi(post2UsersIdPinnedListsRoute, post2UsersIdPinnedListsRouteHandler)
  .openapi(delete2UsersIdPinnedListsListIdRoute, delete2UsersIdPinnedListsListIdRouteHandler)
  .openapi(get2UsersIdPublicKeysRoute, get2UsersIdPublicKeysRouteHandler)
  .openapi(post2UsersIdPublicKeysRoute, post2UsersIdPublicKeysRouteHandler)
  .openapi(post2UsersIdRetweetsRoute, post2UsersIdRetweetsRouteHandler)
  .openapi(
    delete2UsersIdRetweetsSourceTweetIdRoute,
    delete2UsersIdRetweetsSourceTweetIdRouteHandler,
  )
  .openapi(get2UsersIdSourcesRoute, get2UsersIdSourcesRouteHandler)
  .openapi(post2UsersIdSourcesRoute, post2UsersIdSourcesRouteHandler)
  .openapi(delete2UsersIdSourcesSourceIdRoute, delete2UsersIdSourcesSourceIdRouteHandler)
  .openapi(get2UsersIdSourcesSourceIdRoute, get2UsersIdSourcesSourceIdRouteHandler)
  .openapi(put2UsersIdSourcesSourceIdRoute, put2UsersIdSourcesSourceIdRouteHandler)
  .openapi(
    get2UsersIdTimelinesReverseChronologicalRoute,
    get2UsersIdTimelinesReverseChronologicalRouteHandler,
  )
  .openapi(get2UsersIdTweetsRoute, get2UsersIdTweetsRouteHandler)
  .openapi(
    delete2UsersSourceUserIdBlockingTargetUserIdRoute,
    delete2UsersSourceUserIdBlockingTargetUserIdRouteHandler,
  )
  .openapi(
    delete2UsersSourceUserIdFollowingTargetUserIdRoute,
    delete2UsersSourceUserIdFollowingTargetUserIdRouteHandler,
  )
  .openapi(
    delete2UsersSourceUserIdMutingTargetUserIdRoute,
    delete2UsersSourceUserIdMutingTargetUserIdRouteHandler,
  )
  .openapi(get2WebhooksRoute, get2WebhooksRouteHandler)
  .openapi(post2WebhooksRoute, post2WebhooksRouteHandler)
  .openapi(post2WebhooksReplayRoute, post2WebhooksReplayRouteHandler)
  .openapi(delete2WebhooksWebhookIdRoute, delete2WebhooksWebhookIdRouteHandler)
  .openapi(put2WebhooksWebhookIdRoute, put2WebhooksWebhookIdRouteHandler)

export default app
