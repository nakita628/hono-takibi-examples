import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApplicationsMeRoute,
  patchApplicationsMeRoute,
  getApplicationsApplicationIdRoute,
  patchApplicationsApplicationIdRoute,
  getApplicationsApplicationIdActivityInstancesInstanceIdRoute,
  postApplicationsApplicationIdAttachmentRoute,
  getApplicationsApplicationIdCommandsRoute,
  putApplicationsApplicationIdCommandsRoute,
  postApplicationsApplicationIdCommandsRoute,
  getApplicationsApplicationIdCommandsCommandIdRoute,
  deleteApplicationsApplicationIdCommandsCommandIdRoute,
  patchApplicationsApplicationIdCommandsCommandIdRoute,
  getApplicationsApplicationIdEmojisRoute,
  postApplicationsApplicationIdEmojisRoute,
  getApplicationsApplicationIdEmojisEmojiIdRoute,
  deleteApplicationsApplicationIdEmojisEmojiIdRoute,
  patchApplicationsApplicationIdEmojisEmojiIdRoute,
  getApplicationsApplicationIdEntitlementsRoute,
  postApplicationsApplicationIdEntitlementsRoute,
  getApplicationsApplicationIdEntitlementsEntitlementIdRoute,
  deleteApplicationsApplicationIdEntitlementsEntitlementIdRoute,
  postApplicationsApplicationIdEntitlementsEntitlementIdConsumeRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  putApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  postApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  patchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute,
  putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute,
  getApplicationsApplicationIdRoleConnectionsMetadataRoute,
  putApplicationsApplicationIdRoleConnectionsMetadataRoute,
  getChannelsChannelIdRoute,
  deleteChannelsChannelIdRoute,
  patchChannelsChannelIdRoute,
  postChannelsChannelIdFollowersRoute,
  getChannelsChannelIdInvitesRoute,
  postChannelsChannelIdInvitesRoute,
  getChannelsChannelIdMessagesRoute,
  postChannelsChannelIdMessagesRoute,
  postChannelsChannelIdMessagesBulkDeleteRoute,
  getChannelsChannelIdMessagesPinsRoute,
  putChannelsChannelIdMessagesPinsMessageIdRoute,
  deleteChannelsChannelIdMessagesPinsMessageIdRoute,
  getChannelsChannelIdMessagesMessageIdRoute,
  deleteChannelsChannelIdMessagesMessageIdRoute,
  patchChannelsChannelIdMessagesMessageIdRoute,
  postChannelsChannelIdMessagesMessageIdCrosspostRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsRoute,
  getChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameRoute,
  putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRoute,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdRoute,
  postChannelsChannelIdMessagesMessageIdThreadsRoute,
  getChannelsChannelIdPermissionsMemberUserIdRoute,
  getChannelsChannelIdPermissionsRoleRoleIdRoute,
  putChannelsChannelIdPermissionsOverwriteIdRoute,
  deleteChannelsChannelIdPermissionsOverwriteIdRoute,
  getChannelsChannelIdPinsRoute,
  putChannelsChannelIdPinsMessageIdRoute,
  deleteChannelsChannelIdPinsMessageIdRoute,
  getChannelsChannelIdPollsMessageIdAnswersAnswerIdRoute,
  postChannelsChannelIdPollsMessageIdExpireRoute,
  putChannelsChannelIdRecipientsUserIdRoute,
  deleteChannelsChannelIdRecipientsUserIdRoute,
  postChannelsChannelIdSendSoundboardSoundRoute,
  getChannelsChannelIdThreadMembersRoute,
  putChannelsChannelIdThreadMembersMeRoute,
  deleteChannelsChannelIdThreadMembersMeRoute,
  getChannelsChannelIdThreadMembersUserIdRoute,
  putChannelsChannelIdThreadMembersUserIdRoute,
  deleteChannelsChannelIdThreadMembersUserIdRoute,
  postChannelsChannelIdThreadsRoute,
  getChannelsChannelIdThreadsArchivedPrivateRoute,
  getChannelsChannelIdThreadsArchivedPublicRoute,
  getChannelsChannelIdThreadsSearchRoute,
  postChannelsChannelIdTypingRoute,
  getChannelsChannelIdUsersMeThreadsArchivedPrivateRoute,
  putChannelsChannelIdVoiceStatusRoute,
  getChannelsChannelIdWebhooksRoute,
  postChannelsChannelIdWebhooksRoute,
  getGatewayRoute,
  getGatewayBotRoute,
  getGuildsTemplatesCodeRoute,
  getGuildsGuildIdRoute,
  patchGuildsGuildIdRoute,
  getGuildsGuildIdAuditLogsRoute,
  getGuildsGuildIdAutoModerationRulesRoute,
  postGuildsGuildIdAutoModerationRulesRoute,
  getGuildsGuildIdAutoModerationRulesRuleIdRoute,
  deleteGuildsGuildIdAutoModerationRulesRuleIdRoute,
  patchGuildsGuildIdAutoModerationRulesRuleIdRoute,
  getGuildsGuildIdBansRoute,
  getGuildsGuildIdBansUserIdRoute,
  putGuildsGuildIdBansUserIdRoute,
  deleteGuildsGuildIdBansUserIdRoute,
  postGuildsGuildIdBulkBanRoute,
  getGuildsGuildIdChannelsRoute,
  postGuildsGuildIdChannelsRoute,
  patchGuildsGuildIdChannelsRoute,
  getGuildsGuildIdEmojisRoute,
  postGuildsGuildIdEmojisRoute,
  getGuildsGuildIdEmojisEmojiIdRoute,
  deleteGuildsGuildIdEmojisEmojiIdRoute,
  patchGuildsGuildIdEmojisEmojiIdRoute,
  putGuildsGuildIdIncidentActionsRoute,
  getGuildsGuildIdIntegrationsRoute,
  deleteGuildsGuildIdIntegrationsIntegrationIdRoute,
  getGuildsGuildIdInvitesRoute,
  getGuildsGuildIdMembersRoute,
  patchGuildsGuildIdMembersMeRoute,
  getGuildsGuildIdMembersSearchRoute,
  getGuildsGuildIdMembersUserIdRoute,
  putGuildsGuildIdMembersUserIdRoute,
  deleteGuildsGuildIdMembersUserIdRoute,
  patchGuildsGuildIdMembersUserIdRoute,
  putGuildsGuildIdMembersUserIdRolesRoleIdRoute,
  deleteGuildsGuildIdMembersUserIdRolesRoleIdRoute,
  getGuildsGuildIdMessagesSearchRoute,
  getGuildsGuildIdNewMemberWelcomeRoute,
  getGuildsGuildIdOnboardingRoute,
  putGuildsGuildIdOnboardingRoute,
  getGuildsGuildIdPermissionsMemberUserIdRoute,
  getGuildsGuildIdPermissionsRoleRoleIdRoute,
  getGuildsGuildIdPreviewRoute,
  getGuildsGuildIdPruneRoute,
  postGuildsGuildIdPruneRoute,
  getGuildsGuildIdRegionsRoute,
  getGuildsGuildIdRequestsRoute,
  patchGuildsGuildIdRequestsRequestIdRoute,
  getGuildsGuildIdRolesRoute,
  postGuildsGuildIdRolesRoute,
  patchGuildsGuildIdRolesRoute,
  getGuildsGuildIdRolesMemberCountsRoute,
  getGuildsGuildIdRolesRoleIdRoute,
  deleteGuildsGuildIdRolesRoleIdRoute,
  patchGuildsGuildIdRolesRoleIdRoute,
  getGuildsGuildIdScheduledEventsRoute,
  postGuildsGuildIdScheduledEventsRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdRoute,
  postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsRoute,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsRoute,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersRoute,
  getGuildsGuildIdSoundboardSoundsRoute,
  postGuildsGuildIdSoundboardSoundsRoute,
  getGuildsGuildIdSoundboardSoundsSoundIdRoute,
  deleteGuildsGuildIdSoundboardSoundsSoundIdRoute,
  patchGuildsGuildIdSoundboardSoundsSoundIdRoute,
  getGuildsGuildIdStickersRoute,
  postGuildsGuildIdStickersRoute,
  getGuildsGuildIdStickersStickerIdRoute,
  deleteGuildsGuildIdStickersStickerIdRoute,
  patchGuildsGuildIdStickersStickerIdRoute,
  getGuildsGuildIdTemplatesRoute,
  postGuildsGuildIdTemplatesRoute,
  putGuildsGuildIdTemplatesCodeRoute,
  deleteGuildsGuildIdTemplatesCodeRoute,
  patchGuildsGuildIdTemplatesCodeRoute,
  getGuildsGuildIdThreadsActiveRoute,
  getGuildsGuildIdVanityUrlRoute,
  getGuildsGuildIdVoiceStatesMeRoute,
  patchGuildsGuildIdVoiceStatesMeRoute,
  getGuildsGuildIdVoiceStatesUserIdRoute,
  patchGuildsGuildIdVoiceStatesUserIdRoute,
  getGuildsGuildIdWebhooksRoute,
  getGuildsGuildIdWelcomeScreenRoute,
  patchGuildsGuildIdWelcomeScreenRoute,
  getGuildsGuildIdWidgetRoute,
  patchGuildsGuildIdWidgetRoute,
  getGuildsGuildIdWidgetJsonRoute,
  getGuildsGuildIdWidgetPngRoute,
  postInteractionsInteractionIdInteractionTokenCallbackRoute,
  getInvitesCodeRoute,
  deleteInvitesCodeRoute,
  getInvitesCodeTargetUsersRoute,
  putInvitesCodeTargetUsersRoute,
  postInvitesCodeTargetUsersBulkAddRoute,
  postInvitesCodeTargetUsersBulkDeleteRoute,
  getInvitesCodeTargetUsersJobStatusRoute,
  putInvitesCodeTargetUsersUserIdRoute,
  deleteInvitesCodeTargetUsersUserIdRoute,
  putLobbiesRoute,
  postLobbiesRoute,
  getLobbiesLobbyIdRoute,
  deleteLobbiesLobbyIdRoute,
  patchLobbiesLobbyIdRoute,
  patchLobbiesLobbyIdChannelLinkingRoute,
  deleteLobbiesLobbyIdMembersMeRoute,
  postLobbiesLobbyIdMembersMeInvitesRoute,
  postLobbiesLobbyIdMembersBulkRoute,
  putLobbiesLobbyIdMembersUserIdRoute,
  deleteLobbiesLobbyIdMembersUserIdRoute,
  postLobbiesLobbyIdMembersUserIdInvitesRoute,
  getLobbiesLobbyIdMessagesRoute,
  postLobbiesLobbyIdMessagesRoute,
  putLobbiesLobbyIdMessagesMessageIdModerationMetadataRoute,
  getOauth2MeRoute,
  getOauth2ApplicationsMeRoute,
  getOauth2KeysRoute,
  getOauth2UserinfoRoute,
  putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataRoute,
  postPartnerSdkProvisionalAccountsUnmergeRoute,
  postPartnerSdkProvisionalAccountsUnmergeBotRoute,
  postPartnerSdkTokenRoute,
  postPartnerSdkTokenBotRoute,
  getSkusSkuIdSubscriptionsRoute,
  getSkusSkuIdSubscriptionsSubscriptionIdRoute,
  getSoundboardDefaultSoundsRoute,
  postStageInstancesRoute,
  getStageInstancesChannelIdRoute,
  deleteStageInstancesChannelIdRoute,
  patchStageInstancesChannelIdRoute,
  getStickerPacksRoute,
  getStickerPacksPackIdRoute,
  getStickersStickerIdRoute,
  getUsersMeRoute,
  patchUsersMeRoute,
  getUsersMeApplicationsApplicationIdEntitlementsRoute,
  getUsersMeApplicationsApplicationIdRoleConnectionRoute,
  putUsersMeApplicationsApplicationIdRoleConnectionRoute,
  deleteUsersMeApplicationsApplicationIdRoleConnectionRoute,
  postUsersMeChannelsRoute,
  getUsersMeConnectionsRoute,
  getUsersMeGuildsRoute,
  deleteUsersMeGuildsGuildIdRoute,
  getUsersMeGuildsGuildIdMemberRoute,
  getUsersUserIdRoute,
  getVoiceRegionsRoute,
  getWebhooksWebhookIdRoute,
  deleteWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdRoute,
  getWebhooksWebhookIdWebhookTokenRoute,
  postWebhooksWebhookIdWebhookTokenRoute,
  deleteWebhooksWebhookIdWebhookTokenRoute,
  patchWebhooksWebhookIdWebhookTokenRoute,
  postWebhooksWebhookIdWebhookTokenGithubRoute,
  getWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  deleteWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  patchWebhooksWebhookIdWebhookTokenMessagesOriginalRoute,
  getWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  deleteWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  patchWebhooksWebhookIdWebhookTokenMessagesMessageIdRoute,
  postWebhooksWebhookIdWebhookTokenSlackRoute,
} from './routes'
import {
  getApplicationsMeRouteHandler,
  patchApplicationsMeRouteHandler,
  getApplicationsApplicationIdRouteHandler,
  patchApplicationsApplicationIdRouteHandler,
  getApplicationsApplicationIdActivityInstancesInstanceIdRouteHandler,
  postApplicationsApplicationIdAttachmentRouteHandler,
  getApplicationsApplicationIdCommandsRouteHandler,
  putApplicationsApplicationIdCommandsRouteHandler,
  postApplicationsApplicationIdCommandsRouteHandler,
  getApplicationsApplicationIdCommandsCommandIdRouteHandler,
  deleteApplicationsApplicationIdCommandsCommandIdRouteHandler,
  patchApplicationsApplicationIdCommandsCommandIdRouteHandler,
  getApplicationsApplicationIdEmojisRouteHandler,
  postApplicationsApplicationIdEmojisRouteHandler,
  getApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  deleteApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  patchApplicationsApplicationIdEmojisEmojiIdRouteHandler,
  getApplicationsApplicationIdEntitlementsRouteHandler,
  postApplicationsApplicationIdEntitlementsRouteHandler,
  getApplicationsApplicationIdEntitlementsEntitlementIdRouteHandler,
  deleteApplicationsApplicationIdEntitlementsEntitlementIdRouteHandler,
  postApplicationsApplicationIdEntitlementsEntitlementIdConsumeRouteHandler,
  getApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  putApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  postApplicationsApplicationIdGuildsGuildIdCommandsRouteHandler,
  getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsRouteHandler,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  patchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRouteHandler,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRouteHandler,
  putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRouteHandler,
  getApplicationsApplicationIdRoleConnectionsMetadataRouteHandler,
  putApplicationsApplicationIdRoleConnectionsMetadataRouteHandler,
  getChannelsChannelIdRouteHandler,
  deleteChannelsChannelIdRouteHandler,
  patchChannelsChannelIdRouteHandler,
  postChannelsChannelIdFollowersRouteHandler,
  getChannelsChannelIdInvitesRouteHandler,
  postChannelsChannelIdInvitesRouteHandler,
  getChannelsChannelIdMessagesRouteHandler,
  postChannelsChannelIdMessagesRouteHandler,
  postChannelsChannelIdMessagesBulkDeleteRouteHandler,
  getChannelsChannelIdMessagesPinsRouteHandler,
  putChannelsChannelIdMessagesPinsMessageIdRouteHandler,
  deleteChannelsChannelIdMessagesPinsMessageIdRouteHandler,
  getChannelsChannelIdMessagesMessageIdRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdRouteHandler,
  patchChannelsChannelIdMessagesMessageIdRouteHandler,
  postChannelsChannelIdMessagesMessageIdCrosspostRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdReactionsRouteHandler,
  getChannelsChannelIdMessagesMessageIdReactionsEmojiNameRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameRouteHandler,
  putChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameMeRouteHandler,
  deleteChannelsChannelIdMessagesMessageIdReactionsEmojiNameUserIdRouteHandler,
  postChannelsChannelIdMessagesMessageIdThreadsRouteHandler,
  getChannelsChannelIdPermissionsMemberUserIdRouteHandler,
  getChannelsChannelIdPermissionsRoleRoleIdRouteHandler,
  putChannelsChannelIdPermissionsOverwriteIdRouteHandler,
  deleteChannelsChannelIdPermissionsOverwriteIdRouteHandler,
  getChannelsChannelIdPinsRouteHandler,
  putChannelsChannelIdPinsMessageIdRouteHandler,
  deleteChannelsChannelIdPinsMessageIdRouteHandler,
  getChannelsChannelIdPollsMessageIdAnswersAnswerIdRouteHandler,
  postChannelsChannelIdPollsMessageIdExpireRouteHandler,
  putChannelsChannelIdRecipientsUserIdRouteHandler,
  deleteChannelsChannelIdRecipientsUserIdRouteHandler,
  postChannelsChannelIdSendSoundboardSoundRouteHandler,
  getChannelsChannelIdThreadMembersRouteHandler,
  putChannelsChannelIdThreadMembersMeRouteHandler,
  deleteChannelsChannelIdThreadMembersMeRouteHandler,
  getChannelsChannelIdThreadMembersUserIdRouteHandler,
  putChannelsChannelIdThreadMembersUserIdRouteHandler,
  deleteChannelsChannelIdThreadMembersUserIdRouteHandler,
  postChannelsChannelIdThreadsRouteHandler,
  getChannelsChannelIdThreadsArchivedPrivateRouteHandler,
  getChannelsChannelIdThreadsArchivedPublicRouteHandler,
  getChannelsChannelIdThreadsSearchRouteHandler,
  postChannelsChannelIdTypingRouteHandler,
  getChannelsChannelIdUsersMeThreadsArchivedPrivateRouteHandler,
  putChannelsChannelIdVoiceStatusRouteHandler,
  getChannelsChannelIdWebhooksRouteHandler,
  postChannelsChannelIdWebhooksRouteHandler,
  getGatewayRouteHandler,
  getGatewayBotRouteHandler,
  getGuildsTemplatesCodeRouteHandler,
  getGuildsGuildIdRouteHandler,
  patchGuildsGuildIdRouteHandler,
  getGuildsGuildIdAuditLogsRouteHandler,
  getGuildsGuildIdAutoModerationRulesRouteHandler,
  postGuildsGuildIdAutoModerationRulesRouteHandler,
  getGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  deleteGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  patchGuildsGuildIdAutoModerationRulesRuleIdRouteHandler,
  getGuildsGuildIdBansRouteHandler,
  getGuildsGuildIdBansUserIdRouteHandler,
  putGuildsGuildIdBansUserIdRouteHandler,
  deleteGuildsGuildIdBansUserIdRouteHandler,
  postGuildsGuildIdBulkBanRouteHandler,
  getGuildsGuildIdChannelsRouteHandler,
  postGuildsGuildIdChannelsRouteHandler,
  patchGuildsGuildIdChannelsRouteHandler,
  getGuildsGuildIdEmojisRouteHandler,
  postGuildsGuildIdEmojisRouteHandler,
  getGuildsGuildIdEmojisEmojiIdRouteHandler,
  deleteGuildsGuildIdEmojisEmojiIdRouteHandler,
  patchGuildsGuildIdEmojisEmojiIdRouteHandler,
  putGuildsGuildIdIncidentActionsRouteHandler,
  getGuildsGuildIdIntegrationsRouteHandler,
  deleteGuildsGuildIdIntegrationsIntegrationIdRouteHandler,
  getGuildsGuildIdInvitesRouteHandler,
  getGuildsGuildIdMembersRouteHandler,
  patchGuildsGuildIdMembersMeRouteHandler,
  getGuildsGuildIdMembersSearchRouteHandler,
  getGuildsGuildIdMembersUserIdRouteHandler,
  putGuildsGuildIdMembersUserIdRouteHandler,
  deleteGuildsGuildIdMembersUserIdRouteHandler,
  patchGuildsGuildIdMembersUserIdRouteHandler,
  putGuildsGuildIdMembersUserIdRolesRoleIdRouteHandler,
  deleteGuildsGuildIdMembersUserIdRolesRoleIdRouteHandler,
  getGuildsGuildIdMessagesSearchRouteHandler,
  getGuildsGuildIdNewMemberWelcomeRouteHandler,
  getGuildsGuildIdOnboardingRouteHandler,
  putGuildsGuildIdOnboardingRouteHandler,
  getGuildsGuildIdPermissionsMemberUserIdRouteHandler,
  getGuildsGuildIdPermissionsRoleRoleIdRouteHandler,
  getGuildsGuildIdPreviewRouteHandler,
  getGuildsGuildIdPruneRouteHandler,
  postGuildsGuildIdPruneRouteHandler,
  getGuildsGuildIdRegionsRouteHandler,
  getGuildsGuildIdRequestsRouteHandler,
  patchGuildsGuildIdRequestsRequestIdRouteHandler,
  getGuildsGuildIdRolesRouteHandler,
  postGuildsGuildIdRolesRouteHandler,
  patchGuildsGuildIdRolesRouteHandler,
  getGuildsGuildIdRolesMemberCountsRouteHandler,
  getGuildsGuildIdRolesRoleIdRouteHandler,
  deleteGuildsGuildIdRolesRoleIdRouteHandler,
  patchGuildsGuildIdRolesRoleIdRouteHandler,
  getGuildsGuildIdScheduledEventsRouteHandler,
  postGuildsGuildIdScheduledEventsRouteHandler,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdRouteHandler,
  postGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsRouteHandler,
  deleteGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRouteHandler,
  patchGuildsGuildIdScheduledEventsGuildScheduledEventIdExceptionsExceptionIdRouteHandler,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersRouteHandler,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdUsersCountsRouteHandler,
  getGuildsGuildIdScheduledEventsGuildScheduledEventIdGuildScheduledEventExceptionIdUsersRouteHandler,
  getGuildsGuildIdSoundboardSoundsRouteHandler,
  postGuildsGuildIdSoundboardSoundsRouteHandler,
  getGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  deleteGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  patchGuildsGuildIdSoundboardSoundsSoundIdRouteHandler,
  getGuildsGuildIdStickersRouteHandler,
  postGuildsGuildIdStickersRouteHandler,
  getGuildsGuildIdStickersStickerIdRouteHandler,
  deleteGuildsGuildIdStickersStickerIdRouteHandler,
  patchGuildsGuildIdStickersStickerIdRouteHandler,
  getGuildsGuildIdTemplatesRouteHandler,
  postGuildsGuildIdTemplatesRouteHandler,
  putGuildsGuildIdTemplatesCodeRouteHandler,
  deleteGuildsGuildIdTemplatesCodeRouteHandler,
  patchGuildsGuildIdTemplatesCodeRouteHandler,
  getGuildsGuildIdThreadsActiveRouteHandler,
  getGuildsGuildIdVanityUrlRouteHandler,
  getGuildsGuildIdVoiceStatesMeRouteHandler,
  patchGuildsGuildIdVoiceStatesMeRouteHandler,
  getGuildsGuildIdVoiceStatesUserIdRouteHandler,
  patchGuildsGuildIdVoiceStatesUserIdRouteHandler,
  getGuildsGuildIdWebhooksRouteHandler,
  getGuildsGuildIdWelcomeScreenRouteHandler,
  patchGuildsGuildIdWelcomeScreenRouteHandler,
  getGuildsGuildIdWidgetRouteHandler,
  patchGuildsGuildIdWidgetRouteHandler,
  getGuildsGuildIdWidgetJsonRouteHandler,
  getGuildsGuildIdWidgetPngRouteHandler,
  postInteractionsInteractionIdInteractionTokenCallbackRouteHandler,
  getInvitesCodeRouteHandler,
  deleteInvitesCodeRouteHandler,
  getInvitesCodeTargetUsersRouteHandler,
  putInvitesCodeTargetUsersRouteHandler,
  postInvitesCodeTargetUsersBulkAddRouteHandler,
  postInvitesCodeTargetUsersBulkDeleteRouteHandler,
  getInvitesCodeTargetUsersJobStatusRouteHandler,
  putInvitesCodeTargetUsersUserIdRouteHandler,
  deleteInvitesCodeTargetUsersUserIdRouteHandler,
  putLobbiesRouteHandler,
  postLobbiesRouteHandler,
  getLobbiesLobbyIdRouteHandler,
  deleteLobbiesLobbyIdRouteHandler,
  patchLobbiesLobbyIdRouteHandler,
  patchLobbiesLobbyIdChannelLinkingRouteHandler,
  deleteLobbiesLobbyIdMembersMeRouteHandler,
  postLobbiesLobbyIdMembersMeInvitesRouteHandler,
  postLobbiesLobbyIdMembersBulkRouteHandler,
  putLobbiesLobbyIdMembersUserIdRouteHandler,
  deleteLobbiesLobbyIdMembersUserIdRouteHandler,
  postLobbiesLobbyIdMembersUserIdInvitesRouteHandler,
  getLobbiesLobbyIdMessagesRouteHandler,
  postLobbiesLobbyIdMessagesRouteHandler,
  putLobbiesLobbyIdMessagesMessageIdModerationMetadataRouteHandler,
  getOauth2MeRouteHandler,
  getOauth2ApplicationsMeRouteHandler,
  getOauth2KeysRouteHandler,
  getOauth2UserinfoRouteHandler,
  putPartnerSdkDmsUserId1UserId2MessagesMessageIdModerationMetadataRouteHandler,
  postPartnerSdkProvisionalAccountsUnmergeRouteHandler,
  postPartnerSdkProvisionalAccountsUnmergeBotRouteHandler,
  postPartnerSdkTokenRouteHandler,
  postPartnerSdkTokenBotRouteHandler,
  getSkusSkuIdSubscriptionsRouteHandler,
  getSkusSkuIdSubscriptionsSubscriptionIdRouteHandler,
  getSoundboardDefaultSoundsRouteHandler,
  postStageInstancesRouteHandler,
  getStageInstancesChannelIdRouteHandler,
  deleteStageInstancesChannelIdRouteHandler,
  patchStageInstancesChannelIdRouteHandler,
  getStickerPacksRouteHandler,
  getStickerPacksPackIdRouteHandler,
  getStickersStickerIdRouteHandler,
  getUsersMeRouteHandler,
  patchUsersMeRouteHandler,
  getUsersMeApplicationsApplicationIdEntitlementsRouteHandler,
  getUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
  putUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
  deleteUsersMeApplicationsApplicationIdRoleConnectionRouteHandler,
  postUsersMeChannelsRouteHandler,
  getUsersMeConnectionsRouteHandler,
  getUsersMeGuildsRouteHandler,
  deleteUsersMeGuildsGuildIdRouteHandler,
  getUsersMeGuildsGuildIdMemberRouteHandler,
  getUsersUserIdRouteHandler,
  getVoiceRegionsRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  patchWebhooksWebhookIdRouteHandler,
  getWebhooksWebhookIdWebhookTokenRouteHandler,
  postWebhooksWebhookIdWebhookTokenRouteHandler,
  deleteWebhooksWebhookIdWebhookTokenRouteHandler,
  patchWebhooksWebhookIdWebhookTokenRouteHandler,
  postWebhooksWebhookIdWebhookTokenGithubRouteHandler,
  getWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  deleteWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  patchWebhooksWebhookIdWebhookTokenMessagesOriginalRouteHandler,
  getWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  deleteWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  patchWebhooksWebhookIdWebhookTokenMessagesMessageIdRouteHandler,
  postWebhooksWebhookIdWebhookTokenSlackRouteHandler,
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
