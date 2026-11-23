import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttachmentsAttachmentIdRoute,
  deleteBotStorageRoute,
  deleteDefaultStreamsRoute,
  deleteDraftsDraftIdRoute,
  deleteEventsRoute,
  deleteExportRealmExportIdRoute,
  deleteInvitesInviteIdRoute,
  deleteInvitesMultiuseInviteIdRoute,
  deleteMessagesMessageIdReactionsRoute,
  deleteMessagesMessageIdRoute,
  deleteNavigationViewsFragmentRoute,
  deleteRealmDomainsDomainRoute,
  deleteRealmEmojiEmojiNameRoute,
  deleteRealmFiltersFilterIdRoute,
  deleteRealmPlaygroundsPlaygroundIdRoute,
  deleteRealmProfileFieldsFieldIdRoute,
  deleteRemindersReminderIdRoute,
  deleteSavedSnippetsSavedSnippetIdRoute,
  deleteScheduledMessagesScheduledMessageIdRoute,
  deleteStreamsStreamIdRoute,
  deleteUsersMeAlertWordsRoute,
  deleteUsersMeAndroidGcmRegIdRoute,
  deleteUsersMeApnsDeviceTokenRoute,
  deleteUsersMeAvatarRoute,
  deleteUsersMeMutedUsersMutedUserIdRoute,
  deleteUsersMeProfileDataRoute,
  deleteUsersMeRoute,
  deleteUsersMeSubscriptionsRoute,
  deleteUsersUserIdRoute,
  getAttachmentsRoute,
  getBotsBotIdApiKeyRoute,
  getBotStorageRoute,
  getCallsBigbluebuttonCreateRoute,
  getChannelFoldersRoute,
  getDevListUsersRoute,
  getDraftsRoute,
  getEventsRoute,
  getExportRealmConsentsRoute,
  getExportRealmRoute,
  getGetStreamIdRoute,
  getInvitesRoute,
  getMessagesMatchesNarrowRoute,
  getMessagesMessageIdHistoryRoute,
  getMessagesMessageIdReadReceiptsRoute,
  getMessagesMessageIdRoute,
  getMessagesRoute,
  getNavigationViewsRoute,
  getRealmDomainsRoute,
  getRealmEmojiRoute,
  getRealmLinkifiersRoute,
  getRealmPresenceRoute,
  getRealmProfileFieldsRoute,
  getRemindersRoute,
  getSavedSnippetsRoute,
  getScheduledMessagesRoute,
  getServerSettingsRoute,
  getStreamsRoute,
  getStreamsStreamIdEmailAddressRoute,
  getStreamsStreamIdMembersRoute,
  getStreamsStreamIdRoute,
  getThumbnailStatusRealmIdStrFilenameRoute,
  getUserGroupsRoute,
  getUserGroupsUserGroupIdMembersRoute,
  getUserGroupsUserGroupIdMembersUserIdRoute,
  getUserGroupsUserGroupIdSubgroupsRoute,
  getUsersEmailRoute,
  getUsersMeAlertWordsRoute,
  getUsersMeRoute,
  getUsersMeStreamIdTopicsRoute,
  getUsersMeSubscriptionsRoute,
  getUsersRoute,
  getUsersUserIdChannelsRoute,
  getUsersUserIdOrEmailPresenceRoute,
  getUsersUserIdRoute,
  getUsersUserIdStatusRoute,
  getUsersUserIdSubscriptionsStreamIdRoute,
  getUserUploadsRealmIdStrFilenameRoute,
  patchChannelFoldersChannelFolderIdRoute,
  patchChannelFoldersRoute,
  patchDraftsDraftIdRoute,
  patchMessagesMessageIdRoute,
  patchNavigationViewsFragmentRoute,
  patchRealmDomainsDomainRoute,
  patchRealmFiltersFilterIdRoute,
  patchRealmLinkifiersRoute,
  patchRealmProfileFieldsFieldIdRoute,
  patchRealmProfileFieldsRoute,
  patchRealmUserSettingsDefaultsRoute,
  patchSavedSnippetsSavedSnippetIdRoute,
  patchScheduledMessagesScheduledMessageIdRoute,
  patchSettingsRoute,
  patchStreamsStreamIdRoute,
  patchUserGroupsUserGroupIdRoute,
  patchUsersEmailRoute,
  patchUsersMeProfileDataRoute,
  patchUsersMeSubscriptionsMutedTopicsRoute,
  patchUsersMeSubscriptionsStreamIdRoute,
  patchUsersUserIdRoute,
  postBotsBotIdApiKeyRegenerateRoute,
  postCallsConstructorgroupsCreateRoute,
  postCallsGoogleMeetCreateRoute,
  postCallsNextcloudTalkCreateRoute,
  postCallsWebexCreateRoute,
  postChannelFoldersCreateRoute,
  postChannelsCreateRoute,
  postDefaultStreamsRoute,
  postDevFetchApiKeyRoute,
  postDraftsRoute,
  postExportRealmRoute,
  postFetchApiKeyRoute,
  postInvitesInviteIdResendRoute,
  postInvitesMultiuseRoute,
  postInvitesRoute,
  postJwtFetchApiKeyRoute,
  postMarkAllAsReadRoute,
  postMarkStreamAsReadRoute,
  postMarkTopicAsReadRoute,
  postMessagesFlagsNarrowRoute,
  postMessagesFlagsRoute,
  postMessagesMessageIdReactionsRoute,
  postMessagesMessageIdReportRoute,
  postMessagesMessageIdTypingRoute,
  postMessagesRenderRoute,
  postMessagesRoute,
  postMobilePushE2eeTestNotificationRoute,
  postMobilePushRegisterRoute,
  postMobilePushTestNotificationRoute,
  postNavigationViewsRoute,
  postRealmDeactivateRoute,
  postRealmDomainsRoute,
  postRealmEmojiEmojiNameRoute,
  postRealmFiltersRoute,
  postRealmPlaygroundsRoute,
  postRealmProfileFieldsRoute,
  postRealmTestWelcomeBotCustomMessageRoute,
  postRealTimeRoute,
  postRegisterClientDeviceRoute,
  postRegisterRoute,
  postRemindersRoute,
  postRemotesPushE2eeRegisterRoute,
  postRemoveClientDeviceRoute,
  postRestErrorHandlingRoute,
  postSavedSnippetsRoute,
  postScheduledMessagesRoute,
  postStreamsStreamIdDeleteTopicRoute,
  postTypingRoute,
  postUserGroupsCreateRoute,
  postUserGroupsUserGroupIdDeactivateRoute,
  postUserGroupsUserGroupIdMembersRoute,
  postUserGroupsUserGroupIdSubgroupsRoute,
  postUsersMeAlertWordsRoute,
  postUsersMeAndroidGcmRegIdRoute,
  postUsersMeApiKeyRegenerateRoute,
  postUsersMeApnsDeviceTokenRoute,
  postUsersMeAvatarRoute,
  postUsersMeMutedUsersMutedUserIdRoute,
  postUsersMePresenceRoute,
  postUsersMeStatusRoute,
  postUsersMeSubscriptionsPropertiesRoute,
  postUsersMeSubscriptionsRoute,
  postUsersRoute,
  postUsersUserIdReactivateRoute,
  postUsersUserIdStatusRoute,
  postUserTopicsRoute,
  postUserUploadsRoute,
  postZulipOutgoingWebhookRoute,
  putBotStorageRoute,
} from './routes'
import {
  deleteAttachmentsAttachmentIdRouteHandler,
  deleteBotStorageRouteHandler,
  deleteDefaultStreamsRouteHandler,
  deleteDraftsDraftIdRouteHandler,
  deleteEventsRouteHandler,
  deleteExportRealmExportIdRouteHandler,
  deleteInvitesInviteIdRouteHandler,
  deleteInvitesMultiuseInviteIdRouteHandler,
  deleteMessagesMessageIdReactionsRouteHandler,
  deleteMessagesMessageIdRouteHandler,
  deleteNavigationViewsFragmentRouteHandler,
  deleteRealmDomainsDomainRouteHandler,
  deleteRealmEmojiEmojiNameRouteHandler,
  deleteRealmFiltersFilterIdRouteHandler,
  deleteRealmPlaygroundsPlaygroundIdRouteHandler,
  deleteRealmProfileFieldsFieldIdRouteHandler,
  deleteRemindersReminderIdRouteHandler,
  deleteSavedSnippetsSavedSnippetIdRouteHandler,
  deleteScheduledMessagesScheduledMessageIdRouteHandler,
  deleteStreamsStreamIdRouteHandler,
  deleteUsersMeAlertWordsRouteHandler,
  deleteUsersMeAndroidGcmRegIdRouteHandler,
  deleteUsersMeApnsDeviceTokenRouteHandler,
  deleteUsersMeAvatarRouteHandler,
  deleteUsersMeMutedUsersMutedUserIdRouteHandler,
  deleteUsersMeProfileDataRouteHandler,
  deleteUsersMeRouteHandler,
  deleteUsersMeSubscriptionsRouteHandler,
  deleteUsersUserIdRouteHandler,
  getAttachmentsRouteHandler,
  getBotsBotIdApiKeyRouteHandler,
  getBotStorageRouteHandler,
  getCallsBigbluebuttonCreateRouteHandler,
  getChannelFoldersRouteHandler,
  getDevListUsersRouteHandler,
  getDraftsRouteHandler,
  getEventsRouteHandler,
  getExportRealmConsentsRouteHandler,
  getExportRealmRouteHandler,
  getGetStreamIdRouteHandler,
  getInvitesRouteHandler,
  getMessagesMatchesNarrowRouteHandler,
  getMessagesMessageIdHistoryRouteHandler,
  getMessagesMessageIdReadReceiptsRouteHandler,
  getMessagesMessageIdRouteHandler,
  getMessagesRouteHandler,
  getNavigationViewsRouteHandler,
  getRealmDomainsRouteHandler,
  getRealmEmojiRouteHandler,
  getRealmLinkifiersRouteHandler,
  getRealmPresenceRouteHandler,
  getRealmProfileFieldsRouteHandler,
  getRemindersRouteHandler,
  getSavedSnippetsRouteHandler,
  getScheduledMessagesRouteHandler,
  getServerSettingsRouteHandler,
  getStreamsRouteHandler,
  getStreamsStreamIdEmailAddressRouteHandler,
  getStreamsStreamIdMembersRouteHandler,
  getStreamsStreamIdRouteHandler,
  getThumbnailStatusRealmIdStrFilenameRouteHandler,
  getUserGroupsRouteHandler,
  getUserGroupsUserGroupIdMembersRouteHandler,
  getUserGroupsUserGroupIdMembersUserIdRouteHandler,
  getUserGroupsUserGroupIdSubgroupsRouteHandler,
  getUsersEmailRouteHandler,
  getUsersMeAlertWordsRouteHandler,
  getUsersMeRouteHandler,
  getUsersMeStreamIdTopicsRouteHandler,
  getUsersMeSubscriptionsRouteHandler,
  getUsersRouteHandler,
  getUsersUserIdChannelsRouteHandler,
  getUsersUserIdOrEmailPresenceRouteHandler,
  getUsersUserIdRouteHandler,
  getUsersUserIdStatusRouteHandler,
  getUsersUserIdSubscriptionsStreamIdRouteHandler,
  getUserUploadsRealmIdStrFilenameRouteHandler,
  patchChannelFoldersChannelFolderIdRouteHandler,
  patchChannelFoldersRouteHandler,
  patchDraftsDraftIdRouteHandler,
  patchMessagesMessageIdRouteHandler,
  patchNavigationViewsFragmentRouteHandler,
  patchRealmDomainsDomainRouteHandler,
  patchRealmFiltersFilterIdRouteHandler,
  patchRealmLinkifiersRouteHandler,
  patchRealmProfileFieldsFieldIdRouteHandler,
  patchRealmProfileFieldsRouteHandler,
  patchRealmUserSettingsDefaultsRouteHandler,
  patchSavedSnippetsSavedSnippetIdRouteHandler,
  patchScheduledMessagesScheduledMessageIdRouteHandler,
  patchSettingsRouteHandler,
  patchStreamsStreamIdRouteHandler,
  patchUserGroupsUserGroupIdRouteHandler,
  patchUsersEmailRouteHandler,
  patchUsersMeProfileDataRouteHandler,
  patchUsersMeSubscriptionsMutedTopicsRouteHandler,
  patchUsersMeSubscriptionsStreamIdRouteHandler,
  patchUsersUserIdRouteHandler,
  postBotsBotIdApiKeyRegenerateRouteHandler,
  postCallsConstructorgroupsCreateRouteHandler,
  postCallsGoogleMeetCreateRouteHandler,
  postCallsNextcloudTalkCreateRouteHandler,
  postCallsWebexCreateRouteHandler,
  postChannelFoldersCreateRouteHandler,
  postChannelsCreateRouteHandler,
  postDefaultStreamsRouteHandler,
  postDevFetchApiKeyRouteHandler,
  postDraftsRouteHandler,
  postExportRealmRouteHandler,
  postFetchApiKeyRouteHandler,
  postInvitesInviteIdResendRouteHandler,
  postInvitesMultiuseRouteHandler,
  postInvitesRouteHandler,
  postJwtFetchApiKeyRouteHandler,
  postMarkAllAsReadRouteHandler,
  postMarkStreamAsReadRouteHandler,
  postMarkTopicAsReadRouteHandler,
  postMessagesFlagsNarrowRouteHandler,
  postMessagesFlagsRouteHandler,
  postMessagesMessageIdReactionsRouteHandler,
  postMessagesMessageIdReportRouteHandler,
  postMessagesMessageIdTypingRouteHandler,
  postMessagesRenderRouteHandler,
  postMessagesRouteHandler,
  postMobilePushE2eeTestNotificationRouteHandler,
  postMobilePushRegisterRouteHandler,
  postMobilePushTestNotificationRouteHandler,
  postNavigationViewsRouteHandler,
  postRealmDeactivateRouteHandler,
  postRealmDomainsRouteHandler,
  postRealmEmojiEmojiNameRouteHandler,
  postRealmFiltersRouteHandler,
  postRealmPlaygroundsRouteHandler,
  postRealmProfileFieldsRouteHandler,
  postRealmTestWelcomeBotCustomMessageRouteHandler,
  postRealTimeRouteHandler,
  postRegisterClientDeviceRouteHandler,
  postRegisterRouteHandler,
  postRemindersRouteHandler,
  postRemotesPushE2eeRegisterRouteHandler,
  postRemoveClientDeviceRouteHandler,
  postRestErrorHandlingRouteHandler,
  postSavedSnippetsRouteHandler,
  postScheduledMessagesRouteHandler,
  postStreamsStreamIdDeleteTopicRouteHandler,
  postTypingRouteHandler,
  postUserGroupsCreateRouteHandler,
  postUserGroupsUserGroupIdDeactivateRouteHandler,
  postUserGroupsUserGroupIdMembersRouteHandler,
  postUserGroupsUserGroupIdSubgroupsRouteHandler,
  postUsersMeAlertWordsRouteHandler,
  postUsersMeAndroidGcmRegIdRouteHandler,
  postUsersMeApiKeyRegenerateRouteHandler,
  postUsersMeApnsDeviceTokenRouteHandler,
  postUsersMeAvatarRouteHandler,
  postUsersMeMutedUsersMutedUserIdRouteHandler,
  postUsersMePresenceRouteHandler,
  postUsersMeStatusRouteHandler,
  postUsersMeSubscriptionsPropertiesRouteHandler,
  postUsersMeSubscriptionsRouteHandler,
  postUsersRouteHandler,
  postUsersUserIdReactivateRouteHandler,
  postUsersUserIdStatusRouteHandler,
  postUserTopicsRouteHandler,
  postUserUploadsRouteHandler,
  postZulipOutgoingWebhookRouteHandler,
  putBotStorageRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postFetchApiKeyRoute, postFetchApiKeyRouteHandler)
  .openapi(postJwtFetchApiKeyRoute, postJwtFetchApiKeyRouteHandler)
  .openapi(postDevFetchApiKeyRoute, postDevFetchApiKeyRouteHandler)
  .openapi(getDevListUsersRoute, getDevListUsersRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(deleteEventsRoute, deleteEventsRouteHandler)
  .openapi(getGetStreamIdRoute, getGetStreamIdRouteHandler)
  .openapi(postMarkAllAsReadRoute, postMarkAllAsReadRouteHandler)
  .openapi(postMarkStreamAsReadRoute, postMarkStreamAsReadRouteHandler)
  .openapi(postMarkTopicAsReadRoute, postMarkTopicAsReadRouteHandler)
  .openapi(getAttachmentsRoute, getAttachmentsRouteHandler)
  .openapi(deleteAttachmentsAttachmentIdRoute, deleteAttachmentsAttachmentIdRouteHandler)
  .openapi(getBotStorageRoute, getBotStorageRouteHandler)
  .openapi(putBotStorageRoute, putBotStorageRouteHandler)
  .openapi(deleteBotStorageRoute, deleteBotStorageRouteHandler)
  .openapi(getDraftsRoute, getDraftsRouteHandler)
  .openapi(postDraftsRoute, postDraftsRouteHandler)
  .openapi(patchDraftsDraftIdRoute, patchDraftsDraftIdRouteHandler)
  .openapi(deleteDraftsDraftIdRoute, deleteDraftsDraftIdRouteHandler)
  .openapi(getNavigationViewsRoute, getNavigationViewsRouteHandler)
  .openapi(postNavigationViewsRoute, postNavigationViewsRouteHandler)
  .openapi(patchNavigationViewsFragmentRoute, patchNavigationViewsFragmentRouteHandler)
  .openapi(deleteNavigationViewsFragmentRoute, deleteNavigationViewsFragmentRouteHandler)
  .openapi(getSavedSnippetsRoute, getSavedSnippetsRouteHandler)
  .openapi(postSavedSnippetsRoute, postSavedSnippetsRouteHandler)
  .openapi(patchSavedSnippetsSavedSnippetIdRoute, patchSavedSnippetsSavedSnippetIdRouteHandler)
  .openapi(deleteSavedSnippetsSavedSnippetIdRoute, deleteSavedSnippetsSavedSnippetIdRouteHandler)
  .openapi(getRemindersRoute, getRemindersRouteHandler)
  .openapi(postRemindersRoute, postRemindersRouteHandler)
  .openapi(deleteRemindersReminderIdRoute, deleteRemindersReminderIdRouteHandler)
  .openapi(getScheduledMessagesRoute, getScheduledMessagesRouteHandler)
  .openapi(postScheduledMessagesRoute, postScheduledMessagesRouteHandler)
  .openapi(
    patchScheduledMessagesScheduledMessageIdRoute,
    patchScheduledMessagesScheduledMessageIdRouteHandler,
  )
  .openapi(
    deleteScheduledMessagesScheduledMessageIdRoute,
    deleteScheduledMessagesScheduledMessageIdRouteHandler,
  )
  .openapi(postDefaultStreamsRoute, postDefaultStreamsRouteHandler)
  .openapi(deleteDefaultStreamsRoute, deleteDefaultStreamsRouteHandler)
  .openapi(getMessagesRoute, getMessagesRouteHandler)
  .openapi(postMessagesRoute, postMessagesRouteHandler)
  .openapi(getMessagesMessageIdHistoryRoute, getMessagesMessageIdHistoryRouteHandler)
  .openapi(postMessagesFlagsRoute, postMessagesFlagsRouteHandler)
  .openapi(postMessagesFlagsNarrowRoute, postMessagesFlagsNarrowRouteHandler)
  .openapi(postMessagesRenderRoute, postMessagesRenderRouteHandler)
  .openapi(postMessagesMessageIdReactionsRoute, postMessagesMessageIdReactionsRouteHandler)
  .openapi(deleteMessagesMessageIdReactionsRoute, deleteMessagesMessageIdReactionsRouteHandler)
  .openapi(getMessagesMessageIdReadReceiptsRoute, getMessagesMessageIdReadReceiptsRouteHandler)
  .openapi(getMessagesMatchesNarrowRoute, getMessagesMatchesNarrowRouteHandler)
  .openapi(getMessagesMessageIdRoute, getMessagesMessageIdRouteHandler)
  .openapi(patchMessagesMessageIdRoute, patchMessagesMessageIdRouteHandler)
  .openapi(deleteMessagesMessageIdRoute, deleteMessagesMessageIdRouteHandler)
  .openapi(postMessagesMessageIdReportRoute, postMessagesMessageIdReportRouteHandler)
  .openapi(postUserUploadsRoute, postUserUploadsRouteHandler)
  .openapi(
    getThumbnailStatusRealmIdStrFilenameRoute,
    getThumbnailStatusRealmIdStrFilenameRouteHandler,
  )
  .openapi(getUserUploadsRealmIdStrFilenameRoute, getUserUploadsRealmIdStrFilenameRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(postUsersUserIdReactivateRoute, postUsersUserIdReactivateRouteHandler)
  .openapi(postUsersUserIdStatusRoute, postUsersUserIdStatusRouteHandler)
  .openapi(getUsersUserIdStatusRoute, getUsersUserIdStatusRouteHandler)
  .openapi(getUsersUserIdOrEmailPresenceRoute, getUsersUserIdOrEmailPresenceRouteHandler)
  .openapi(getUsersMeRoute, getUsersMeRouteHandler)
  .openapi(deleteUsersMeRoute, deleteUsersMeRouteHandler)
  .openapi(postUsersMeApiKeyRegenerateRoute, postUsersMeApiKeyRegenerateRouteHandler)
  .openapi(getUsersMeAlertWordsRoute, getUsersMeAlertWordsRouteHandler)
  .openapi(postUsersMeAlertWordsRoute, postUsersMeAlertWordsRouteHandler)
  .openapi(deleteUsersMeAlertWordsRoute, deleteUsersMeAlertWordsRouteHandler)
  .openapi(postUsersMePresenceRoute, postUsersMePresenceRouteHandler)
  .openapi(patchUsersMeProfileDataRoute, patchUsersMeProfileDataRouteHandler)
  .openapi(deleteUsersMeProfileDataRoute, deleteUsersMeProfileDataRouteHandler)
  .openapi(postUsersMeStatusRoute, postUsersMeStatusRouteHandler)
  .openapi(getUsersMeStreamIdTopicsRoute, getUsersMeStreamIdTopicsRouteHandler)
  .openapi(getUsersMeSubscriptionsRoute, getUsersMeSubscriptionsRouteHandler)
  .openapi(postUsersMeSubscriptionsRoute, postUsersMeSubscriptionsRouteHandler)
  .openapi(deleteUsersMeSubscriptionsRoute, deleteUsersMeSubscriptionsRouteHandler)
  .openapi(
    patchUsersMeSubscriptionsMutedTopicsRoute,
    patchUsersMeSubscriptionsMutedTopicsRouteHandler,
  )
  .openapi(postMobilePushTestNotificationRoute, postMobilePushTestNotificationRouteHandler)
  .openapi(postMobilePushE2eeTestNotificationRoute, postMobilePushE2eeTestNotificationRouteHandler)
  .openapi(postMobilePushRegisterRoute, postMobilePushRegisterRouteHandler)
  .openapi(postRemotesPushE2eeRegisterRoute, postRemotesPushE2eeRegisterRouteHandler)
  .openapi(postRegisterClientDeviceRoute, postRegisterClientDeviceRouteHandler)
  .openapi(postRemoveClientDeviceRoute, postRemoveClientDeviceRouteHandler)
  .openapi(postUserTopicsRoute, postUserTopicsRouteHandler)
  .openapi(postUsersMeMutedUsersMutedUserIdRoute, postUsersMeMutedUsersMutedUserIdRouteHandler)
  .openapi(deleteUsersMeMutedUsersMutedUserIdRoute, deleteUsersMeMutedUsersMutedUserIdRouteHandler)
  .openapi(postUsersMeApnsDeviceTokenRoute, postUsersMeApnsDeviceTokenRouteHandler)
  .openapi(deleteUsersMeApnsDeviceTokenRoute, deleteUsersMeApnsDeviceTokenRouteHandler)
  .openapi(postUsersMeAndroidGcmRegIdRoute, postUsersMeAndroidGcmRegIdRouteHandler)
  .openapi(deleteUsersMeAndroidGcmRegIdRoute, deleteUsersMeAndroidGcmRegIdRouteHandler)
  .openapi(
    getUsersUserIdSubscriptionsStreamIdRoute,
    getUsersUserIdSubscriptionsStreamIdRouteHandler,
  )
  .openapi(getUsersUserIdChannelsRoute, getUsersUserIdChannelsRouteHandler)
  .openapi(postRealmEmojiEmojiNameRoute, postRealmEmojiEmojiNameRouteHandler)
  .openapi(deleteRealmEmojiEmojiNameRoute, deleteRealmEmojiEmojiNameRouteHandler)
  .openapi(getRealmEmojiRoute, getRealmEmojiRouteHandler)
  .openapi(getRealmPresenceRoute, getRealmPresenceRouteHandler)
  .openapi(getRealmDomainsRoute, getRealmDomainsRouteHandler)
  .openapi(postRealmDomainsRoute, postRealmDomainsRouteHandler)
  .openapi(patchRealmDomainsDomainRoute, patchRealmDomainsDomainRouteHandler)
  .openapi(deleteRealmDomainsDomainRoute, deleteRealmDomainsDomainRouteHandler)
  .openapi(postRealmDeactivateRoute, postRealmDeactivateRouteHandler)
  .openapi(getRealmProfileFieldsRoute, getRealmProfileFieldsRouteHandler)
  .openapi(patchRealmProfileFieldsRoute, patchRealmProfileFieldsRouteHandler)
  .openapi(postRealmProfileFieldsRoute, postRealmProfileFieldsRouteHandler)
  .openapi(patchRealmProfileFieldsFieldIdRoute, patchRealmProfileFieldsFieldIdRouteHandler)
  .openapi(deleteRealmProfileFieldsFieldIdRoute, deleteRealmProfileFieldsFieldIdRouteHandler)
  .openapi(patchRealmUserSettingsDefaultsRoute, patchRealmUserSettingsDefaultsRouteHandler)
  .openapi(postUsersMeAvatarRoute, postUsersMeAvatarRouteHandler)
  .openapi(deleteUsersMeAvatarRoute, deleteUsersMeAvatarRouteHandler)
  .openapi(postUsersMeSubscriptionsPropertiesRoute, postUsersMeSubscriptionsPropertiesRouteHandler)
  .openapi(patchUsersMeSubscriptionsStreamIdRoute, patchUsersMeSubscriptionsStreamIdRouteHandler)
  .openapi(getUsersEmailRoute, getUsersEmailRouteHandler)
  .openapi(patchUsersEmailRoute, patchUsersEmailRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(patchUsersUserIdRoute, patchUsersUserIdRouteHandler)
  .openapi(deleteUsersUserIdRoute, deleteUsersUserIdRouteHandler)
  .openapi(getRealmLinkifiersRoute, getRealmLinkifiersRouteHandler)
  .openapi(patchRealmLinkifiersRoute, patchRealmLinkifiersRouteHandler)
  .openapi(postRealmFiltersRoute, postRealmFiltersRouteHandler)
  .openapi(deleteRealmFiltersFilterIdRoute, deleteRealmFiltersFilterIdRouteHandler)
  .openapi(patchRealmFiltersFilterIdRoute, patchRealmFiltersFilterIdRouteHandler)
  .openapi(postRealmPlaygroundsRoute, postRealmPlaygroundsRouteHandler)
  .openapi(deleteRealmPlaygroundsPlaygroundIdRoute, deleteRealmPlaygroundsPlaygroundIdRouteHandler)
  .openapi(deleteExportRealmExportIdRoute, deleteExportRealmExportIdRouteHandler)
  .openapi(getExportRealmRoute, getExportRealmRouteHandler)
  .openapi(postExportRealmRoute, postExportRealmRouteHandler)
  .openapi(getExportRealmConsentsRoute, getExportRealmConsentsRouteHandler)
  .openapi(getInvitesRoute, getInvitesRouteHandler)
  .openapi(postInvitesRoute, postInvitesRouteHandler)
  .openapi(postInvitesMultiuseRoute, postInvitesMultiuseRouteHandler)
  .openapi(deleteInvitesInviteIdRoute, deleteInvitesInviteIdRouteHandler)
  .openapi(deleteInvitesMultiuseInviteIdRoute, deleteInvitesMultiuseInviteIdRouteHandler)
  .openapi(postInvitesInviteIdResendRoute, postInvitesInviteIdResendRouteHandler)
  .openapi(
    postRealmTestWelcomeBotCustomMessageRoute,
    postRealmTestWelcomeBotCustomMessageRouteHandler,
  )
  .openapi(postRegisterRoute, postRegisterRouteHandler)
  .openapi(getServerSettingsRoute, getServerSettingsRouteHandler)
  .openapi(patchSettingsRoute, patchSettingsRouteHandler)
  .openapi(getStreamsStreamIdMembersRoute, getStreamsStreamIdMembersRouteHandler)
  .openapi(getStreamsRoute, getStreamsRouteHandler)
  .openapi(getStreamsStreamIdRoute, getStreamsStreamIdRouteHandler)
  .openapi(deleteStreamsStreamIdRoute, deleteStreamsStreamIdRouteHandler)
  .openapi(patchStreamsStreamIdRoute, patchStreamsStreamIdRouteHandler)
  .openapi(getStreamsStreamIdEmailAddressRoute, getStreamsStreamIdEmailAddressRouteHandler)
  .openapi(postStreamsStreamIdDeleteTopicRoute, postStreamsStreamIdDeleteTopicRouteHandler)
  .openapi(postTypingRoute, postTypingRouteHandler)
  .openapi(postMessagesMessageIdTypingRoute, postMessagesMessageIdTypingRouteHandler)
  .openapi(postChannelsCreateRoute, postChannelsCreateRouteHandler)
  .openapi(postUserGroupsCreateRoute, postUserGroupsCreateRouteHandler)
  .openapi(postUserGroupsUserGroupIdMembersRoute, postUserGroupsUserGroupIdMembersRouteHandler)
  .openapi(getUserGroupsUserGroupIdMembersRoute, getUserGroupsUserGroupIdMembersRouteHandler)
  .openapi(patchUserGroupsUserGroupIdRoute, patchUserGroupsUserGroupIdRouteHandler)
  .openapi(getUserGroupsRoute, getUserGroupsRouteHandler)
  .openapi(postUserGroupsUserGroupIdSubgroupsRoute, postUserGroupsUserGroupIdSubgroupsRouteHandler)
  .openapi(getUserGroupsUserGroupIdSubgroupsRoute, getUserGroupsUserGroupIdSubgroupsRouteHandler)
  .openapi(
    getUserGroupsUserGroupIdMembersUserIdRoute,
    getUserGroupsUserGroupIdMembersUserIdRouteHandler,
  )
  .openapi(
    postUserGroupsUserGroupIdDeactivateRoute,
    postUserGroupsUserGroupIdDeactivateRouteHandler,
  )
  .openapi(postChannelFoldersCreateRoute, postChannelFoldersCreateRouteHandler)
  .openapi(getChannelFoldersRoute, getChannelFoldersRouteHandler)
  .openapi(patchChannelFoldersRoute, patchChannelFoldersRouteHandler)
  .openapi(patchChannelFoldersChannelFolderIdRoute, patchChannelFoldersChannelFolderIdRouteHandler)
  .openapi(getBotsBotIdApiKeyRoute, getBotsBotIdApiKeyRouteHandler)
  .openapi(postBotsBotIdApiKeyRegenerateRoute, postBotsBotIdApiKeyRegenerateRouteHandler)
  .openapi(postRealTimeRoute, postRealTimeRouteHandler)
  .openapi(postRestErrorHandlingRoute, postRestErrorHandlingRouteHandler)
  .openapi(postZulipOutgoingWebhookRoute, postZulipOutgoingWebhookRouteHandler)
  .openapi(getCallsBigbluebuttonCreateRoute, getCallsBigbluebuttonCreateRouteHandler)
  .openapi(postCallsNextcloudTalkCreateRoute, postCallsNextcloudTalkCreateRouteHandler)
  .openapi(postCallsWebexCreateRoute, postCallsWebexCreateRouteHandler)
  .openapi(postCallsGoogleMeetCreateRoute, postCallsGoogleMeetCreateRouteHandler)
  .openapi(postCallsConstructorgroupsCreateRoute, postCallsConstructorgroupsCreateRouteHandler)

export default app
