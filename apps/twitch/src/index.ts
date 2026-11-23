import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelPointsCustomRewardsRoute,
  deleteChannelsVipsRoute,
  deleteChatPinsRoute,
  deleteEventsubConduitsRoute,
  deleteEventsubSubscriptionsRoute,
  deleteGuestStarInvitesRoute,
  deleteGuestStarSessionRoute,
  deleteGuestStarSlotRoute,
  deleteModerationBansRoute,
  deleteModerationBlockedTermsRoute,
  deleteModerationChatRoute,
  deleteModerationModeratorsRoute,
  deleteModerationSuspiciousUsersRoute,
  deleteRaidsRoute,
  deleteScheduleSegmentRoute,
  deleteUsersBlocksRoute,
  deleteVideosRoute,
  getAnalyticsExtensionsRoute,
  getAnalyticsGamesRoute,
  getAuthorizationUsersRoute,
  getBitsCheermotesRoute,
  getBitsCustomPowerUpsRoute,
  getBitsExtensionsRoute,
  getBitsLeaderboardRoute,
  getChannelPointsCustomRewardsRedemptionsRoute,
  getChannelPointsCustomRewardsRoute,
  getChannelsAdsRoute,
  getChannelsEditorsRoute,
  getChannelsFollowedRoute,
  getChannelsFollowersRoute,
  getChannelsRoute,
  getChannelsVipsRoute,
  getCharityCampaignsRoute,
  getCharityDonationsRoute,
  getChatBadgesGlobalRoute,
  getChatBadgesRoute,
  getChatChattersRoute,
  getChatColorRoute,
  getChatEmotesGlobalRoute,
  getChatEmotesRoute,
  getChatEmotesSetRoute,
  getChatEmotesUserRoute,
  getChatPinsRoute,
  getChatSettingsRoute,
  getClipsDownloadsRoute,
  getClipsRoute,
  getContentClassificationLabelsRoute,
  getEntitlementsDropsRoute,
  getEventsubConduitsRoute,
  getEventsubConduitsShardsRoute,
  getEventsubSubscriptionsRoute,
  getExtensionsConfigurationsRoute,
  getExtensionsJwtSecretsRoute,
  getExtensionsLiveRoute,
  getExtensionsReleasedRoute,
  getExtensionsRoute,
  getExtensionsTransactionsRoute,
  getGamesRoute,
  getGamesTopRoute,
  getGoalsRoute,
  getGuestStarChannelSettingsRoute,
  getGuestStarInvitesRoute,
  getGuestStarSessionRoute,
  getHypetrainStatusRoute,
  getModerationAutomodSettingsRoute,
  getModerationBannedRoute,
  getModerationBlockedTermsRoute,
  getModerationChannelsRoute,
  getModerationModeratorsRoute,
  getModerationShieldModeRoute,
  getModerationUnbanRequestsRoute,
  getPollsRoute,
  getPredictionsRoute,
  getScheduleIcalendarRoute,
  getScheduleRoute,
  getSearchCategoriesRoute,
  getSearchChannelsRoute,
  getSharedChatSessionRoute,
  getStreamsFollowedRoute,
  getStreamsKeyRoute,
  getStreamsMarkersRoute,
  getStreamsRoute,
  getStreamsTagsRoute,
  getSubscriptionsRoute,
  getSubscriptionsUserRoute,
  getTagsStreamsRoute,
  getTeamsChannelRoute,
  getTeamsRoute,
  getUsersBlocksRoute,
  getUsersExtensionsListRoute,
  getUsersExtensionsRoute,
  getUsersRoute,
  getVideosRoute,
  patchChannelPointsCustomRewardsRedemptionsRoute,
  patchChannelPointsCustomRewardsRoute,
  patchChannelsRoute,
  patchChatPinsRoute,
  patchChatSettingsRoute,
  patchEntitlementsDropsRoute,
  patchEventsubConduitsRoute,
  patchEventsubConduitsShardsRoute,
  patchGuestStarSlotRoute,
  patchGuestStarSlotSettingsRoute,
  patchModerationUnbanRequestsRoute,
  patchPollsRoute,
  patchPredictionsRoute,
  patchScheduleSegmentRoute,
  patchScheduleSettingsRoute,
  postChannelPointsCustomRewardsRoute,
  postChannelsAdsScheduleSnoozeRoute,
  postChannelsCommercialRoute,
  postChannelsVipsRoute,
  postChatAnnouncementsRoute,
  postChatMessagesRoute,
  postChatShoutoutsRoute,
  postClipsRoute,
  postEventsubConduitsRoute,
  postEventsubSubscriptionsRoute,
  postExtensionsChatRoute,
  postExtensionsJwtSecretsRoute,
  postExtensionsPubsubRoute,
  postGuestStarInvitesRoute,
  postGuestStarSessionRoute,
  postGuestStarSlotRoute,
  postModerationAutomodMessageRoute,
  postModerationBansRoute,
  postModerationBlockedTermsRoute,
  postModerationEnforcementsStatusRoute,
  postModerationModeratorsRoute,
  postModerationSuspiciousUsersRoute,
  postModerationWarningsRoute,
  postPollsRoute,
  postPredictionsRoute,
  postRaidsRoute,
  postScheduleSegmentRoute,
  postStreamsMarkersRoute,
  postVideosClipsRoute,
  postWhispersRoute,
  putBitsExtensionsRoute,
  putChatColorRoute,
  putChatPinsRoute,
  putExtensionsConfigurationsRoute,
  putExtensionsRequiredConfigurationRoute,
  putGuestStarChannelSettingsRoute,
  putModerationAutomodSettingsRoute,
  putModerationShieldModeRoute,
  putUsersBlocksRoute,
  putUsersExtensionsRoute,
  putUsersRoute,
} from './routes'
import {
  deleteChannelPointsCustomRewardsRouteHandler,
  deleteChannelsVipsRouteHandler,
  deleteChatPinsRouteHandler,
  deleteEventsubConduitsRouteHandler,
  deleteEventsubSubscriptionsRouteHandler,
  deleteGuestStarInvitesRouteHandler,
  deleteGuestStarSessionRouteHandler,
  deleteGuestStarSlotRouteHandler,
  deleteModerationBansRouteHandler,
  deleteModerationBlockedTermsRouteHandler,
  deleteModerationChatRouteHandler,
  deleteModerationModeratorsRouteHandler,
  deleteModerationSuspiciousUsersRouteHandler,
  deleteRaidsRouteHandler,
  deleteScheduleSegmentRouteHandler,
  deleteUsersBlocksRouteHandler,
  deleteVideosRouteHandler,
  getAnalyticsExtensionsRouteHandler,
  getAnalyticsGamesRouteHandler,
  getAuthorizationUsersRouteHandler,
  getBitsCheermotesRouteHandler,
  getBitsCustomPowerUpsRouteHandler,
  getBitsExtensionsRouteHandler,
  getBitsLeaderboardRouteHandler,
  getChannelPointsCustomRewardsRedemptionsRouteHandler,
  getChannelPointsCustomRewardsRouteHandler,
  getChannelsAdsRouteHandler,
  getChannelsEditorsRouteHandler,
  getChannelsFollowedRouteHandler,
  getChannelsFollowersRouteHandler,
  getChannelsRouteHandler,
  getChannelsVipsRouteHandler,
  getCharityCampaignsRouteHandler,
  getCharityDonationsRouteHandler,
  getChatBadgesGlobalRouteHandler,
  getChatBadgesRouteHandler,
  getChatChattersRouteHandler,
  getChatColorRouteHandler,
  getChatEmotesGlobalRouteHandler,
  getChatEmotesRouteHandler,
  getChatEmotesSetRouteHandler,
  getChatEmotesUserRouteHandler,
  getChatPinsRouteHandler,
  getChatSettingsRouteHandler,
  getClipsDownloadsRouteHandler,
  getClipsRouteHandler,
  getContentClassificationLabelsRouteHandler,
  getEntitlementsDropsRouteHandler,
  getEventsubConduitsRouteHandler,
  getEventsubConduitsShardsRouteHandler,
  getEventsubSubscriptionsRouteHandler,
  getExtensionsConfigurationsRouteHandler,
  getExtensionsJwtSecretsRouteHandler,
  getExtensionsLiveRouteHandler,
  getExtensionsReleasedRouteHandler,
  getExtensionsRouteHandler,
  getExtensionsTransactionsRouteHandler,
  getGamesRouteHandler,
  getGamesTopRouteHandler,
  getGoalsRouteHandler,
  getGuestStarChannelSettingsRouteHandler,
  getGuestStarInvitesRouteHandler,
  getGuestStarSessionRouteHandler,
  getHypetrainStatusRouteHandler,
  getModerationAutomodSettingsRouteHandler,
  getModerationBannedRouteHandler,
  getModerationBlockedTermsRouteHandler,
  getModerationChannelsRouteHandler,
  getModerationModeratorsRouteHandler,
  getModerationShieldModeRouteHandler,
  getModerationUnbanRequestsRouteHandler,
  getPollsRouteHandler,
  getPredictionsRouteHandler,
  getScheduleIcalendarRouteHandler,
  getScheduleRouteHandler,
  getSearchCategoriesRouteHandler,
  getSearchChannelsRouteHandler,
  getSharedChatSessionRouteHandler,
  getStreamsFollowedRouteHandler,
  getStreamsKeyRouteHandler,
  getStreamsMarkersRouteHandler,
  getStreamsRouteHandler,
  getStreamsTagsRouteHandler,
  getSubscriptionsRouteHandler,
  getSubscriptionsUserRouteHandler,
  getTagsStreamsRouteHandler,
  getTeamsChannelRouteHandler,
  getTeamsRouteHandler,
  getUsersBlocksRouteHandler,
  getUsersExtensionsListRouteHandler,
  getUsersExtensionsRouteHandler,
  getUsersRouteHandler,
  getVideosRouteHandler,
  patchChannelPointsCustomRewardsRedemptionsRouteHandler,
  patchChannelPointsCustomRewardsRouteHandler,
  patchChannelsRouteHandler,
  patchChatPinsRouteHandler,
  patchChatSettingsRouteHandler,
  patchEntitlementsDropsRouteHandler,
  patchEventsubConduitsRouteHandler,
  patchEventsubConduitsShardsRouteHandler,
  patchGuestStarSlotRouteHandler,
  patchGuestStarSlotSettingsRouteHandler,
  patchModerationUnbanRequestsRouteHandler,
  patchPollsRouteHandler,
  patchPredictionsRouteHandler,
  patchScheduleSegmentRouteHandler,
  patchScheduleSettingsRouteHandler,
  postChannelPointsCustomRewardsRouteHandler,
  postChannelsAdsScheduleSnoozeRouteHandler,
  postChannelsCommercialRouteHandler,
  postChannelsVipsRouteHandler,
  postChatAnnouncementsRouteHandler,
  postChatMessagesRouteHandler,
  postChatShoutoutsRouteHandler,
  postClipsRouteHandler,
  postEventsubConduitsRouteHandler,
  postEventsubSubscriptionsRouteHandler,
  postExtensionsChatRouteHandler,
  postExtensionsJwtSecretsRouteHandler,
  postExtensionsPubsubRouteHandler,
  postGuestStarInvitesRouteHandler,
  postGuestStarSessionRouteHandler,
  postGuestStarSlotRouteHandler,
  postModerationAutomodMessageRouteHandler,
  postModerationBansRouteHandler,
  postModerationBlockedTermsRouteHandler,
  postModerationEnforcementsStatusRouteHandler,
  postModerationModeratorsRouteHandler,
  postModerationSuspiciousUsersRouteHandler,
  postModerationWarningsRouteHandler,
  postPollsRouteHandler,
  postPredictionsRouteHandler,
  postRaidsRouteHandler,
  postScheduleSegmentRouteHandler,
  postStreamsMarkersRouteHandler,
  postVideosClipsRouteHandler,
  postWhispersRouteHandler,
  putBitsExtensionsRouteHandler,
  putChatColorRouteHandler,
  putChatPinsRouteHandler,
  putExtensionsConfigurationsRouteHandler,
  putExtensionsRequiredConfigurationRouteHandler,
  putGuestStarChannelSettingsRouteHandler,
  putModerationAutomodSettingsRouteHandler,
  putModerationShieldModeRouteHandler,
  putUsersBlocksRouteHandler,
  putUsersExtensionsRouteHandler,
  putUsersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postChannelsCommercialRoute, postChannelsCommercialRouteHandler)
  .openapi(getChannelsAdsRoute, getChannelsAdsRouteHandler)
  .openapi(postChannelsAdsScheduleSnoozeRoute, postChannelsAdsScheduleSnoozeRouteHandler)
  .openapi(getAnalyticsExtensionsRoute, getAnalyticsExtensionsRouteHandler)
  .openapi(getAnalyticsGamesRoute, getAnalyticsGamesRouteHandler)
  .openapi(getBitsLeaderboardRoute, getBitsLeaderboardRouteHandler)
  .openapi(getBitsCheermotesRoute, getBitsCheermotesRouteHandler)
  .openapi(getBitsCustomPowerUpsRoute, getBitsCustomPowerUpsRouteHandler)
  .openapi(getExtensionsTransactionsRoute, getExtensionsTransactionsRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(patchChannelsRoute, patchChannelsRouteHandler)
  .openapi(getChannelsEditorsRoute, getChannelsEditorsRouteHandler)
  .openapi(getChannelsFollowedRoute, getChannelsFollowedRouteHandler)
  .openapi(getChannelsFollowersRoute, getChannelsFollowersRouteHandler)
  .openapi(postChannelPointsCustomRewardsRoute, postChannelPointsCustomRewardsRouteHandler)
  .openapi(deleteChannelPointsCustomRewardsRoute, deleteChannelPointsCustomRewardsRouteHandler)
  .openapi(getChannelPointsCustomRewardsRoute, getChannelPointsCustomRewardsRouteHandler)
  .openapi(patchChannelPointsCustomRewardsRoute, patchChannelPointsCustomRewardsRouteHandler)
  .openapi(
    getChannelPointsCustomRewardsRedemptionsRoute,
    getChannelPointsCustomRewardsRedemptionsRouteHandler,
  )
  .openapi(
    patchChannelPointsCustomRewardsRedemptionsRoute,
    patchChannelPointsCustomRewardsRedemptionsRouteHandler,
  )
  .openapi(getCharityCampaignsRoute, getCharityCampaignsRouteHandler)
  .openapi(getCharityDonationsRoute, getCharityDonationsRouteHandler)
  .openapi(getChatChattersRoute, getChatChattersRouteHandler)
  .openapi(getChatEmotesRoute, getChatEmotesRouteHandler)
  .openapi(getChatEmotesGlobalRoute, getChatEmotesGlobalRouteHandler)
  .openapi(getChatEmotesSetRoute, getChatEmotesSetRouteHandler)
  .openapi(getChatBadgesRoute, getChatBadgesRouteHandler)
  .openapi(getChatBadgesGlobalRoute, getChatBadgesGlobalRouteHandler)
  .openapi(getChatSettingsRoute, getChatSettingsRouteHandler)
  .openapi(patchChatSettingsRoute, patchChatSettingsRouteHandler)
  .openapi(getSharedChatSessionRoute, getSharedChatSessionRouteHandler)
  .openapi(getChatEmotesUserRoute, getChatEmotesUserRouteHandler)
  .openapi(postChatAnnouncementsRoute, postChatAnnouncementsRouteHandler)
  .openapi(postChatShoutoutsRoute, postChatShoutoutsRouteHandler)
  .openapi(postChatMessagesRoute, postChatMessagesRouteHandler)
  .openapi(getChatPinsRoute, getChatPinsRouteHandler)
  .openapi(putChatPinsRoute, putChatPinsRouteHandler)
  .openapi(patchChatPinsRoute, patchChatPinsRouteHandler)
  .openapi(deleteChatPinsRoute, deleteChatPinsRouteHandler)
  .openapi(getChatColorRoute, getChatColorRouteHandler)
  .openapi(putChatColorRoute, putChatColorRouteHandler)
  .openapi(postClipsRoute, postClipsRouteHandler)
  .openapi(getClipsRoute, getClipsRouteHandler)
  .openapi(postVideosClipsRoute, postVideosClipsRouteHandler)
  .openapi(getClipsDownloadsRoute, getClipsDownloadsRouteHandler)
  .openapi(getEventsubConduitsRoute, getEventsubConduitsRouteHandler)
  .openapi(postEventsubConduitsRoute, postEventsubConduitsRouteHandler)
  .openapi(patchEventsubConduitsRoute, patchEventsubConduitsRouteHandler)
  .openapi(deleteEventsubConduitsRoute, deleteEventsubConduitsRouteHandler)
  .openapi(getEventsubConduitsShardsRoute, getEventsubConduitsShardsRouteHandler)
  .openapi(patchEventsubConduitsShardsRoute, patchEventsubConduitsShardsRouteHandler)
  .openapi(getContentClassificationLabelsRoute, getContentClassificationLabelsRouteHandler)
  .openapi(getEntitlementsDropsRoute, getEntitlementsDropsRouteHandler)
  .openapi(patchEntitlementsDropsRoute, patchEntitlementsDropsRouteHandler)
  .openapi(getExtensionsConfigurationsRoute, getExtensionsConfigurationsRouteHandler)
  .openapi(putExtensionsConfigurationsRoute, putExtensionsConfigurationsRouteHandler)
  .openapi(putExtensionsRequiredConfigurationRoute, putExtensionsRequiredConfigurationRouteHandler)
  .openapi(postExtensionsPubsubRoute, postExtensionsPubsubRouteHandler)
  .openapi(getExtensionsLiveRoute, getExtensionsLiveRouteHandler)
  .openapi(getExtensionsJwtSecretsRoute, getExtensionsJwtSecretsRouteHandler)
  .openapi(postExtensionsJwtSecretsRoute, postExtensionsJwtSecretsRouteHandler)
  .openapi(postExtensionsChatRoute, postExtensionsChatRouteHandler)
  .openapi(getExtensionsRoute, getExtensionsRouteHandler)
  .openapi(getExtensionsReleasedRoute, getExtensionsReleasedRouteHandler)
  .openapi(getBitsExtensionsRoute, getBitsExtensionsRouteHandler)
  .openapi(putBitsExtensionsRoute, putBitsExtensionsRouteHandler)
  .openapi(postEventsubSubscriptionsRoute, postEventsubSubscriptionsRouteHandler)
  .openapi(deleteEventsubSubscriptionsRoute, deleteEventsubSubscriptionsRouteHandler)
  .openapi(getEventsubSubscriptionsRoute, getEventsubSubscriptionsRouteHandler)
  .openapi(getGamesTopRoute, getGamesTopRouteHandler)
  .openapi(getGamesRoute, getGamesRouteHandler)
  .openapi(getGoalsRoute, getGoalsRouteHandler)
  .openapi(getGuestStarChannelSettingsRoute, getGuestStarChannelSettingsRouteHandler)
  .openapi(putGuestStarChannelSettingsRoute, putGuestStarChannelSettingsRouteHandler)
  .openapi(getGuestStarSessionRoute, getGuestStarSessionRouteHandler)
  .openapi(postGuestStarSessionRoute, postGuestStarSessionRouteHandler)
  .openapi(deleteGuestStarSessionRoute, deleteGuestStarSessionRouteHandler)
  .openapi(getGuestStarInvitesRoute, getGuestStarInvitesRouteHandler)
  .openapi(postGuestStarInvitesRoute, postGuestStarInvitesRouteHandler)
  .openapi(deleteGuestStarInvitesRoute, deleteGuestStarInvitesRouteHandler)
  .openapi(postGuestStarSlotRoute, postGuestStarSlotRouteHandler)
  .openapi(patchGuestStarSlotRoute, patchGuestStarSlotRouteHandler)
  .openapi(deleteGuestStarSlotRoute, deleteGuestStarSlotRouteHandler)
  .openapi(patchGuestStarSlotSettingsRoute, patchGuestStarSlotSettingsRouteHandler)
  .openapi(getHypetrainStatusRoute, getHypetrainStatusRouteHandler)
  .openapi(postModerationEnforcementsStatusRoute, postModerationEnforcementsStatusRouteHandler)
  .openapi(postModerationAutomodMessageRoute, postModerationAutomodMessageRouteHandler)
  .openapi(getModerationAutomodSettingsRoute, getModerationAutomodSettingsRouteHandler)
  .openapi(putModerationAutomodSettingsRoute, putModerationAutomodSettingsRouteHandler)
  .openapi(getModerationBannedRoute, getModerationBannedRouteHandler)
  .openapi(postModerationBansRoute, postModerationBansRouteHandler)
  .openapi(deleteModerationBansRoute, deleteModerationBansRouteHandler)
  .openapi(getModerationUnbanRequestsRoute, getModerationUnbanRequestsRouteHandler)
  .openapi(patchModerationUnbanRequestsRoute, patchModerationUnbanRequestsRouteHandler)
  .openapi(getModerationBlockedTermsRoute, getModerationBlockedTermsRouteHandler)
  .openapi(postModerationBlockedTermsRoute, postModerationBlockedTermsRouteHandler)
  .openapi(deleteModerationBlockedTermsRoute, deleteModerationBlockedTermsRouteHandler)
  .openapi(deleteModerationChatRoute, deleteModerationChatRouteHandler)
  .openapi(getModerationChannelsRoute, getModerationChannelsRouteHandler)
  .openapi(getModerationModeratorsRoute, getModerationModeratorsRouteHandler)
  .openapi(postModerationModeratorsRoute, postModerationModeratorsRouteHandler)
  .openapi(deleteModerationModeratorsRoute, deleteModerationModeratorsRouteHandler)
  .openapi(getChannelsVipsRoute, getChannelsVipsRouteHandler)
  .openapi(postChannelsVipsRoute, postChannelsVipsRouteHandler)
  .openapi(deleteChannelsVipsRoute, deleteChannelsVipsRouteHandler)
  .openapi(putModerationShieldModeRoute, putModerationShieldModeRouteHandler)
  .openapi(getModerationShieldModeRoute, getModerationShieldModeRouteHandler)
  .openapi(postModerationWarningsRoute, postModerationWarningsRouteHandler)
  .openapi(postModerationSuspiciousUsersRoute, postModerationSuspiciousUsersRouteHandler)
  .openapi(deleteModerationSuspiciousUsersRoute, deleteModerationSuspiciousUsersRouteHandler)
  .openapi(getPollsRoute, getPollsRouteHandler)
  .openapi(postPollsRoute, postPollsRouteHandler)
  .openapi(patchPollsRoute, patchPollsRouteHandler)
  .openapi(getPredictionsRoute, getPredictionsRouteHandler)
  .openapi(postPredictionsRoute, postPredictionsRouteHandler)
  .openapi(patchPredictionsRoute, patchPredictionsRouteHandler)
  .openapi(postRaidsRoute, postRaidsRouteHandler)
  .openapi(deleteRaidsRoute, deleteRaidsRouteHandler)
  .openapi(getScheduleRoute, getScheduleRouteHandler)
  .openapi(getScheduleIcalendarRoute, getScheduleIcalendarRouteHandler)
  .openapi(patchScheduleSettingsRoute, patchScheduleSettingsRouteHandler)
  .openapi(postScheduleSegmentRoute, postScheduleSegmentRouteHandler)
  .openapi(patchScheduleSegmentRoute, patchScheduleSegmentRouteHandler)
  .openapi(deleteScheduleSegmentRoute, deleteScheduleSegmentRouteHandler)
  .openapi(getSearchCategoriesRoute, getSearchCategoriesRouteHandler)
  .openapi(getSearchChannelsRoute, getSearchChannelsRouteHandler)
  .openapi(getStreamsKeyRoute, getStreamsKeyRouteHandler)
  .openapi(getStreamsRoute, getStreamsRouteHandler)
  .openapi(getStreamsFollowedRoute, getStreamsFollowedRouteHandler)
  .openapi(postStreamsMarkersRoute, postStreamsMarkersRouteHandler)
  .openapi(getStreamsMarkersRoute, getStreamsMarkersRouteHandler)
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(getSubscriptionsUserRoute, getSubscriptionsUserRouteHandler)
  .openapi(getTagsStreamsRoute, getTagsStreamsRouteHandler)
  .openapi(getStreamsTagsRoute, getStreamsTagsRouteHandler)
  .openapi(getTeamsChannelRoute, getTeamsChannelRouteHandler)
  .openapi(getTeamsRoute, getTeamsRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(putUsersRoute, putUsersRouteHandler)
  .openapi(getAuthorizationUsersRoute, getAuthorizationUsersRouteHandler)
  .openapi(getUsersBlocksRoute, getUsersBlocksRouteHandler)
  .openapi(putUsersBlocksRoute, putUsersBlocksRouteHandler)
  .openapi(deleteUsersBlocksRoute, deleteUsersBlocksRouteHandler)
  .openapi(getUsersExtensionsListRoute, getUsersExtensionsListRouteHandler)
  .openapi(getUsersExtensionsRoute, getUsersExtensionsRouteHandler)
  .openapi(putUsersExtensionsRoute, putUsersExtensionsRouteHandler)
  .openapi(getVideosRoute, getVideosRouteHandler)
  .openapi(deleteVideosRoute, deleteVideosRouteHandler)
  .openapi(postWhispersRoute, postWhispersRouteHandler)

export default app
