import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdCommandsCommandIdRoute,
  deleteApplicationsApplicationIdEmojisEmojiIdRoute,
  deleteApplicationsApplicationIdEntitlementsEntitlementIdRoute,
  deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsRoute,
  deleteChannelsChannelIdMessagesMessageIdRoute,
  deleteChannelsChannelIdMessagesPinsMessageIdRoute,
  deleteChannelsChannelIdPermissionsOverwriteIdRoute,
  deleteChannelsChannelIdPinsMessageIdRoute,
  deleteChannelsChannelIdRecipientsUserIdRoute,
  deleteChannelsChannelIdRoute,
  deleteChannelsChannelIdThreadMembersMeRoute,
  deleteChannelsChannelIdThreadMembersUserIdRoute,
  deleteGuildsGuildIdAutoModerationRulesRuleIdRoute,
  deleteGuildsGuildIdBansUserIdRoute,
  deleteGuildsGuildIdEmojisEmojiIdRoute,
  deleteGuildsGuildIdIntegrationsIntegrationIdRoute,
  deleteGuildsGuildIdMembersUserIdRolesRoleIdRoute,
  deleteGuildsGuildIdMembersUserIdRoute,
  deleteGuildsGuildIdRolesRoleIdRoute,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  deleteGuildsGuildIdSoundboardSoundsSoundIdRoute,
  deleteGuildsGuildIdStickersStickerIdRoute,
  deleteGuildsGuildIdTemplatesCodeRoute,
  deleteInvitesCodeRoute,
  deleteInvitesCodeTargetUsersUserIdRoute,
  deleteLobbiesLobbyIdMembersMeRoute,
  deleteLobbiesLobbyIdMembersUserIdRoute,
  deleteLobbiesLobbyIdRoute,
  deleteStageInstancesChannelIdRoute,
  deleteUsersMeApplicationsApplicationIdRoleConnectionRoute,
  deleteUsersMeGuildsGuildIdRoute,
  deleteWebhooksWebhookIdRoute,
  deleteWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  deleteWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  deleteWebhooksWebhookIdWebhookTokenRoute,
  getApplicationsApplicationIdActivityInstancesInstanceIdRoute,
  getApplicationsApplicationIdCommandsCommandIdRoute,
  getApplicationsApplicationIdCommandsRoute,
  getApplicationsApplicationIdEmojisEmojiIdRoute,
  getApplicationsApplicationIdEmojisRoute,
  getApplicationsApplicationIdEntitlementsEntitlementIdRoute,
  getApplicationsApplicationIdEntitlementsRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  getApplicationsApplicationIdRoleConnectionsMetadataRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsMeRoute,
  getChannelsChannelIdInvitesRoute,
  getChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute,
  getChannelsChannelIdMessagesMessageIdRoute,
  getChannelsChannelIdMessagesPinsRoute,
  getChannelsChannelIdMessagesRoute,
  getChannelsChannelIdPermissionsMemberUserIdRoute,
  getChannelsChannelIdPermissionsRoleRoleIdRoute,
  getChannelsChannelIdPinsRoute,
  getChannelsChannelIdPollsMessageIdAnswersAnswerIdRoute,
  getChannelsChannelIdRoute,
  getChannelsChannelIdThreadMembersRoute,
  getChannelsChannelIdThreadMembersUserIdRoute,
  getChannelsChannelIdThreadsArchivedPrivateRoute,
  getChannelsChannelIdThreadsArchivedPublicRoute,
  getChannelsChannelIdThreadsSearchRoute,
  getChannelsChannelIdUsersMeThreadsArchivedPrivateRoute,
  getChannelsChannelIdWebhooksRoute,
  getGatewayBotRoute,
  getGatewayRoute,
  getGuildsGuildIdAuditLogsRoute,
  getGuildsGuildIdAutoModerationRulesRoute,
  getGuildsGuildIdAutoModerationRulesRuleIdRoute,
  getGuildsGuildIdBansRoute,
  getGuildsGuildIdBansUserIdRoute,
  getGuildsGuildIdChannelsRoute,
  getGuildsGuildIdEmojisEmojiIdRoute,
  getGuildsGuildIdEmojisRoute,
  getGuildsGuildIdIntegrationsRoute,
  getGuildsGuildIdInvitesRoute,
  getGuildsGuildIdMembersRoute,
  getGuildsGuildIdMembersSearchRoute,
  getGuildsGuildIdMembersUserIdRoute,
  getGuildsGuildIdMessagesSearchRoute,
  getGuildsGuildIdNewMemberWelcomeRoute,
  getGuildsGuildIdOnboardingRoute,
  getGuildsGuildIdPermissionsMemberUserIdRoute,
  getGuildsGuildIdPermissionsRoleRoleIdRoute,
  getGuildsGuildIdPreviewRoute,
  getGuildsGuildIdPruneRoute,
  getGuildsGuildIdRegionsRoute,
  getGuildsGuildIdRequestsRoute,
  getGuildsGuildIdRolesMemberCountsRoute,
  getGuildsGuildIdRolesRoleIdRoute,
  getGuildsGuildIdRolesRoute,
  getGuildsGuildIdRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersRoute,
  getGuildsGuildIdScheduledEventsRoute,
  getGuildsGuildIdSoundboardSoundsRoute,
  getGuildsGuildIdSoundboardSoundsSoundIdRoute,
  getGuildsGuildIdStickersRoute,
  getGuildsGuildIdStickersStickerIdRoute,
  getGuildsGuildIdTemplatesRoute,
  getGuildsGuildIdThreadsActiveRoute,
  getGuildsGuildIdVanityUrlRoute,
  getGuildsGuildIdVoiceStatesMeRoute,
  getGuildsGuildIdVoiceStatesUserIdRoute,
  getGuildsGuildIdWebhooksRoute,
  getGuildsGuildIdWelcomeScreenRoute,
  getGuildsGuildIdWidgetJsonRoute,
  getGuildsGuildIdWidgetPngRoute,
  getGuildsGuildIdWidgetRoute,
  getGuildsTemplatesCodeRoute,
  getInvitesCodeRoute,
  getInvitesCodeTargetUsersJobStatusRoute,
  getInvitesCodeTargetUsersRoute,
  getLobbiesLobbyIdMessagesRoute,
  getLobbiesLobbyIdRoute,
  getOauth2ApplicationsMeRoute,
  getOauth2KeysRoute,
  getOauth2MeRoute,
  getOauth2UserinfoRoute,
  getSkusSkuIdSubscriptionsRoute,
  getSkusSkuIdSubscriptionsSubscriptionIdRoute,
  getSoundboardDefaultSoundsRoute,
  getStageInstancesChannelIdRoute,
  getStickerPacksPackIdRoute,
  getStickerPacksRoute,
  getStickersStickerIdRoute,
  getUsersMeApplicationsApplicationIdEntitlementsRoute,
  getUsersMeApplicationsApplicationIdRoleConnectionRoute,
  getUsersMeConnectionsRoute,
  getUsersMeGuildsGuildIdMemberRoute,
  getUsersMeGuildsRoute,
  getUsersMeRoute,
  getUsersUserIdRoute,
  getVoiceRegionsRoute,
  getWebhooksWebhookIdRoute,
  getWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  getWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  getWebhooksWebhookIdWebhookTokenRoute,
  patchApplicationsApplicationIdCommandsCommandIdRoute,
  patchApplicationsApplicationIdEmojisEmojiIdRoute,
  patchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  patchApplicationsApplicationIdRoute,
  patchApplicationsMeRoute,
  patchChannelsChannelIdMessagesMessageIdRoute,
  patchChannelsChannelIdRoute,
  patchGuildsGuildIdAutoModerationRulesRuleIdRoute,
  patchGuildsGuildIdChannelsRoute,
  patchGuildsGuildIdEmojisEmojiIdRoute,
  patchGuildsGuildIdMembersMeRoute,
  patchGuildsGuildIdMembersUserIdRoute,
  patchGuildsGuildIdRequestsRequestIdRoute,
  patchGuildsGuildIdRolesRoleIdRoute,
  patchGuildsGuildIdRolesRoute,
  patchGuildsGuildIdRoute,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  patchGuildsGuildIdSoundboardSoundsSoundIdRoute,
  patchGuildsGuildIdStickersStickerIdRoute,
  patchGuildsGuildIdTemplatesCodeRoute,
  patchGuildsGuildIdVoiceStatesMeRoute,
  patchGuildsGuildIdVoiceStatesUserIdRoute,
  patchGuildsGuildIdWelcomeScreenRoute,
  patchGuildsGuildIdWidgetRoute,
  patchLobbiesLobbyIdChannelLinkingRoute,
  patchLobbiesLobbyIdRoute,
  patchStageInstancesChannelIdRoute,
  patchUsersMeRoute,
  patchWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  patchWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  patchWebhooksWebhookIdWebhookTokenRoute,
  postApplicationsApplicationIdAttachmentRoute,
  postApplicationsApplicationIdCommandsRoute,
  postApplicationsApplicationIdEmojisRoute,
  postApplicationsApplicationIdEntitlementsEntitlementIdConsumeRoute,
  postApplicationsApplicationIdEntitlementsRoute,
  postApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  postChannelsChannelIdFollowersRoute,
  postChannelsChannelIdInvitesRoute,
  postChannelsChannelIdMessagesBulkDeleteRoute,
  postChannelsChannelIdMessagesMessageIdCrosspostRoute,
  postChannelsChannelIdMessagesMessageIdThreadsRoute,
  postChannelsChannelIdMessagesRoute,
  postChannelsChannelIdPollsMessageIdExpireRoute,
  postChannelsChannelIdSendSoundboardSoundRoute,
  postChannelsChannelIdThreadsRoute,
  postChannelsChannelIdTypingRoute,
  postChannelsChannelIdWebhooksRoute,
  postGuildsGuildIdAutoModerationRulesRoute,
  postGuildsGuildIdBulkBanRoute,
  postGuildsGuildIdChannelsRoute,
  postGuildsGuildIdEmojisRoute,
  postGuildsGuildIdPruneRoute,
  postGuildsGuildIdRolesRoute,
  postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsRoute,
  postGuildsGuildIdScheduledEventsRoute,
  postGuildsGuildIdSoundboardSoundsRoute,
  postGuildsGuildIdStickersRoute,
  postGuildsGuildIdTemplatesRoute,
  postInteractionsInteractionIdInteractionTokenCallbackRoute,
  postInvitesCodeTargetUsersBulkAddRoute,
  postInvitesCodeTargetUsersBulkDeleteRoute,
  postLobbiesLobbyIdMembersBulkRoute,
  postLobbiesLobbyIdMembersMeInvitesRoute,
  postLobbiesLobbyIdMembersUserIdInvitesRoute,
  postLobbiesLobbyIdMessagesRoute,
  postLobbiesRoute,
  postPartnerSdkProvisionalAccountsUnmergeBotRoute,
  postPartnerSdkProvisionalAccountsUnmergeRoute,
  postPartnerSdkTokenBotRoute,
  postPartnerSdkTokenRoute,
  postStageInstancesRoute,
  postUsersMeChannelsRoute,
  postWebhooksWebhookIdWebhookTokenGithubRoute,
  postWebhooksWebhookIdWebhookTokenRoute,
  postWebhooksWebhookIdWebhookTokenSlackRoute,
  putApplicationsApplicationIdCommandsRoute,
  putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute,
  putApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  putApplicationsApplicationIdRoleConnectionsMetadataRoute,
  putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute,
  putChannelsChannelIdMessagesPinsMessageIdRoute,
  putChannelsChannelIdPermissionsOverwriteIdRoute,
  putChannelsChannelIdPinsMessageIdRoute,
  putChannelsChannelIdRecipientsUserIdRoute,
  putChannelsChannelIdThreadMembersMeRoute,
  putChannelsChannelIdThreadMembersUserIdRoute,
  putChannelsChannelIdVoiceStatusRoute,
  putGuildsGuildIdBansUserIdRoute,
  putGuildsGuildIdIncidentActionsRoute,
  putGuildsGuildIdMembersUserIdRolesRoleIdRoute,
  putGuildsGuildIdMembersUserIdRoute,
  putGuildsGuildIdOnboardingRoute,
  putGuildsGuildIdTemplatesCodeRoute,
  putInvitesCodeTargetUsersRoute,
  putInvitesCodeTargetUsersUserIdRoute,
  putLobbiesLobbyIdMembersUserIdRoute,
  putLobbiesLobbyIdMessagesMessageIdModerationMetadataRoute,
  putLobbiesRoute,
  putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataRoute,
  putUsersMeApplicationsApplicationIdRoleConnectionRoute,
} from './routes'
import {
  deleteApplicationsApplicationIdCommandsCommandIdRouteHandler,
  deleteApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  deleteApplicationsApplicationIdEntitlementsEntitlementIdRouteHandler,
  deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdReactionsRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdRouteHandler,
  deleteChannelsChannelIdMessagesPinsMessageIdRouteHandler,
  deleteChannelsChannelIdPermissionsOverwriteIdRouteHandler,
  deleteChannelsChannelIdPinsMessageIdRouteHandler,
  deleteChannelsChannelIdRecipientsUserIdRouteHandler,
  deleteChannelsChannelIdRouteHandler,
  deleteChannelsChannelIdThreadMembersMeRouteHandler,
  deleteChannelsChannelIdThreadMembersUserIdRouteHandler,
  deleteGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  deleteGuildsGuildIdBansUserIdRouteHandler,
  deleteGuildsGuildIdEmojisEmojiIdRouteHandler,
  deleteGuildsGuildIdIntegrationsIntegrationIdRouteHandler,
  deleteGuildsGuildIdMembersUserIdRolesRoleIdRouteHandler,
  deleteGuildsGuildIdMembersUserIdRouteHandler,
  deleteGuildsGuildIdRolesRoleIdRouteHandler,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRouteHandler,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  deleteGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  deleteGuildsGuildIdStickersStickerIdRouteHandler,
  deleteGuildsGuildIdTemplatesCodeRouteHandler,
  deleteInvitesCodeRouteHandler,
  deleteInvitesCodeTargetUsersUserIdRouteHandler,
  deleteLobbiesLobbyIdMembersMeRouteHandler,
  deleteLobbiesLobbyIdMembersUserIdRouteHandler,
  deleteLobbiesLobbyIdRouteHandler,
  deleteStageInstancesChannelIdRouteHandler,
  deleteUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
  deleteUsersMeGuildsGuildIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  deleteWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  deleteWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  deleteWebhooksWebhookIdWebhookTokenRouteHandler,
  getApplicationsApplicationIdActivityInstancesInstanceIdRouteHandler,
  getApplicationsApplicationIdCommandsCommandIdRouteHandler,
  getApplicationsApplicationIdCommandsRouteHandler,
  getApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  getApplicationsApplicationIdEmojisRouteHandler,
  getApplicationsApplicationIdEntitlementsEntitlementIdRouteHandler,
  getApplicationsApplicationIdEntitlementsRouteHandler,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRouteHandler,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsRouteHandler,
  getApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  getApplicationsApplicationIdRoleConnectionsMetadataRouteHandler,
  getApplicationsApplicationIdRouteHandler,
  getApplicationsMeRouteHandler,
  getChannelsChannelIdInvitesRouteHandler,
  getChannelsChannelIdMessagesMessageIdReactionsEmojiNameRouteHandler,
  getChannelsChannelIdMessagesMessageIdRouteHandler,
  getChannelsChannelIdMessagesPinsRouteHandler,
  getChannelsChannelIdMessagesRouteHandler,
  getChannelsChannelIdPermissionsMemberUserIdRouteHandler,
  getChannelsChannelIdPermissionsRoleRoleIdRouteHandler,
  getChannelsChannelIdPinsRouteHandler,
  getChannelsChannelIdPollsMessageIdAnswersAnswerIdRouteHandler,
  getChannelsChannelIdRouteHandler,
  getChannelsChannelIdThreadMembersRouteHandler,
  getChannelsChannelIdThreadMembersUserIdRouteHandler,
  getChannelsChannelIdThreadsArchivedPrivateRouteHandler,
  getChannelsChannelIdThreadsArchivedPublicRouteHandler,
  getChannelsChannelIdThreadsSearchRouteHandler,
  getChannelsChannelIdUsersMeThreadsArchivedPrivateRouteHandler,
  getChannelsChannelIdWebhooksRouteHandler,
  getGatewayBotRouteHandler,
  getGatewayRouteHandler,
  getGuildsGuildIdAuditLogsRouteHandler,
  getGuildsGuildIdAutoModerationRulesRouteHandler,
  getGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  getGuildsGuildIdBansRouteHandler,
  getGuildsGuildIdBansUserIdRouteHandler,
  getGuildsGuildIdChannelsRouteHandler,
  getGuildsGuildIdEmojisEmojiIdRouteHandler,
  getGuildsGuildIdEmojisRouteHandler,
  getGuildsGuildIdIntegrationsRouteHandler,
  getGuildsGuildIdInvitesRouteHandler,
  getGuildsGuildIdMembersRouteHandler,
  getGuildsGuildIdMembersSearchRouteHandler,
  getGuildsGuildIdMembersUserIdRouteHandler,
  getGuildsGuildIdMessagesSearchRouteHandler,
  getGuildsGuildIdNewMemberWelcomeRouteHandler,
  getGuildsGuildIdOnboardingRouteHandler,
  getGuildsGuildIdPermissionsMemberUserIdRouteHandler,
  getGuildsGuildIdPermissionsRoleRoleIdRouteHandler,
  getGuildsGuildIdPreviewRouteHandler,
  getGuildsGuildIdPruneRouteHandler,
  getGuildsGuildIdRegionsRouteHandler,
  getGuildsGuildIdRequestsRouteHandler,
  getGuildsGuildIdRolesMemberCountsRouteHandler,
  getGuildsGuildIdRolesRoleIdRouteHandler,
  getGuildsGuildIdRolesRouteHandler,
  getGuildsGuildIdRouteHandler,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersRouteHandler,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsRouteHandler,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersRouteHandler,
  getGuildsGuildIdScheduledEventsRouteHandler,
  getGuildsGuildIdSoundboardSoundsRouteHandler,
  getGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  getGuildsGuildIdStickersRouteHandler,
  getGuildsGuildIdStickersStickerIdRouteHandler,
  getGuildsGuildIdTemplatesRouteHandler,
  getGuildsGuildIdThreadsActiveRouteHandler,
  getGuildsGuildIdVanityUrlRouteHandler,
  getGuildsGuildIdVoiceStatesMeRouteHandler,
  getGuildsGuildIdVoiceStatesUserIdRouteHandler,
  getGuildsGuildIdWebhooksRouteHandler,
  getGuildsGuildIdWelcomeScreenRouteHandler,
  getGuildsGuildIdWidgetJsonRouteHandler,
  getGuildsGuildIdWidgetPngRouteHandler,
  getGuildsGuildIdWidgetRouteHandler,
  getGuildsTemplatesCodeRouteHandler,
  getInvitesCodeRouteHandler,
  getInvitesCodeTargetUsersJobStatusRouteHandler,
  getInvitesCodeTargetUsersRouteHandler,
  getLobbiesLobbyIdMessagesRouteHandler,
  getLobbiesLobbyIdRouteHandler,
  getOauth2ApplicationsMeRouteHandler,
  getOauth2KeysRouteHandler,
  getOauth2MeRouteHandler,
  getOauth2UserinfoRouteHandler,
  getSkusSkuIdSubscriptionsRouteHandler,
  getSkusSkuIdSubscriptionsSubscriptionIdRouteHandler,
  getSoundboardDefaultSoundsRouteHandler,
  getStageInstancesChannelIdRouteHandler,
  getStickerPacksPackIdRouteHandler,
  getStickerPacksRouteHandler,
  getStickersStickerIdRouteHandler,
  getUsersMeApplicationsApplicationIdEntitlementsRouteHandler,
  getUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
  getUsersMeConnectionsRouteHandler,
  getUsersMeGuildsGuildIdMemberRouteHandler,
  getUsersMeGuildsRouteHandler,
  getUsersMeRouteHandler,
  getUsersUserIdRouteHandler,
  getVoiceRegionsRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  getWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  getWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  getWebhooksWebhookIdWebhookTokenRouteHandler,
  patchApplicationsApplicationIdCommandsCommandIdRouteHandler,
  patchApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  patchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  patchApplicationsApplicationIdRouteHandler,
  patchApplicationsMeRouteHandler,
  patchChannelsChannelIdMessagesMessageIdRouteHandler,
  patchChannelsChannelIdRouteHandler,
  patchGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  patchGuildsGuildIdChannelsRouteHandler,
  patchGuildsGuildIdEmojisEmojiIdRouteHandler,
  patchGuildsGuildIdMembersMeRouteHandler,
  patchGuildsGuildIdMembersUserIdRouteHandler,
  patchGuildsGuildIdRequestsRequestIdRouteHandler,
  patchGuildsGuildIdRolesRoleIdRouteHandler,
  patchGuildsGuildIdRolesRouteHandler,
  patchGuildsGuildIdRouteHandler,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRouteHandler,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  patchGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  patchGuildsGuildIdStickersStickerIdRouteHandler,
  patchGuildsGuildIdTemplatesCodeRouteHandler,
  patchGuildsGuildIdVoiceStatesMeRouteHandler,
  patchGuildsGuildIdVoiceStatesUserIdRouteHandler,
  patchGuildsGuildIdWelcomeScreenRouteHandler,
  patchGuildsGuildIdWidgetRouteHandler,
  patchLobbiesLobbyIdChannelLinkingRouteHandler,
  patchLobbiesLobbyIdRouteHandler,
  patchStageInstancesChannelIdRouteHandler,
  patchUsersMeRouteHandler,
  patchWebhooksWebhookIdRouteHandler,
  patchWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  patchWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  patchWebhooksWebhookIdWebhookTokenRouteHandler,
  postApplicationsApplicationIdAttachmentRouteHandler,
  postApplicationsApplicationIdCommandsRouteHandler,
  postApplicationsApplicationIdEmojisRouteHandler,
  postApplicationsApplicationIdEntitlementsEntitlementIdConsumeRouteHandler,
  postApplicationsApplicationIdEntitlementsRouteHandler,
  postApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  postChannelsChannelIdFollowersRouteHandler,
  postChannelsChannelIdInvitesRouteHandler,
  postChannelsChannelIdMessagesBulkDeleteRouteHandler,
  postChannelsChannelIdMessagesMessageIdCrosspostRouteHandler,
  postChannelsChannelIdMessagesMessageIdThreadsRouteHandler,
  postChannelsChannelIdMessagesRouteHandler,
  postChannelsChannelIdPollsMessageIdExpireRouteHandler,
  postChannelsChannelIdSendSoundboardSoundRouteHandler,
  postChannelsChannelIdThreadsRouteHandler,
  postChannelsChannelIdTypingRouteHandler,
  postChannelsChannelIdWebhooksRouteHandler,
  postGuildsGuildIdAutoModerationRulesRouteHandler,
  postGuildsGuildIdBulkBanRouteHandler,
  postGuildsGuildIdChannelsRouteHandler,
  postGuildsGuildIdEmojisRouteHandler,
  postGuildsGuildIdPruneRouteHandler,
  postGuildsGuildIdRolesRouteHandler,
  postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsRouteHandler,
  postGuildsGuildIdScheduledEventsRouteHandler,
  postGuildsGuildIdSoundboardSoundsRouteHandler,
  postGuildsGuildIdStickersRouteHandler,
  postGuildsGuildIdTemplatesRouteHandler,
  postInteractionsInteractionIdInteractionTokenCallbackRouteHandler,
  postInvitesCodeTargetUsersBulkAddRouteHandler,
  postInvitesCodeTargetUsersBulkDeleteRouteHandler,
  postLobbiesLobbyIdMembersBulkRouteHandler,
  postLobbiesLobbyIdMembersMeInvitesRouteHandler,
  postLobbiesLobbyIdMembersUserIdInvitesRouteHandler,
  postLobbiesLobbyIdMessagesRouteHandler,
  postLobbiesRouteHandler,
  postPartnerSdkProvisionalAccountsUnmergeBotRouteHandler,
  postPartnerSdkProvisionalAccountsUnmergeRouteHandler,
  postPartnerSdkTokenBotRouteHandler,
  postPartnerSdkTokenRouteHandler,
  postStageInstancesRouteHandler,
  postUsersMeChannelsRouteHandler,
  postWebhooksWebhookIdWebhookTokenGithubRouteHandler,
  postWebhooksWebhookIdWebhookTokenRouteHandler,
  postWebhooksWebhookIdWebhookTokenSlackRouteHandler,
  putApplicationsApplicationIdCommandsRouteHandler,
  putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRouteHandler,
  putApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  putApplicationsApplicationIdRoleConnectionsMetadataRouteHandler,
  putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRouteHandler,
  putChannelsChannelIdMessagesPinsMessageIdRouteHandler,
  putChannelsChannelIdPermissionsOverwriteIdRouteHandler,
  putChannelsChannelIdPinsMessageIdRouteHandler,
  putChannelsChannelIdRecipientsUserIdRouteHandler,
  putChannelsChannelIdThreadMembersMeRouteHandler,
  putChannelsChannelIdThreadMembersUserIdRouteHandler,
  putChannelsChannelIdVoiceStatusRouteHandler,
  putGuildsGuildIdBansUserIdRouteHandler,
  putGuildsGuildIdIncidentActionsRouteHandler,
  putGuildsGuildIdMembersUserIdRolesRoleIdRouteHandler,
  putGuildsGuildIdMembersUserIdRouteHandler,
  putGuildsGuildIdOnboardingRouteHandler,
  putGuildsGuildIdTemplatesCodeRouteHandler,
  putInvitesCodeTargetUsersRouteHandler,
  putInvitesCodeTargetUsersUserIdRouteHandler,
  putLobbiesLobbyIdMembersUserIdRouteHandler,
  putLobbiesLobbyIdMessagesMessageIdModerationMetadataRouteHandler,
  putLobbiesRouteHandler,
  putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataRouteHandler,
  putUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApplicationsMeRoute, getApplicationsMeRouteHandler)
  .openapi(patchApplicationsMeRoute, patchApplicationsMeRouteHandler)
  .openapi(getApplicationsApplicationIdRoute, getApplicationsApplicationIdRouteHandler)
  .openapi(patchApplicationsApplicationIdRoute, patchApplicationsApplicationIdRouteHandler)
  .openapi(
    getApplicationsApplicationIdActivityInstancesInstanceIdRoute,
    getApplicationsApplicationIdActivityInstancesInstanceIdRouteHandler,
  )
  .openapi(
    postApplicationsApplicationIdAttachmentRoute,
    postApplicationsApplicationIdAttachmentRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdCommandsRoute,
    getApplicationsApplicationIdCommandsRouteHandler,
  )
  .openapi(
    putApplicationsApplicationIdCommandsRoute,
    putApplicationsApplicationIdCommandsRouteHandler,
  )
  .openapi(
    postApplicationsApplicationIdCommandsRoute,
    postApplicationsApplicationIdCommandsRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdCommandsCommandIdRoute,
    getApplicationsApplicationIdCommandsCommandIdRouteHandler,
  )
  .openapi(
    deleteApplicationsApplicationIdCommandsCommandIdRoute,
    deleteApplicationsApplicationIdCommandsCommandIdRouteHandler,
  )
  .openapi(
    patchApplicationsApplicationIdCommandsCommandIdRoute,
    patchApplicationsApplicationIdCommandsCommandIdRouteHandler,
  )
  .openapi(getApplicationsApplicationIdEmojisRoute, getApplicationsApplicationIdEmojisRouteHandler)
  .openapi(
    postApplicationsApplicationIdEmojisRoute,
    postApplicationsApplicationIdEmojisRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdEmojisEmojiIdRoute,
    getApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  )
  .openapi(
    deleteApplicationsApplicationIdEmojisEmojiIdRoute,
    deleteApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  )
  .openapi(
    patchApplicationsApplicationIdEmojisEmojiIdRoute,
    patchApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdEntitlementsRoute,
    getApplicationsApplicationIdEntitlementsRouteHandler,
  )
  .openapi(
    postApplicationsApplicationIdEntitlementsRoute,
    postApplicationsApplicationIdEntitlementsRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdEntitlementsEntitlementIdRoute,
    getApplicationsApplicationIdEntitlementsEntitlementIdRouteHandler,
  )
  .openapi(
    deleteApplicationsApplicationIdEntitlementsEntitlementIdRoute,
    deleteApplicationsApplicationIdEntitlementsEntitlementIdRouteHandler,
  )
  .openapi(
    postApplicationsApplicationIdEntitlementsEntitlementIdConsumeRoute,
    postApplicationsApplicationIdEntitlementsEntitlementIdConsumeRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdGuildsGuildIdCommandsRoute,
    getApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  )
  .openapi(
    putApplicationsApplicationIdGuildsGuildIdCommandsRoute,
    putApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  )
  .openapi(
    postApplicationsApplicationIdGuildsGuildIdCommandsRoute,
    postApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsRoute,
    getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
    getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  )
  .openapi(
    deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
    deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  )
  .openapi(
    patchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
    patchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute,
    getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRouteHandler,
  )
  .openapi(
    putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute,
    putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRouteHandler,
  )
  .openapi(
    getApplicationsApplicationIdRoleConnectionsMetadataRoute,
    getApplicationsApplicationIdRoleConnectionsMetadataRouteHandler,
  )
  .openapi(
    putApplicationsApplicationIdRoleConnectionsMetadataRoute,
    putApplicationsApplicationIdRoleConnectionsMetadataRouteHandler,
  )
  .openapi(getChannelsChannelIdRoute, getChannelsChannelIdRouteHandler)
  .openapi(deleteChannelsChannelIdRoute, deleteChannelsChannelIdRouteHandler)
  .openapi(patchChannelsChannelIdRoute, patchChannelsChannelIdRouteHandler)
  .openapi(postChannelsChannelIdFollowersRoute, postChannelsChannelIdFollowersRouteHandler)
  .openapi(getChannelsChannelIdInvitesRoute, getChannelsChannelIdInvitesRouteHandler)
  .openapi(postChannelsChannelIdInvitesRoute, postChannelsChannelIdInvitesRouteHandler)
  .openapi(getChannelsChannelIdMessagesRoute, getChannelsChannelIdMessagesRouteHandler)
  .openapi(postChannelsChannelIdMessagesRoute, postChannelsChannelIdMessagesRouteHandler)
  .openapi(
    postChannelsChannelIdMessagesBulkDeleteRoute,
    postChannelsChannelIdMessagesBulkDeleteRouteHandler,
  )
  .openapi(getChannelsChannelIdMessagesPinsRoute, getChannelsChannelIdMessagesPinsRouteHandler)
  .openapi(
    putChannelsChannelIdMessagesPinsMessageIdRoute,
    putChannelsChannelIdMessagesPinsMessageIdRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdMessagesPinsMessageIdRoute,
    deleteChannelsChannelIdMessagesPinsMessageIdRouteHandler,
  )
  .openapi(
    getChannelsChannelIdMessagesMessageIdRoute,
    getChannelsChannelIdMessagesMessageIdRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdMessagesMessageIdRoute,
    deleteChannelsChannelIdMessagesMessageIdRouteHandler,
  )
  .openapi(
    patchChannelsChannelIdMessagesMessageIdRoute,
    patchChannelsChannelIdMessagesMessageIdRouteHandler,
  )
  .openapi(
    postChannelsChannelIdMessagesMessageIdCrosspostRoute,
    postChannelsChannelIdMessagesMessageIdCrosspostRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdMessagesMessageIdReactionsRoute,
    deleteChannelsChannelIdMessagesMessageIdReactionsRouteHandler,
  )
  .openapi(
    getChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute,
    getChannelsChannelIdMessagesMessageIdReactionsEmojiNameRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute,
    deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameRouteHandler,
  )
  .openapi(
    putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute,
    putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute,
    deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdRoute,
    deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdRouteHandler,
  )
  .openapi(
    postChannelsChannelIdMessagesMessageIdThreadsRoute,
    postChannelsChannelIdMessagesMessageIdThreadsRouteHandler,
  )
  .openapi(
    getChannelsChannelIdPermissionsMemberUserIdRoute,
    getChannelsChannelIdPermissionsMemberUserIdRouteHandler,
  )
  .openapi(
    getChannelsChannelIdPermissionsRoleRoleIdRoute,
    getChannelsChannelIdPermissionsRoleRoleIdRouteHandler,
  )
  .openapi(
    putChannelsChannelIdPermissionsOverwriteIdRoute,
    putChannelsChannelIdPermissionsOverwriteIdRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdPermissionsOverwriteIdRoute,
    deleteChannelsChannelIdPermissionsOverwriteIdRouteHandler,
  )
  .openapi(getChannelsChannelIdPinsRoute, getChannelsChannelIdPinsRouteHandler)
  .openapi(putChannelsChannelIdPinsMessageIdRoute, putChannelsChannelIdPinsMessageIdRouteHandler)
  .openapi(
    deleteChannelsChannelIdPinsMessageIdRoute,
    deleteChannelsChannelIdPinsMessageIdRouteHandler,
  )
  .openapi(
    getChannelsChannelIdPollsMessageIdAnswersAnswerIdRoute,
    getChannelsChannelIdPollsMessageIdAnswersAnswerIdRouteHandler,
  )
  .openapi(
    postChannelsChannelIdPollsMessageIdExpireRoute,
    postChannelsChannelIdPollsMessageIdExpireRouteHandler,
  )
  .openapi(
    putChannelsChannelIdRecipientsUserIdRoute,
    putChannelsChannelIdRecipientsUserIdRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdRecipientsUserIdRoute,
    deleteChannelsChannelIdRecipientsUserIdRouteHandler,
  )
  .openapi(
    postChannelsChannelIdSendSoundboardSoundRoute,
    postChannelsChannelIdSendSoundboardSoundRouteHandler,
  )
  .openapi(getChannelsChannelIdThreadMembersRoute, getChannelsChannelIdThreadMembersRouteHandler)
  .openapi(
    putChannelsChannelIdThreadMembersMeRoute,
    putChannelsChannelIdThreadMembersMeRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdThreadMembersMeRoute,
    deleteChannelsChannelIdThreadMembersMeRouteHandler,
  )
  .openapi(
    getChannelsChannelIdThreadMembersUserIdRoute,
    getChannelsChannelIdThreadMembersUserIdRouteHandler,
  )
  .openapi(
    putChannelsChannelIdThreadMembersUserIdRoute,
    putChannelsChannelIdThreadMembersUserIdRouteHandler,
  )
  .openapi(
    deleteChannelsChannelIdThreadMembersUserIdRoute,
    deleteChannelsChannelIdThreadMembersUserIdRouteHandler,
  )
  .openapi(postChannelsChannelIdThreadsRoute, postChannelsChannelIdThreadsRouteHandler)
  .openapi(
    getChannelsChannelIdThreadsArchivedPrivateRoute,
    getChannelsChannelIdThreadsArchivedPrivateRouteHandler,
  )
  .openapi(
    getChannelsChannelIdThreadsArchivedPublicRoute,
    getChannelsChannelIdThreadsArchivedPublicRouteHandler,
  )
  .openapi(getChannelsChannelIdThreadsSearchRoute, getChannelsChannelIdThreadsSearchRouteHandler)
  .openapi(postChannelsChannelIdTypingRoute, postChannelsChannelIdTypingRouteHandler)
  .openapi(
    getChannelsChannelIdUsersMeThreadsArchivedPrivateRoute,
    getChannelsChannelIdUsersMeThreadsArchivedPrivateRouteHandler,
  )
  .openapi(putChannelsChannelIdVoiceStatusRoute, putChannelsChannelIdVoiceStatusRouteHandler)
  .openapi(getChannelsChannelIdWebhooksRoute, getChannelsChannelIdWebhooksRouteHandler)
  .openapi(postChannelsChannelIdWebhooksRoute, postChannelsChannelIdWebhooksRouteHandler)
  .openapi(getGatewayRoute, getGatewayRouteHandler)
  .openapi(getGatewayBotRoute, getGatewayBotRouteHandler)
  .openapi(getGuildsTemplatesCodeRoute, getGuildsTemplatesCodeRouteHandler)
  .openapi(getGuildsGuildIdRoute, getGuildsGuildIdRouteHandler)
  .openapi(patchGuildsGuildIdRoute, patchGuildsGuildIdRouteHandler)
  .openapi(getGuildsGuildIdAuditLogsRoute, getGuildsGuildIdAuditLogsRouteHandler)
  .openapi(
    getGuildsGuildIdAutoModerationRulesRoute,
    getGuildsGuildIdAutoModerationRulesRouteHandler,
  )
  .openapi(
    postGuildsGuildIdAutoModerationRulesRoute,
    postGuildsGuildIdAutoModerationRulesRouteHandler,
  )
  .openapi(
    getGuildsGuildIdAutoModerationRulesRuleIdRoute,
    getGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  )
  .openapi(
    deleteGuildsGuildIdAutoModerationRulesRuleIdRoute,
    deleteGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  )
  .openapi(
    patchGuildsGuildIdAutoModerationRulesRuleIdRoute,
    patchGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  )
  .openapi(getGuildsGuildIdBansRoute, getGuildsGuildIdBansRouteHandler)
  .openapi(getGuildsGuildIdBansUserIdRoute, getGuildsGuildIdBansUserIdRouteHandler)
  .openapi(putGuildsGuildIdBansUserIdRoute, putGuildsGuildIdBansUserIdRouteHandler)
  .openapi(deleteGuildsGuildIdBansUserIdRoute, deleteGuildsGuildIdBansUserIdRouteHandler)
  .openapi(postGuildsGuildIdBulkBanRoute, postGuildsGuildIdBulkBanRouteHandler)
  .openapi(getGuildsGuildIdChannelsRoute, getGuildsGuildIdChannelsRouteHandler)
  .openapi(postGuildsGuildIdChannelsRoute, postGuildsGuildIdChannelsRouteHandler)
  .openapi(patchGuildsGuildIdChannelsRoute, patchGuildsGuildIdChannelsRouteHandler)
  .openapi(getGuildsGuildIdEmojisRoute, getGuildsGuildIdEmojisRouteHandler)
  .openapi(postGuildsGuildIdEmojisRoute, postGuildsGuildIdEmojisRouteHandler)
  .openapi(getGuildsGuildIdEmojisEmojiIdRoute, getGuildsGuildIdEmojisEmojiIdRouteHandler)
  .openapi(deleteGuildsGuildIdEmojisEmojiIdRoute, deleteGuildsGuildIdEmojisEmojiIdRouteHandler)
  .openapi(patchGuildsGuildIdEmojisEmojiIdRoute, patchGuildsGuildIdEmojisEmojiIdRouteHandler)
  .openapi(putGuildsGuildIdIncidentActionsRoute, putGuildsGuildIdIncidentActionsRouteHandler)
  .openapi(getGuildsGuildIdIntegrationsRoute, getGuildsGuildIdIntegrationsRouteHandler)
  .openapi(
    deleteGuildsGuildIdIntegrationsIntegrationIdRoute,
    deleteGuildsGuildIdIntegrationsIntegrationIdRouteHandler,
  )
  .openapi(getGuildsGuildIdInvitesRoute, getGuildsGuildIdInvitesRouteHandler)
  .openapi(getGuildsGuildIdMembersRoute, getGuildsGuildIdMembersRouteHandler)
  .openapi(patchGuildsGuildIdMembersMeRoute, patchGuildsGuildIdMembersMeRouteHandler)
  .openapi(getGuildsGuildIdMembersSearchRoute, getGuildsGuildIdMembersSearchRouteHandler)
  .openapi(getGuildsGuildIdMembersUserIdRoute, getGuildsGuildIdMembersUserIdRouteHandler)
  .openapi(putGuildsGuildIdMembersUserIdRoute, putGuildsGuildIdMembersUserIdRouteHandler)
  .openapi(deleteGuildsGuildIdMembersUserIdRoute, deleteGuildsGuildIdMembersUserIdRouteHandler)
  .openapi(patchGuildsGuildIdMembersUserIdRoute, patchGuildsGuildIdMembersUserIdRouteHandler)
  .openapi(
    putGuildsGuildIdMembersUserIdRolesRoleIdRoute,
    putGuildsGuildIdMembersUserIdRolesRoleIdRouteHandler,
  )
  .openapi(
    deleteGuildsGuildIdMembersUserIdRolesRoleIdRoute,
    deleteGuildsGuildIdMembersUserIdRolesRoleIdRouteHandler,
  )
  .openapi(getGuildsGuildIdMessagesSearchRoute, getGuildsGuildIdMessagesSearchRouteHandler)
  .openapi(getGuildsGuildIdNewMemberWelcomeRoute, getGuildsGuildIdNewMemberWelcomeRouteHandler)
  .openapi(getGuildsGuildIdOnboardingRoute, getGuildsGuildIdOnboardingRouteHandler)
  .openapi(putGuildsGuildIdOnboardingRoute, putGuildsGuildIdOnboardingRouteHandler)
  .openapi(
    getGuildsGuildIdPermissionsMemberUserIdRoute,
    getGuildsGuildIdPermissionsMemberUserIdRouteHandler,
  )
  .openapi(
    getGuildsGuildIdPermissionsRoleRoleIdRoute,
    getGuildsGuildIdPermissionsRoleRoleIdRouteHandler,
  )
  .openapi(getGuildsGuildIdPreviewRoute, getGuildsGuildIdPreviewRouteHandler)
  .openapi(getGuildsGuildIdPruneRoute, getGuildsGuildIdPruneRouteHandler)
  .openapi(postGuildsGuildIdPruneRoute, postGuildsGuildIdPruneRouteHandler)
  .openapi(getGuildsGuildIdRegionsRoute, getGuildsGuildIdRegionsRouteHandler)
  .openapi(getGuildsGuildIdRequestsRoute, getGuildsGuildIdRequestsRouteHandler)
  .openapi(
    patchGuildsGuildIdRequestsRequestIdRoute,
    patchGuildsGuildIdRequestsRequestIdRouteHandler,
  )
  .openapi(getGuildsGuildIdRolesRoute, getGuildsGuildIdRolesRouteHandler)
  .openapi(postGuildsGuildIdRolesRoute, postGuildsGuildIdRolesRouteHandler)
  .openapi(patchGuildsGuildIdRolesRoute, patchGuildsGuildIdRolesRouteHandler)
  .openapi(getGuildsGuildIdRolesMemberCountsRoute, getGuildsGuildIdRolesMemberCountsRouteHandler)
  .openapi(getGuildsGuildIdRolesRoleIdRoute, getGuildsGuildIdRolesRoleIdRouteHandler)
  .openapi(deleteGuildsGuildIdRolesRoleIdRoute, deleteGuildsGuildIdRolesRoleIdRouteHandler)
  .openapi(patchGuildsGuildIdRolesRoleIdRoute, patchGuildsGuildIdRolesRoleIdRouteHandler)
  .openapi(getGuildsGuildIdScheduledEventsRoute, getGuildsGuildIdScheduledEventsRouteHandler)
  .openapi(postGuildsGuildIdScheduledEventsRoute, postGuildsGuildIdScheduledEventsRouteHandler)
  .openapi(
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  )
  .openapi(
    deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
    deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  )
  .openapi(
    patchGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
    patchGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  )
  .openapi(
    postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsRoute,
    postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsRouteHandler,
  )
  .openapi(
    deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
    deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRouteHandler,
  )
  .openapi(
    patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
    patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRouteHandler,
  )
  .openapi(
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersRoute,
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersRouteHandler,
  )
  .openapi(
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsRoute,
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsRouteHandler,
  )
  .openapi(
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersRoute,
    getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersRouteHandler,
  )
  .openapi(getGuildsGuildIdSoundboardSoundsRoute, getGuildsGuildIdSoundboardSoundsRouteHandler)
  .openapi(postGuildsGuildIdSoundboardSoundsRoute, postGuildsGuildIdSoundboardSoundsRouteHandler)
  .openapi(
    getGuildsGuildIdSoundboardSoundsSoundIdRoute,
    getGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  )
  .openapi(
    deleteGuildsGuildIdSoundboardSoundsSoundIdRoute,
    deleteGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  )
  .openapi(
    patchGuildsGuildIdSoundboardSoundsSoundIdRoute,
    patchGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  )
  .openapi(getGuildsGuildIdStickersRoute, getGuildsGuildIdStickersRouteHandler)
  .openapi(postGuildsGuildIdStickersRoute, postGuildsGuildIdStickersRouteHandler)
  .openapi(getGuildsGuildIdStickersStickerIdRoute, getGuildsGuildIdStickersStickerIdRouteHandler)
  .openapi(
    deleteGuildsGuildIdStickersStickerIdRoute,
    deleteGuildsGuildIdStickersStickerIdRouteHandler,
  )
  .openapi(
    patchGuildsGuildIdStickersStickerIdRoute,
    patchGuildsGuildIdStickersStickerIdRouteHandler,
  )
  .openapi(getGuildsGuildIdTemplatesRoute, getGuildsGuildIdTemplatesRouteHandler)
  .openapi(postGuildsGuildIdTemplatesRoute, postGuildsGuildIdTemplatesRouteHandler)
  .openapi(putGuildsGuildIdTemplatesCodeRoute, putGuildsGuildIdTemplatesCodeRouteHandler)
  .openapi(deleteGuildsGuildIdTemplatesCodeRoute, deleteGuildsGuildIdTemplatesCodeRouteHandler)
  .openapi(patchGuildsGuildIdTemplatesCodeRoute, patchGuildsGuildIdTemplatesCodeRouteHandler)
  .openapi(getGuildsGuildIdThreadsActiveRoute, getGuildsGuildIdThreadsActiveRouteHandler)
  .openapi(getGuildsGuildIdVanityUrlRoute, getGuildsGuildIdVanityUrlRouteHandler)
  .openapi(getGuildsGuildIdVoiceStatesMeRoute, getGuildsGuildIdVoiceStatesMeRouteHandler)
  .openapi(patchGuildsGuildIdVoiceStatesMeRoute, patchGuildsGuildIdVoiceStatesMeRouteHandler)
  .openapi(getGuildsGuildIdVoiceStatesUserIdRoute, getGuildsGuildIdVoiceStatesUserIdRouteHandler)
  .openapi(
    patchGuildsGuildIdVoiceStatesUserIdRoute,
    patchGuildsGuildIdVoiceStatesUserIdRouteHandler,
  )
  .openapi(getGuildsGuildIdWebhooksRoute, getGuildsGuildIdWebhooksRouteHandler)
  .openapi(getGuildsGuildIdWelcomeScreenRoute, getGuildsGuildIdWelcomeScreenRouteHandler)
  .openapi(patchGuildsGuildIdWelcomeScreenRoute, patchGuildsGuildIdWelcomeScreenRouteHandler)
  .openapi(getGuildsGuildIdWidgetRoute, getGuildsGuildIdWidgetRouteHandler)
  .openapi(patchGuildsGuildIdWidgetRoute, patchGuildsGuildIdWidgetRouteHandler)
  .openapi(getGuildsGuildIdWidgetJsonRoute, getGuildsGuildIdWidgetJsonRouteHandler)
  .openapi(getGuildsGuildIdWidgetPngRoute, getGuildsGuildIdWidgetPngRouteHandler)
  .openapi(
    postInteractionsInteractionIdInteractionTokenCallbackRoute,
    postInteractionsInteractionIdInteractionTokenCallbackRouteHandler,
  )
  .openapi(getInvitesCodeRoute, getInvitesCodeRouteHandler)
  .openapi(deleteInvitesCodeRoute, deleteInvitesCodeRouteHandler)
  .openapi(getInvitesCodeTargetUsersRoute, getInvitesCodeTargetUsersRouteHandler)
  .openapi(putInvitesCodeTargetUsersRoute, putInvitesCodeTargetUsersRouteHandler)
  .openapi(postInvitesCodeTargetUsersBulkAddRoute, postInvitesCodeTargetUsersBulkAddRouteHandler)
  .openapi(
    postInvitesCodeTargetUsersBulkDeleteRoute,
    postInvitesCodeTargetUsersBulkDeleteRouteHandler,
  )
  .openapi(getInvitesCodeTargetUsersJobStatusRoute, getInvitesCodeTargetUsersJobStatusRouteHandler)
  .openapi(putInvitesCodeTargetUsersUserIdRoute, putInvitesCodeTargetUsersUserIdRouteHandler)
  .openapi(deleteInvitesCodeTargetUsersUserIdRoute, deleteInvitesCodeTargetUsersUserIdRouteHandler)
  .openapi(putLobbiesRoute, putLobbiesRouteHandler)
  .openapi(postLobbiesRoute, postLobbiesRouteHandler)
  .openapi(getLobbiesLobbyIdRoute, getLobbiesLobbyIdRouteHandler)
  .openapi(deleteLobbiesLobbyIdRoute, deleteLobbiesLobbyIdRouteHandler)
  .openapi(patchLobbiesLobbyIdRoute, patchLobbiesLobbyIdRouteHandler)
  .openapi(patchLobbiesLobbyIdChannelLinkingRoute, patchLobbiesLobbyIdChannelLinkingRouteHandler)
  .openapi(deleteLobbiesLobbyIdMembersMeRoute, deleteLobbiesLobbyIdMembersMeRouteHandler)
  .openapi(postLobbiesLobbyIdMembersMeInvitesRoute, postLobbiesLobbyIdMembersMeInvitesRouteHandler)
  .openapi(postLobbiesLobbyIdMembersBulkRoute, postLobbiesLobbyIdMembersBulkRouteHandler)
  .openapi(putLobbiesLobbyIdMembersUserIdRoute, putLobbiesLobbyIdMembersUserIdRouteHandler)
  .openapi(deleteLobbiesLobbyIdMembersUserIdRoute, deleteLobbiesLobbyIdMembersUserIdRouteHandler)
  .openapi(
    postLobbiesLobbyIdMembersUserIdInvitesRoute,
    postLobbiesLobbyIdMembersUserIdInvitesRouteHandler,
  )
  .openapi(getLobbiesLobbyIdMessagesRoute, getLobbiesLobbyIdMessagesRouteHandler)
  .openapi(postLobbiesLobbyIdMessagesRoute, postLobbiesLobbyIdMessagesRouteHandler)
  .openapi(
    putLobbiesLobbyIdMessagesMessageIdModerationMetadataRoute,
    putLobbiesLobbyIdMessagesMessageIdModerationMetadataRouteHandler,
  )
  .openapi(getOauth2MeRoute, getOauth2MeRouteHandler)
  .openapi(getOauth2ApplicationsMeRoute, getOauth2ApplicationsMeRouteHandler)
  .openapi(getOauth2KeysRoute, getOauth2KeysRouteHandler)
  .openapi(getOauth2UserinfoRoute, getOauth2UserinfoRouteHandler)
  .openapi(
    putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataRoute,
    putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataRouteHandler,
  )
  .openapi(
    postPartnerSdkProvisionalAccountsUnmergeRoute,
    postPartnerSdkProvisionalAccountsUnmergeRouteHandler,
  )
  .openapi(
    postPartnerSdkProvisionalAccountsUnmergeBotRoute,
    postPartnerSdkProvisionalAccountsUnmergeBotRouteHandler,
  )
  .openapi(postPartnerSdkTokenRoute, postPartnerSdkTokenRouteHandler)
  .openapi(postPartnerSdkTokenBotRoute, postPartnerSdkTokenBotRouteHandler)
  .openapi(getSkusSkuIdSubscriptionsRoute, getSkusSkuIdSubscriptionsRouteHandler)
  .openapi(
    getSkusSkuIdSubscriptionsSubscriptionIdRoute,
    getSkusSkuIdSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(getSoundboardDefaultSoundsRoute, getSoundboardDefaultSoundsRouteHandler)
  .openapi(postStageInstancesRoute, postStageInstancesRouteHandler)
  .openapi(getStageInstancesChannelIdRoute, getStageInstancesChannelIdRouteHandler)
  .openapi(deleteStageInstancesChannelIdRoute, deleteStageInstancesChannelIdRouteHandler)
  .openapi(patchStageInstancesChannelIdRoute, patchStageInstancesChannelIdRouteHandler)
  .openapi(getStickerPacksRoute, getStickerPacksRouteHandler)
  .openapi(getStickerPacksPackIdRoute, getStickerPacksPackIdRouteHandler)
  .openapi(getStickersStickerIdRoute, getStickersStickerIdRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(patchUsersMeRoute, patchUsersMeRouteHandler)
  .openapi(
    getUsersMeApplicationsApplicationIdEntitlementsRoute,
    getUsersMeApplicationsApplicationIdEntitlementsRouteHandler,
  )
  .openapi(
    getUsersMeApplicationsApplicationIdRoleConnectionRoute,
    getUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
  )
  .openapi(
    putUsersMeApplicationsApplicationIdRoleConnectionRoute,
    putUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
  )
  .openapi(
    deleteUsersMeApplicationsApplicationIdRoleConnectionRoute,
    deleteUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
  )
  .openapi(postUsersMeChannelsRoute, postUsersMeChannelsRouteHandler)
  .openapi(getUsersMeConnectionsRoute, getUsersMeConnectionsRouteHandler)
  .openapi(getUsersMeGuildsRoute, getUsersMeGuildsRouteHandler)
  .openapi(deleteUsersMeGuildsGuildIdRoute, deleteUsersMeGuildsGuildIdRouteHandler)
  .openapi(getUsersMeGuildsGuildIdMemberRoute, getUsersMeGuildsGuildIdMemberRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(getVoiceRegionsRoute, getVoiceRegionsRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(patchWebhooksWebhookIdRoute, patchWebhooksWebhookIdRouteHandler)
  .openapi(getWebhooksWebhookIdWebhookTokenRoute, getWebhooksWebhookIdWebhookTokenRouteHandler)
  .openapi(postWebhooksWebhookIdWebhookTokenRoute, postWebhooksWebhookIdWebhookTokenRouteHandler)
  .openapi(
    deleteWebhooksWebhookIdWebhookTokenRoute,
    deleteWebhooksWebhookIdWebhookTokenRouteHandler,
  )
  .openapi(patchWebhooksWebhookIdWebhookTokenRoute, patchWebhooksWebhookIdWebhookTokenRouteHandler)
  .openapi(
    postWebhooksWebhookIdWebhookTokenGithubRoute,
    postWebhooksWebhookIdWebhookTokenGithubRouteHandler,
  )
  .openapi(
    getWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
    getWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  )
  .openapi(
    deleteWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
    deleteWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  )
  .openapi(
    patchWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
    patchWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  )
  .openapi(
    getWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
    getWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  )
  .openapi(
    deleteWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
    deleteWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  )
  .openapi(
    patchWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
    patchWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  )
  .openapi(
    postWebhooksWebhookIdWebhookTokenSlackRoute,
    postWebhooksWebhookIdWebhookTokenSlackRouteHandler,
  )

export default app
