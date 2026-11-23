import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCheckForUpdateRoute,
  getGetActionableNotificationsRoute,
  getGetAllTopicsRoute,
  getGetChannelsRoute,
  getGetEventsRoute,
  getGetNotificationsRoute,
  getGetSettingsRoute,
  getGetSuggestedFollowsAllRoute,
  getGetUsersForTopicRoute,
  getGetWelcomeChannelRoute,
  postCallPhoneNumberAuthRoute,
  postCheckWaitlistStatusRoute,
  postCompletePhoneNumberAuthRoute,
  postCreateChannelRoute,
  postFollowRoute,
  postGetClubRoute,
  postGetClubsForTopicRoute,
  postGetCreateChannelTargetsRoute,
  postGetFollowingRoute,
  postGetOnlineFriendsRoute,
  postGetProfileRoute,
  postGetReleaseNotesRoute,
  postGetSuggestedClubInvitesRoute,
  postGetSuggestedFollowsFriendsOnlyRoute,
  postGetSuggestedFollowsSimilarRoute,
  postGetSuggestedInvitesRoute,
  postGetSuggestedSpeakersRoute,
  postGetTopicRoute,
  postInviteFromWaitlistRoute,
  postInviteToAppRoute,
  postJoinChannelRoute,
  postLeaveChannelRoute,
  postMeRoute,
  postRecordActionTrailsRoute,
  postRefreshTokenRoute,
  postResendPhoneNumberAuthRoute,
  postSearchClubsRoute,
  postSearchUsersRoute,
  postStartPhoneNumberAuthRoute,
  postUpdateNotificationsRoute,
  postUpdateUsernameRoute,
} from './routes'
import {
  getCheckForUpdateRouteHandler,
  getGetActionableNotificationsRouteHandler,
  getGetAllTopicsRouteHandler,
  getGetChannelsRouteHandler,
  getGetEventsRouteHandler,
  getGetNotificationsRouteHandler,
  getGetSettingsRouteHandler,
  getGetSuggestedFollowsAllRouteHandler,
  getGetUsersForTopicRouteHandler,
  getGetWelcomeChannelRouteHandler,
  postCallPhoneNumberAuthRouteHandler,
  postCheckWaitlistStatusRouteHandler,
  postCompletePhoneNumberAuthRouteHandler,
  postCreateChannelRouteHandler,
  postFollowRouteHandler,
  postGetClubRouteHandler,
  postGetClubsForTopicRouteHandler,
  postGetCreateChannelTargetsRouteHandler,
  postGetFollowingRouteHandler,
  postGetOnlineFriendsRouteHandler,
  postGetProfileRouteHandler,
  postGetReleaseNotesRouteHandler,
  postGetSuggestedClubInvitesRouteHandler,
  postGetSuggestedFollowsFriendsOnlyRouteHandler,
  postGetSuggestedFollowsSimilarRouteHandler,
  postGetSuggestedInvitesRouteHandler,
  postGetSuggestedSpeakersRouteHandler,
  postGetTopicRouteHandler,
  postInviteFromWaitlistRouteHandler,
  postInviteToAppRouteHandler,
  postJoinChannelRouteHandler,
  postLeaveChannelRouteHandler,
  postMeRouteHandler,
  postRecordActionTrailsRouteHandler,
  postRefreshTokenRouteHandler,
  postResendPhoneNumberAuthRouteHandler,
  postSearchClubsRouteHandler,
  postSearchUsersRouteHandler,
  postStartPhoneNumberAuthRouteHandler,
  postUpdateNotificationsRouteHandler,
  postUpdateUsernameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCallPhoneNumberAuthRoute, postCallPhoneNumberAuthRouteHandler)
  .openapi(getCheckForUpdateRoute, getCheckForUpdateRouteHandler)
  .openapi(postCheckWaitlistStatusRoute, postCheckWaitlistStatusRouteHandler)
  .openapi(postCompletePhoneNumberAuthRoute, postCompletePhoneNumberAuthRouteHandler)
  .openapi(postCreateChannelRoute, postCreateChannelRouteHandler)
  .openapi(postFollowRoute, postFollowRouteHandler)
  .openapi(getGetActionableNotificationsRoute, getGetActionableNotificationsRouteHandler)
  .openapi(getGetAllTopicsRoute, getGetAllTopicsRouteHandler)
  .openapi(getGetChannelsRoute, getGetChannelsRouteHandler)
  .openapi(postGetClubRoute, postGetClubRouteHandler)
  .openapi(postGetClubsForTopicRoute, postGetClubsForTopicRouteHandler)
  .openapi(postGetCreateChannelTargetsRoute, postGetCreateChannelTargetsRouteHandler)
  .openapi(getGetEventsRoute, getGetEventsRouteHandler)
  .openapi(postGetFollowingRoute, postGetFollowingRouteHandler)
  .openapi(getGetNotificationsRoute, getGetNotificationsRouteHandler)
  .openapi(postGetOnlineFriendsRoute, postGetOnlineFriendsRouteHandler)
  .openapi(postGetProfileRoute, postGetProfileRouteHandler)
  .openapi(postGetReleaseNotesRoute, postGetReleaseNotesRouteHandler)
  .openapi(getGetSettingsRoute, getGetSettingsRouteHandler)
  .openapi(postGetSuggestedClubInvitesRoute, postGetSuggestedClubInvitesRouteHandler)
  .openapi(getGetSuggestedFollowsAllRoute, getGetSuggestedFollowsAllRouteHandler)
  .openapi(postGetSuggestedFollowsFriendsOnlyRoute, postGetSuggestedFollowsFriendsOnlyRouteHandler)
  .openapi(postGetSuggestedFollowsSimilarRoute, postGetSuggestedFollowsSimilarRouteHandler)
  .openapi(postGetSuggestedInvitesRoute, postGetSuggestedInvitesRouteHandler)
  .openapi(postGetSuggestedSpeakersRoute, postGetSuggestedSpeakersRouteHandler)
  .openapi(postGetTopicRoute, postGetTopicRouteHandler)
  .openapi(getGetUsersForTopicRoute, getGetUsersForTopicRouteHandler)
  .openapi(getGetWelcomeChannelRoute, getGetWelcomeChannelRouteHandler)
  .openapi(postInviteFromWaitlistRoute, postInviteFromWaitlistRouteHandler)
  .openapi(postInviteToAppRoute, postInviteToAppRouteHandler)
  .openapi(postJoinChannelRoute, postJoinChannelRouteHandler)
  .openapi(postLeaveChannelRoute, postLeaveChannelRouteHandler)
  .openapi(postMeRoute, postMeRouteHandler)
  .openapi(postRecordActionTrailsRoute, postRecordActionTrailsRouteHandler)
  .openapi(postRefreshTokenRoute, postRefreshTokenRouteHandler)
  .openapi(postResendPhoneNumberAuthRoute, postResendPhoneNumberAuthRouteHandler)
  .openapi(postSearchClubsRoute, postSearchClubsRouteHandler)
  .openapi(postSearchUsersRoute, postSearchUsersRouteHandler)
  .openapi(postStartPhoneNumberAuthRoute, postStartPhoneNumberAuthRouteHandler)
  .openapi(postUpdateNotificationsRoute, postUpdateNotificationsRouteHandler)
  .openapi(postUpdateUsernameRoute, postUpdateUsernameRouteHandler)

export default app
