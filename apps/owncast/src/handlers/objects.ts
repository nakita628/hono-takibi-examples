import { OpenAPIHono } from '@hono/zod-openapi'
import {
  optionsAdminAccesstokensCreateRoute,
  optionsAdminAccesstokensDeleteRoute,
  optionsAdminAccesstokensRoute,
  optionsAdminChatClientsRoute,
  optionsAdminChatMessagesRoute,
  optionsAdminChatMessagevisibilityRoute,
  optionsAdminChatUsersDisabledRoute,
  optionsAdminChatUsersIpbansCreateRoute,
  optionsAdminChatUsersIpbansRemoveRoute,
  optionsAdminChatUsersIpbansRoute,
  optionsAdminChatUsersModeratorsRoute,
  optionsAdminChatUsersSetenabledRoute,
  optionsAdminChatUsersSetmoderatorRoute,
  optionsAdminConfigAdminpassRoute,
  optionsAdminConfigAppearanceRoute,
  optionsAdminConfigAutoplayRoute,
  optionsAdminConfigChatDisableRoute,
  optionsAdminConfigChatEstablishedusermodeRoute,
  optionsAdminConfigChatForbiddenusernamesRoute,
  optionsAdminConfigChatJoinmessagesenabledRoute,
  optionsAdminConfigChatRequireauthenticationRoute,
  optionsAdminConfigChatSlurfilterenabledRoute,
  optionsAdminConfigChatSpamprotectionenabledRoute,
  optionsAdminConfigChatSuggestedusernamesRoute,
  optionsAdminConfigCustomjavascriptRoute,
  optionsAdminConfigCustomstylesRoute,
  optionsAdminConfigDirectoryenabledRoute,
  optionsAdminConfigDisablesearchindexingRoute,
  optionsAdminConfigExternalactionsRoute,
  optionsAdminConfigFaviconRoute,
  optionsAdminConfigFederationBlockdomainsRoute,
  optionsAdminConfigFederationEnablequotesRoute,
  optionsAdminConfigFederationEnableRoute,
  optionsAdminConfigFederationHidefollowersRoute,
  optionsAdminConfigFederationLivemessageRoute,
  optionsAdminConfigFederationPrivateRoute,
  optionsAdminConfigFederationShowengagementRoute,
  optionsAdminConfigFederationUsernameRoute,
  optionsAdminConfigFfmpegpathRoute,
  optionsAdminConfigHideviewercountRoute,
  optionsAdminConfigLogoRoute,
  optionsAdminConfigNameRoute,
  optionsAdminConfigNotificationsBrowserRoute,
  optionsAdminConfigNotificationsDiscordRoute,
  optionsAdminConfigNsfwRoute,
  optionsAdminConfigOfflinemessageRoute,
  optionsAdminConfigPagecontentRoute,
  optionsAdminConfigRtmpserverbindaddressRoute,
  optionsAdminConfigRtmpserverportRoute,
  optionsAdminConfigS3Route,
  optionsAdminConfigServersummaryRoute,
  optionsAdminConfigServerurlRoute,
  optionsAdminConfigSocialhandlesRoute,
  optionsAdminConfigSockethostoverrideRoute,
  optionsAdminConfigStreamkeysRoute,
  optionsAdminConfigStreamtitleRoute,
  optionsAdminConfigTagsRoute,
  optionsAdminConfigVideoCodecRoute,
  optionsAdminConfigVideoservingendpointRoute,
  optionsAdminConfigVideoStreamlatencylevelRoute,
  optionsAdminConfigVideoStreamoutputvariantsRoute,
  optionsAdminConfigWebserveripRoute,
  optionsAdminConfigWebserverportRoute,
  optionsAdminConfigWelcomemessageRoute,
  optionsAdminDisconnectRoute,
  optionsAdminEmojiDeleteRoute,
  optionsAdminEmojiUploadRoute,
  optionsAdminFederationActionsRoute,
  optionsAdminFederationSendRoute,
  optionsAdminFederationServersIdReorderRoute,
  optionsAdminFederationServersIdRoute,
  optionsAdminFederationServersRoute,
  optionsAdminFollowersApproveRoute,
  optionsAdminFollowersBlockedRoute,
  optionsAdminFollowersDirectoryRoute,
  optionsAdminFollowersPendingRoute,
  optionsAdminFollowersRemoveRoute,
  optionsAdminFollowersRoute,
  optionsAdminHardwarestatsRoute,
  optionsAdminLogsRoute,
  optionsAdminLogsWarningsRoute,
  optionsAdminMetricsVideoRoute,
  optionsAdminServerconfigRoute,
  optionsAdminStatusRoute,
  optionsAdminUsersDeleteRoute,
  optionsAdminUsersRoute,
  optionsAdminViewersOverTimeRoute,
  optionsAdminViewersPlaybackRoute,
  optionsAdminViewersRoute,
  optionsAdminWebhooksCreateRoute,
  optionsAdminWebhooksDeleteRoute,
  optionsAdminWebhooksRoute,
  optionsAdminYpResetRoute,
  optionsChatRegisterRoute,
  optionsIntegrationsChatActionRoute,
  optionsIntegrationsChatMessagevisibilityRoute,
  optionsIntegrationsChatRoute,
  optionsIntegrationsChatSendRoute,
  optionsIntegrationsChatSystemClientClientIdRoute,
  optionsIntegrationsChatSystemRoute,
  optionsIntegrationsChatUserRoute,
  optionsIntegrationsClientsRoute,
  optionsIntegrationsStreamtitleRoute,
  optionsMetricsCmcdRoute,
  postAdminConfigNameRoute,
  postAdminConfigOfflinemessageRoute,
  postAdminConfigServersummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectsHandler = app
  .openapi(optionsChatRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsMetricsCmcdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminServerconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminViewersOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminViewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminViewersPlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminHardwarestatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersSetenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersDisabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersIpbansCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersIpbansRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersIpbansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersSetmoderatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminChatUsersModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminUsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminLogsWarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersBlockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFollowersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminEmojiUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminEmojiDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigAdminpassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigStreamkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigPagecontentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigStreamtitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigServersummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigServersummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigOfflinemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigOfflinemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigWelcomemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatJoinmessagesenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatEstablishedusermodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatForbiddenusernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatSuggestedusernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatSpamprotectionenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatSlurfilterenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigChatRequireauthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigVideoCodecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigVideoStreamlatencylevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigVideoStreamoutputvariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigAppearanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFaviconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFfmpegpathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigWebserverportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigWebserveripRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigRtmpserverportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigRtmpserverbindaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigSockethostoverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigVideoservingendpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigNsfwRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigAutoplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigDirectoryenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigSocialhandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigServerurlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigExternalactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigCustomstylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigCustomjavascriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigHideviewercountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigDisablesearchindexingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationShowengagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationEnablequotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationHidefollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationLivemessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigFederationBlockdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationServersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationServersIdReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigNotificationsDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminConfigNotificationsBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminWebhooksDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminWebhooksCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminAccesstokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminAccesstokensDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminAccesstokensCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminYpResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminMetricsVideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAdminFederationActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatSystemClientClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsStreamtitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
