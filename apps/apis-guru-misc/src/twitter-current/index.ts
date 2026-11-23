import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2ListsIdMembersUserIdRoute,
  delete2ListsIdRoute,
  delete2TweetsIdRoute,
  delete2UsersIdBookmarksTweetIdRoute,
  delete2UsersIdFollowedListsListIdRoute,
  delete2UsersIdLikesTweetIdRoute,
  delete2UsersIdPinnedListsListIdRoute,
  delete2UsersIdRetweetsSourceTweetIdRoute,
  delete2UsersSourceUserIdBlockingTargetUserIdRoute,
  delete2UsersSourceUserIdFollowingTargetUserIdRoute,
  delete2UsersSourceUserIdMutingTargetUserIdRoute,
  get2ComplianceJobsIdRoute,
  get2ComplianceJobsRoute,
  get2DmConversationsIdDmEventsRoute,
  get2DmConversationsWithParticipantIdDmEventsRoute,
  get2DmEventsRoute,
  get2ListsIdFollowersRoute,
  get2ListsIdMembersRoute,
  get2ListsIdRoute,
  get2ListsIdTweetsRoute,
  get2OpenapiJsonRoute,
  get2SpacesByCreatorIdsRoute,
  get2SpacesIdBuyersRoute,
  get2SpacesIdRoute,
  get2SpacesIdTweetsRoute,
  get2SpacesRoute,
  get2SpacesSearchRoute,
  get2TweetsComplianceStreamRoute,
  get2TweetsCountsAllRoute,
  get2TweetsCountsRecentRoute,
  get2TweetsFirehoseStreamRoute,
  get2TweetsIdLikingUsersRoute,
  get2TweetsIdQuoteTweetsRoute,
  get2TweetsIdRetweetedByRoute,
  get2TweetsIdRoute,
  get2TweetsLabelStreamRoute,
  get2TweetsRoute,
  get2TweetsSample10StreamRoute,
  get2TweetsSampleStreamRoute,
  get2TweetsSearchAllRoute,
  get2TweetsSearchRecentRoute,
  get2TweetsSearchStreamRoute,
  get2TweetsSearchStreamRulesRoute,
  get2UsersByRoute,
  get2UsersByUsernameUsernameRoute,
  get2UsersComplianceStreamRoute,
  get2UsersIdBlockingRoute,
  get2UsersIdBookmarksRoute,
  get2UsersIdFollowedListsRoute,
  get2UsersIdFollowersRoute,
  get2UsersIdFollowingRoute,
  get2UsersIdLikedTweetsRoute,
  get2UsersIdListMembershipsRoute,
  get2UsersIdMentionsRoute,
  get2UsersIdMutingRoute,
  get2UsersIdOwnedListsRoute,
  get2UsersIdPinnedListsRoute,
  get2UsersIdRoute,
  get2UsersIdTimelinesReverseChronologicalRoute,
  get2UsersIdTweetsRoute,
  get2UsersMeRoute,
  get2UsersRoute,
  post2ComplianceJobsRoute,
  post2DmConversationsDmConversationIdMessagesRoute,
  post2DmConversationsRoute,
  post2DmConversationsWithParticipantIdMessagesRoute,
  post2ListsIdMembersRoute,
  post2ListsRoute,
  post2TweetsRoute,
  post2TweetsSearchStreamRulesRoute,
  post2UsersIdBlockingRoute,
  post2UsersIdBookmarksRoute,
  post2UsersIdFollowedListsRoute,
  post2UsersIdFollowingRoute,
  post2UsersIdLikesRoute,
  post2UsersIdMutingRoute,
  post2UsersIdPinnedListsRoute,
  post2UsersIdRetweetsRoute,
  put2ListsIdRoute,
  put2TweetsTweetIdHiddenRoute,
} from './routes'
import {
  delete2ListsIdMembersUserIdRouteHandler,
  delete2ListsIdRouteHandler,
  delete2TweetsIdRouteHandler,
  delete2UsersIdBookmarksTweetIdRouteHandler,
  delete2UsersIdFollowedListsListIdRouteHandler,
  delete2UsersIdLikesTweetIdRouteHandler,
  delete2UsersIdPinnedListsListIdRouteHandler,
  delete2UsersIdRetweetsSourceTweetIdRouteHandler,
  delete2UsersSourceUserIdBlockingTargetUserIdRouteHandler,
  delete2UsersSourceUserIdFollowingTargetUserIdRouteHandler,
  delete2UsersSourceUserIdMutingTargetUserIdRouteHandler,
  get2ComplianceJobsIdRouteHandler,
  get2ComplianceJobsRouteHandler,
  get2DmConversationsIdDmEventsRouteHandler,
  get2DmConversationsWithParticipantIdDmEventsRouteHandler,
  get2DmEventsRouteHandler,
  get2ListsIdFollowersRouteHandler,
  get2ListsIdMembersRouteHandler,
  get2ListsIdRouteHandler,
  get2ListsIdTweetsRouteHandler,
  get2OpenapiJsonRouteHandler,
  get2SpacesByCreatorIdsRouteHandler,
  get2SpacesIdBuyersRouteHandler,
  get2SpacesIdRouteHandler,
  get2SpacesIdTweetsRouteHandler,
  get2SpacesRouteHandler,
  get2SpacesSearchRouteHandler,
  get2TweetsComplianceStreamRouteHandler,
  get2TweetsCountsAllRouteHandler,
  get2TweetsCountsRecentRouteHandler,
  get2TweetsFirehoseStreamRouteHandler,
  get2TweetsIdLikingUsersRouteHandler,
  get2TweetsIdQuoteTweetsRouteHandler,
  get2TweetsIdRetweetedByRouteHandler,
  get2TweetsIdRouteHandler,
  get2TweetsLabelStreamRouteHandler,
  get2TweetsRouteHandler,
  get2TweetsSample10StreamRouteHandler,
  get2TweetsSampleStreamRouteHandler,
  get2TweetsSearchAllRouteHandler,
  get2TweetsSearchRecentRouteHandler,
  get2TweetsSearchStreamRouteHandler,
  get2TweetsSearchStreamRulesRouteHandler,
  get2UsersByRouteHandler,
  get2UsersByUsernameUsernameRouteHandler,
  get2UsersComplianceStreamRouteHandler,
  get2UsersIdBlockingRouteHandler,
  get2UsersIdBookmarksRouteHandler,
  get2UsersIdFollowedListsRouteHandler,
  get2UsersIdFollowersRouteHandler,
  get2UsersIdFollowingRouteHandler,
  get2UsersIdLikedTweetsRouteHandler,
  get2UsersIdListMembershipsRouteHandler,
  get2UsersIdMentionsRouteHandler,
  get2UsersIdMutingRouteHandler,
  get2UsersIdOwnedListsRouteHandler,
  get2UsersIdPinnedListsRouteHandler,
  get2UsersIdRouteHandler,
  get2UsersIdTimelinesReverseChronologicalRouteHandler,
  get2UsersIdTweetsRouteHandler,
  get2UsersMeRouteHandler,
  get2UsersRouteHandler,
  post2ComplianceJobsRouteHandler,
  post2DmConversationsDmConversationIdMessagesRouteHandler,
  post2DmConversationsRouteHandler,
  post2DmConversationsWithParticipantIdMessagesRouteHandler,
  post2ListsIdMembersRouteHandler,
  post2ListsRouteHandler,
  post2TweetsRouteHandler,
  post2TweetsSearchStreamRulesRouteHandler,
  post2UsersIdBlockingRouteHandler,
  post2UsersIdBookmarksRouteHandler,
  post2UsersIdFollowedListsRouteHandler,
  post2UsersIdFollowingRouteHandler,
  post2UsersIdLikesRouteHandler,
  post2UsersIdMutingRouteHandler,
  post2UsersIdPinnedListsRouteHandler,
  post2UsersIdRetweetsRouteHandler,
  put2ListsIdRouteHandler,
  put2TweetsTweetIdHiddenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(get2ComplianceJobsRoute, get2ComplianceJobsRouteHandler)
  .openapi(post2ComplianceJobsRoute, post2ComplianceJobsRouteHandler)
  .openapi(get2ComplianceJobsIdRoute, get2ComplianceJobsIdRouteHandler)
  .openapi(post2DmConversationsRoute, post2DmConversationsRouteHandler)
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
  .openapi(post2ListsRoute, post2ListsRouteHandler)
  .openapi(delete2ListsIdRoute, delete2ListsIdRouteHandler)
  .openapi(get2ListsIdRoute, get2ListsIdRouteHandler)
  .openapi(put2ListsIdRoute, put2ListsIdRouteHandler)
  .openapi(get2ListsIdFollowersRoute, get2ListsIdFollowersRouteHandler)
  .openapi(get2ListsIdMembersRoute, get2ListsIdMembersRouteHandler)
  .openapi(post2ListsIdMembersRoute, post2ListsIdMembersRouteHandler)
  .openapi(delete2ListsIdMembersUserIdRoute, delete2ListsIdMembersUserIdRouteHandler)
  .openapi(get2ListsIdTweetsRoute, get2ListsIdTweetsRouteHandler)
  .openapi(get2OpenapiJsonRoute, get2OpenapiJsonRouteHandler)
  .openapi(get2SpacesRoute, get2SpacesRouteHandler)
  .openapi(get2SpacesByCreatorIdsRoute, get2SpacesByCreatorIdsRouteHandler)
  .openapi(get2SpacesSearchRoute, get2SpacesSearchRouteHandler)
  .openapi(get2SpacesIdRoute, get2SpacesIdRouteHandler)
  .openapi(get2SpacesIdBuyersRoute, get2SpacesIdBuyersRouteHandler)
  .openapi(get2SpacesIdTweetsRoute, get2SpacesIdTweetsRouteHandler)
  .openapi(get2TweetsRoute, get2TweetsRouteHandler)
  .openapi(post2TweetsRoute, post2TweetsRouteHandler)
  .openapi(get2TweetsComplianceStreamRoute, get2TweetsComplianceStreamRouteHandler)
  .openapi(get2TweetsCountsAllRoute, get2TweetsCountsAllRouteHandler)
  .openapi(get2TweetsCountsRecentRoute, get2TweetsCountsRecentRouteHandler)
  .openapi(get2TweetsFirehoseStreamRoute, get2TweetsFirehoseStreamRouteHandler)
  .openapi(get2TweetsLabelStreamRoute, get2TweetsLabelStreamRouteHandler)
  .openapi(get2TweetsSampleStreamRoute, get2TweetsSampleStreamRouteHandler)
  .openapi(get2TweetsSample10StreamRoute, get2TweetsSample10StreamRouteHandler)
  .openapi(get2TweetsSearchAllRoute, get2TweetsSearchAllRouteHandler)
  .openapi(get2TweetsSearchRecentRoute, get2TweetsSearchRecentRouteHandler)
  .openapi(get2TweetsSearchStreamRoute, get2TweetsSearchStreamRouteHandler)
  .openapi(get2TweetsSearchStreamRulesRoute, get2TweetsSearchStreamRulesRouteHandler)
  .openapi(post2TweetsSearchStreamRulesRoute, post2TweetsSearchStreamRulesRouteHandler)
  .openapi(delete2TweetsIdRoute, delete2TweetsIdRouteHandler)
  .openapi(get2TweetsIdRoute, get2TweetsIdRouteHandler)
  .openapi(get2TweetsIdLikingUsersRoute, get2TweetsIdLikingUsersRouteHandler)
  .openapi(get2TweetsIdQuoteTweetsRoute, get2TweetsIdQuoteTweetsRouteHandler)
  .openapi(get2TweetsIdRetweetedByRoute, get2TweetsIdRetweetedByRouteHandler)
  .openapi(put2TweetsTweetIdHiddenRoute, put2TweetsTweetIdHiddenRouteHandler)
  .openapi(get2UsersRoute, get2UsersRouteHandler)
  .openapi(get2UsersByRoute, get2UsersByRouteHandler)
  .openapi(get2UsersByUsernameUsernameRoute, get2UsersByUsernameUsernameRouteHandler)
  .openapi(get2UsersComplianceStreamRoute, get2UsersComplianceStreamRouteHandler)
  .openapi(get2UsersMeRoute, get2UsersMeRouteHandler)
  .openapi(get2UsersIdRoute, get2UsersIdRouteHandler)
  .openapi(get2UsersIdBlockingRoute, get2UsersIdBlockingRouteHandler)
  .openapi(post2UsersIdBlockingRoute, post2UsersIdBlockingRouteHandler)
  .openapi(get2UsersIdBookmarksRoute, get2UsersIdBookmarksRouteHandler)
  .openapi(post2UsersIdBookmarksRoute, post2UsersIdBookmarksRouteHandler)
  .openapi(delete2UsersIdBookmarksTweetIdRoute, delete2UsersIdBookmarksTweetIdRouteHandler)
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
  .openapi(post2UsersIdRetweetsRoute, post2UsersIdRetweetsRouteHandler)
  .openapi(
    delete2UsersIdRetweetsSourceTweetIdRoute,
    delete2UsersIdRetweetsSourceTweetIdRouteHandler,
  )
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

export default app
