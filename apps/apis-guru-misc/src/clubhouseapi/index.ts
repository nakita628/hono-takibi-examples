import { OpenAPIHono } from '@hono/zod-openapi'
import {
  callPhoneNumberAuthHandler,
  checkForUpdateHandler,
  checkWaitlistStatusHandler,
  completePhoneNumberAuthHandler,
  createChannelHandler,
  followHandler,
  getActionableNotificationsHandler,
  getAllTopicsHandler,
  getChannelsHandler,
  getClubHandler,
  getClubsForTopicHandler,
  getCreateChannelTargetsHandler,
  getEventsHandler,
  getFollowingHandler,
  getNotificationsHandler,
  getOnlineFriendsHandler,
  getProfileHandler,
  getReleaseNotesHandler,
  getSettingsHandler,
  getSuggestedClubInvitesHandler,
  getSuggestedFollowsAllHandler,
  getSuggestedFollowsFriendsOnlyHandler,
  getSuggestedFollowsSimilarHandler,
  getSuggestedInvitesHandler,
  getSuggestedSpeakersHandler,
  getTopicHandler,
  getUsersForTopicHandler,
  getWelcomeChannelHandler,
  inviteFromWaitlistHandler,
  inviteToAppHandler,
  joinChannelHandler,
  leaveChannelHandler,
  meHandler,
  recordActionTrailsHandler,
  refreshTokenHandler,
  resendPhoneNumberAuthHandler,
  searchClubsHandler,
  searchUsersHandler,
  startPhoneNumberAuthHandler,
  updateNotificationsHandler,
  updateUsernameHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', callPhoneNumberAuthHandler)
  .route('/', checkForUpdateHandler)
  .route('/', checkWaitlistStatusHandler)
  .route('/', completePhoneNumberAuthHandler)
  .route('/', createChannelHandler)
  .route('/', followHandler)
  .route('/', getActionableNotificationsHandler)
  .route('/', getAllTopicsHandler)
  .route('/', getChannelsHandler)
  .route('/', getClubHandler)
  .route('/', getClubsForTopicHandler)
  .route('/', getCreateChannelTargetsHandler)
  .route('/', getEventsHandler)
  .route('/', getFollowingHandler)
  .route('/', getNotificationsHandler)
  .route('/', getOnlineFriendsHandler)
  .route('/', getProfileHandler)
  .route('/', getReleaseNotesHandler)
  .route('/', getSettingsHandler)
  .route('/', getSuggestedClubInvitesHandler)
  .route('/', getSuggestedFollowsAllHandler)
  .route('/', getSuggestedFollowsFriendsOnlyHandler)
  .route('/', getSuggestedFollowsSimilarHandler)
  .route('/', getSuggestedInvitesHandler)
  .route('/', getSuggestedSpeakersHandler)
  .route('/', getTopicHandler)
  .route('/', getUsersForTopicHandler)
  .route('/', getWelcomeChannelHandler)
  .route('/', inviteFromWaitlistHandler)
  .route('/', inviteToAppHandler)
  .route('/', joinChannelHandler)
  .route('/', leaveChannelHandler)
  .route('/', meHandler)
  .route('/', recordActionTrailsHandler)
  .route('/', refreshTokenHandler)
  .route('/', resendPhoneNumberAuthHandler)
  .route('/', searchClubsHandler)
  .route('/', searchUsersHandler)
  .route('/', startPhoneNumberAuthHandler)
  .route('/', updateNotificationsHandler)
  .route('/', updateUsernameHandler)

export default app
