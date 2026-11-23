import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBotsBotIdEventsConfigurationRoute,
  deleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute,
  deleteAccountsAccountIdRoomsRoomIdRoute,
  deleteAccountsAccountIdRoute,
  deleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute,
  deleteAppInstancesAppInstanceArnRoute,
  deleteAppInstancesAppInstanceArnStreamingConfigurationsRoute,
  deleteAppInstanceUsersAppInstanceUserArnRoute,
  deleteChannelsChannelArnBansMemberArnRoute,
  deleteChannelsChannelArnMembershipsMemberArnRoute,
  deleteChannelsChannelArnMessagesMessageIdRoute,
  deleteChannelsChannelArnModeratorsChannelModeratorArnRoute,
  deleteChannelsChannelArnRoute,
  deleteMediaCapturePipelinesMediaPipelineIdRoute,
  deleteMeetingsMeetingIdAttendeesAttendeeIdRoute,
  deleteMeetingsMeetingIdRoute,
  deletePhoneNumbersPhoneNumberIdRoute,
  deleteSipMediaApplicationsSipMediaApplicationIdRoute,
  deleteSipRulesSipRuleIdRoute,
  deleteVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
  deleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
  deleteVoiceConnectorsVoiceConnectorIdOriginationRoute,
  deleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
  deleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
  deleteVoiceConnectorsVoiceConnectorIdRoute,
  deleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
  deleteVoiceConnectorsVoiceConnectorIdTerminationRoute,
  getAccountsAccountIdBotsBotIdEventsConfigurationRoute,
  getAccountsAccountIdBotsBotIdRoute,
  getAccountsAccountIdBotsRoute,
  getAccountsAccountIdRetentionSettingsRoute,
  getAccountsAccountIdRoomsRoomIdMembershipsRoute,
  getAccountsAccountIdRoomsRoomIdRoute,
  getAccountsAccountIdRoomsRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdSettingsRoute,
  getAccountsAccountIdUsersRoute,
  getAccountsAccountIdUsersUserIdRoute,
  getAccountsAccountIdUsersUserIdSettingsRoute,
  getAccountsRoute,
  getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute,
  getAppInstancesAppInstanceArnAdminsRoute,
  getAppInstancesAppInstanceArnRetentionSettingsRoute,
  getAppInstancesAppInstanceArnRoute,
  getAppInstancesAppInstanceArnStreamingConfigurationsRoute,
  getAppInstancesRoute,
  getAppInstanceUsersAppInstanceArnRoute,
  getAppInstanceUsersAppInstanceUserArnRoute,
  getChannelsAppInstanceArnRoute,
  getChannelsChannelArnBansMemberArnRoute,
  getChannelsChannelArnBansRoute,
  getChannelsChannelArnMembershipsMemberArnRoute,
  getChannelsChannelArnMembershipsRoute,
  getChannelsChannelArnMessagesMessageIdRoute,
  getChannelsChannelArnMessagesRoute,
  getChannelsChannelArnModeratorsChannelModeratorArnRoute,
  getChannelsChannelArnModeratorsRoute,
  getChannelsChannelArnRoute,
  getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnRoute,
  getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnRoute,
  getChannelsScopeAppInstanceUserMembershipsRoute,
  getChannelsScopeAppInstanceUserModeratedChannelsRoute,
  getEndpointsMessagingSessionRoute,
  getMediaCapturePipelinesMediaPipelineIdRoute,
  getMediaCapturePipelinesRoute,
  getMeetingsMeetingIdAttendeesAttendeeIdRoute,
  getMeetingsMeetingIdAttendeesAttendeeIdTagsRoute,
  getMeetingsMeetingIdAttendeesRoute,
  getMeetingsMeetingIdRoute,
  getMeetingsMeetingIdTagsRoute,
  getMeetingsRoute,
  getPhoneNumberCountriesProductTypeRoute,
  getPhoneNumberOrdersPhoneNumberOrderIdRoute,
  getPhoneNumberOrdersRoute,
  getPhoneNumbersPhoneNumberIdRoute,
  getPhoneNumbersRoute,
  getSearchTypePhoneNumbersRoute,
  getSettingsPhoneNumberRoute,
  getSettingsRoute,
  getSipMediaApplicationsRoute,
  getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute,
  getSipMediaApplicationsSipMediaApplicationIdRoute,
  getSipRulesRoute,
  getSipRulesSipRuleIdRoute,
  getTagsArnRoute,
  getVoiceConnectorGroupsRoute,
  getVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
  getVoiceConnectorsRoute,
  getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
  getVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute,
  getVoiceConnectorsVoiceConnectorIdOriginationRoute,
  getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
  getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
  getVoiceConnectorsVoiceConnectorIdProxySessionsRoute,
  getVoiceConnectorsVoiceConnectorIdRoute,
  getVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
  getVoiceConnectorsVoiceConnectorIdTerminationCredentialsRoute,
  getVoiceConnectorsVoiceConnectorIdTerminationHealthRoute,
  getVoiceConnectorsVoiceConnectorIdTerminationRoute,
  postAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenRoute,
  postAccountsAccountIdBotsBotIdRoute,
  postAccountsAccountIdBotsRoute,
  postAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactRoute,
  postAccountsAccountIdOperationAssociateSigninDelegateGroupsRoute,
  postAccountsAccountIdOperationDisassociateSigninDelegateGroupsRoute,
  postAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute,
  postAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateRoute,
  postAccountsAccountIdRoomsRoomIdMembershipsRoute,
  postAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactRoute,
  postAccountsAccountIdRoomsRoomIdRoute,
  postAccountsAccountIdRoomsRoute,
  postAccountsAccountIdRoute,
  postAccountsAccountIdUsersOperationAddRoute,
  postAccountsAccountIdUsersOperationCreateRoute,
  postAccountsAccountIdUsersOperationSuspendRoute,
  postAccountsAccountIdUsersOperationUnsuspendRoute,
  postAccountsAccountIdUsersRoute,
  postAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberRoute,
  postAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberRoute,
  postAccountsAccountIdUsersUserIdOperationLogoutRoute,
  postAccountsAccountIdUsersUserIdOperationResetPersonalPinRoute,
  postAccountsAccountIdUsersUserIdRoute,
  postAccountsRoute,
  postAppInstancesAppInstanceArnAdminsRoute,
  postAppInstancesRoute,
  postAppInstanceUsersRoute,
  postChannelsChannelArnBansRoute,
  postChannelsChannelArnMembershipsOperationBatchCreateRoute,
  postChannelsChannelArnMembershipsRoute,
  postChannelsChannelArnMessagesMessageIdOperationRedactRoute,
  postChannelsChannelArnMessagesRoute,
  postChannelsChannelArnModeratorsRoute,
  postChannelsRoute,
  postEmergencyCallingAddressRoute,
  postMediaCapturePipelinesRoute,
  postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddRoute,
  postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteRoute,
  postMeetingsMeetingIdAttendeesOperationBatchCreateRoute,
  postMeetingsMeetingIdAttendeesRoute,
  postMeetingsMeetingIdDialOutsRoute,
  postMeetingsMeetingIdTagsOperationAddRoute,
  postMeetingsMeetingIdTagsOperationDeleteRoute,
  postMeetingsMeetingIdTranscriptionOperationStartRoute,
  postMeetingsMeetingIdTranscriptionOperationStopRoute,
  postMeetingsOperationCreateAttendeesRoute,
  postMeetingsRoute,
  postPhoneNumberOrdersRoute,
  postPhoneNumbersOperationBatchDeleteRoute,
  postPhoneNumbersOperationBatchUpdateRoute,
  postPhoneNumbersPhoneNumberIdOperationRestoreRoute,
  postPhoneNumbersPhoneNumberIdRoute,
  postSipMediaApplicationsRoute,
  postSipMediaApplicationsSipMediaApplicationIdCallsRoute,
  postSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdRoute,
  postSipRulesRoute,
  postTagsOperationTagResourceRoute,
  postTagsOperationUntagResourceRoute,
  postVoiceConnectorGroupsRoute,
  postVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersRoute,
  postVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersRoute,
  postVoiceConnectorsRoute,
  postVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersRoute,
  postVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersRoute,
  postVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
  postVoiceConnectorsVoiceConnectorIdProxySessionsRoute,
  postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteRoute,
  postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutRoute,
  putAccountsAccountIdBotsBotIdEventsConfigurationRoute,
  putAccountsAccountIdRetentionSettingsRoute,
  putAccountsAccountIdSettingsRoute,
  putAccountsAccountIdUsersUserIdSettingsRoute,
  putAppInstancesAppInstanceArnRetentionSettingsRoute,
  putAppInstancesAppInstanceArnRoute,
  putAppInstancesAppInstanceArnStreamingConfigurationsRoute,
  putAppInstanceUsersAppInstanceUserArnRoute,
  putChannelsChannelArnMessagesMessageIdRoute,
  putChannelsChannelArnReadMarkerRoute,
  putChannelsChannelArnRoute,
  putSettingsPhoneNumberRoute,
  putSettingsRoute,
  putSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute,
  putSipMediaApplicationsSipMediaApplicationIdRoute,
  putSipRulesSipRuleIdRoute,
  putVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
  putVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
  putVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute,
  putVoiceConnectorsVoiceConnectorIdOriginationRoute,
  putVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
  putVoiceConnectorsVoiceConnectorIdRoute,
  putVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
  putVoiceConnectorsVoiceConnectorIdTerminationRoute,
} from './routes'
import {
  deleteAccountsAccountIdBotsBotIdEventsConfigurationRouteHandler,
  deleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdRouteHandler,
  deleteAccountsAccountIdRoomsRoomIdRouteHandler,
  deleteAccountsAccountIdRouteHandler,
  deleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRouteHandler,
  deleteAppInstancesAppInstanceArnRouteHandler,
  deleteAppInstancesAppInstanceArnStreamingConfigurationsRouteHandler,
  deleteAppInstanceUsersAppInstanceUserArnRouteHandler,
  deleteChannelsChannelArnBansMemberArnRouteHandler,
  deleteChannelsChannelArnMembershipsMemberArnRouteHandler,
  deleteChannelsChannelArnMessagesMessageIdRouteHandler,
  deleteChannelsChannelArnModeratorsChannelModeratorArnRouteHandler,
  deleteChannelsChannelArnRouteHandler,
  deleteMediaCapturePipelinesMediaPipelineIdRouteHandler,
  deleteMeetingsMeetingIdAttendeesAttendeeIdRouteHandler,
  deleteMeetingsMeetingIdRouteHandler,
  deletePhoneNumbersPhoneNumberIdRouteHandler,
  deleteSipMediaApplicationsSipMediaApplicationIdRouteHandler,
  deleteSipRulesSipRuleIdRouteHandler,
  deleteVoiceConnectorGroupsVoiceConnectorGroupIdRouteHandler,
  deleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRouteHandler,
  deleteVoiceConnectorsVoiceConnectorIdOriginationRouteHandler,
  deleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRouteHandler,
  deleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRouteHandler,
  deleteVoiceConnectorsVoiceConnectorIdRouteHandler,
  deleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationRouteHandler,
  deleteVoiceConnectorsVoiceConnectorIdTerminationRouteHandler,
  getAccountsAccountIdBotsBotIdEventsConfigurationRouteHandler,
  getAccountsAccountIdBotsBotIdRouteHandler,
  getAccountsAccountIdBotsRouteHandler,
  getAccountsAccountIdRetentionSettingsRouteHandler,
  getAccountsAccountIdRoomsRoomIdMembershipsRouteHandler,
  getAccountsAccountIdRoomsRoomIdRouteHandler,
  getAccountsAccountIdRoomsRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsAccountIdSettingsRouteHandler,
  getAccountsAccountIdUsersRouteHandler,
  getAccountsAccountIdUsersUserIdRouteHandler,
  getAccountsAccountIdUsersUserIdSettingsRouteHandler,
  getAccountsRouteHandler,
  getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRouteHandler,
  getAppInstancesAppInstanceArnAdminsRouteHandler,
  getAppInstancesAppInstanceArnRetentionSettingsRouteHandler,
  getAppInstancesAppInstanceArnRouteHandler,
  getAppInstancesAppInstanceArnStreamingConfigurationsRouteHandler,
  getAppInstancesRouteHandler,
  getAppInstanceUsersAppInstanceArnRouteHandler,
  getAppInstanceUsersAppInstanceUserArnRouteHandler,
  getChannelsAppInstanceArnRouteHandler,
  getChannelsChannelArnBansMemberArnRouteHandler,
  getChannelsChannelArnBansRouteHandler,
  getChannelsChannelArnMembershipsMemberArnRouteHandler,
  getChannelsChannelArnMembershipsRouteHandler,
  getChannelsChannelArnMessagesMessageIdRouteHandler,
  getChannelsChannelArnMessagesRouteHandler,
  getChannelsChannelArnModeratorsChannelModeratorArnRouteHandler,
  getChannelsChannelArnModeratorsRouteHandler,
  getChannelsChannelArnRouteHandler,
  getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnRouteHandler,
  getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnRouteHandler,
  getChannelsScopeAppInstanceUserMembershipsRouteHandler,
  getChannelsScopeAppInstanceUserModeratedChannelsRouteHandler,
  getEndpointsMessagingSessionRouteHandler,
  getMediaCapturePipelinesMediaPipelineIdRouteHandler,
  getMediaCapturePipelinesRouteHandler,
  getMeetingsMeetingIdAttendeesAttendeeIdRouteHandler,
  getMeetingsMeetingIdAttendeesAttendeeIdTagsRouteHandler,
  getMeetingsMeetingIdAttendeesRouteHandler,
  getMeetingsMeetingIdRouteHandler,
  getMeetingsMeetingIdTagsRouteHandler,
  getMeetingsRouteHandler,
  getPhoneNumberCountriesProductTypeRouteHandler,
  getPhoneNumberOrdersPhoneNumberOrderIdRouteHandler,
  getPhoneNumberOrdersRouteHandler,
  getPhoneNumbersPhoneNumberIdRouteHandler,
  getPhoneNumbersRouteHandler,
  getSearchTypePhoneNumbersRouteHandler,
  getSettingsPhoneNumberRouteHandler,
  getSettingsRouteHandler,
  getSipMediaApplicationsRouteHandler,
  getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRouteHandler,
  getSipMediaApplicationsSipMediaApplicationIdRouteHandler,
  getSipRulesRouteHandler,
  getSipRulesSipRuleIdRouteHandler,
  getTagsArnRouteHandler,
  getVoiceConnectorGroupsRouteHandler,
  getVoiceConnectorGroupsVoiceConnectorGroupIdRouteHandler,
  getVoiceConnectorsRouteHandler,
  getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRouteHandler,
  getVoiceConnectorsVoiceConnectorIdLoggingConfigurationRouteHandler,
  getVoiceConnectorsVoiceConnectorIdOriginationRouteHandler,
  getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRouteHandler,
  getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRouteHandler,
  getVoiceConnectorsVoiceConnectorIdProxySessionsRouteHandler,
  getVoiceConnectorsVoiceConnectorIdRouteHandler,
  getVoiceConnectorsVoiceConnectorIdStreamingConfigurationRouteHandler,
  getVoiceConnectorsVoiceConnectorIdTerminationCredentialsRouteHandler,
  getVoiceConnectorsVoiceConnectorIdTerminationHealthRouteHandler,
  getVoiceConnectorsVoiceConnectorIdTerminationRouteHandler,
  postAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenRouteHandler,
  postAccountsAccountIdBotsBotIdRouteHandler,
  postAccountsAccountIdBotsRouteHandler,
  postAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactRouteHandler,
  postAccountsAccountIdOperationAssociateSigninDelegateGroupsRouteHandler,
  postAccountsAccountIdOperationDisassociateSigninDelegateGroupsRouteHandler,
  postAccountsAccountIdRoomsRoomIdMembershipsMemberIdRouteHandler,
  postAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateRouteHandler,
  postAccountsAccountIdRoomsRoomIdMembershipsRouteHandler,
  postAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactRouteHandler,
  postAccountsAccountIdRoomsRoomIdRouteHandler,
  postAccountsAccountIdRoomsRouteHandler,
  postAccountsAccountIdRouteHandler,
  postAccountsAccountIdUsersOperationAddRouteHandler,
  postAccountsAccountIdUsersOperationCreateRouteHandler,
  postAccountsAccountIdUsersOperationSuspendRouteHandler,
  postAccountsAccountIdUsersOperationUnsuspendRouteHandler,
  postAccountsAccountIdUsersRouteHandler,
  postAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberRouteHandler,
  postAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberRouteHandler,
  postAccountsAccountIdUsersUserIdOperationLogoutRouteHandler,
  postAccountsAccountIdUsersUserIdOperationResetPersonalPinRouteHandler,
  postAccountsAccountIdUsersUserIdRouteHandler,
  postAccountsRouteHandler,
  postAppInstancesAppInstanceArnAdminsRouteHandler,
  postAppInstancesRouteHandler,
  postAppInstanceUsersRouteHandler,
  postChannelsChannelArnBansRouteHandler,
  postChannelsChannelArnMembershipsOperationBatchCreateRouteHandler,
  postChannelsChannelArnMembershipsRouteHandler,
  postChannelsChannelArnMessagesMessageIdOperationRedactRouteHandler,
  postChannelsChannelArnMessagesRouteHandler,
  postChannelsChannelArnModeratorsRouteHandler,
  postChannelsRouteHandler,
  postEmergencyCallingAddressRouteHandler,
  postMediaCapturePipelinesRouteHandler,
  postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddRouteHandler,
  postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteRouteHandler,
  postMeetingsMeetingIdAttendeesOperationBatchCreateRouteHandler,
  postMeetingsMeetingIdAttendeesRouteHandler,
  postMeetingsMeetingIdDialOutsRouteHandler,
  postMeetingsMeetingIdTagsOperationAddRouteHandler,
  postMeetingsMeetingIdTagsOperationDeleteRouteHandler,
  postMeetingsMeetingIdTranscriptionOperationStartRouteHandler,
  postMeetingsMeetingIdTranscriptionOperationStopRouteHandler,
  postMeetingsOperationCreateAttendeesRouteHandler,
  postMeetingsRouteHandler,
  postPhoneNumberOrdersRouteHandler,
  postPhoneNumbersOperationBatchDeleteRouteHandler,
  postPhoneNumbersOperationBatchUpdateRouteHandler,
  postPhoneNumbersPhoneNumberIdOperationRestoreRouteHandler,
  postPhoneNumbersPhoneNumberIdRouteHandler,
  postSipMediaApplicationsRouteHandler,
  postSipMediaApplicationsSipMediaApplicationIdCallsRouteHandler,
  postSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdRouteHandler,
  postSipRulesRouteHandler,
  postTagsOperationTagResourceRouteHandler,
  postTagsOperationUntagResourceRouteHandler,
  postVoiceConnectorGroupsRouteHandler,
  postVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersRouteHandler,
  postVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersRouteHandler,
  postVoiceConnectorsRouteHandler,
  postVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersRouteHandler,
  postVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersRouteHandler,
  postVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRouteHandler,
  postVoiceConnectorsVoiceConnectorIdProxySessionsRouteHandler,
  postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteRouteHandler,
  postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutRouteHandler,
  putAccountsAccountIdBotsBotIdEventsConfigurationRouteHandler,
  putAccountsAccountIdRetentionSettingsRouteHandler,
  putAccountsAccountIdSettingsRouteHandler,
  putAccountsAccountIdUsersUserIdSettingsRouteHandler,
  putAppInstancesAppInstanceArnRetentionSettingsRouteHandler,
  putAppInstancesAppInstanceArnRouteHandler,
  putAppInstancesAppInstanceArnStreamingConfigurationsRouteHandler,
  putAppInstanceUsersAppInstanceUserArnRouteHandler,
  putChannelsChannelArnMessagesMessageIdRouteHandler,
  putChannelsChannelArnReadMarkerRouteHandler,
  putChannelsChannelArnRouteHandler,
  putSettingsPhoneNumberRouteHandler,
  putSettingsRouteHandler,
  putSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRouteHandler,
  putSipMediaApplicationsSipMediaApplicationIdRouteHandler,
  putSipRulesSipRuleIdRouteHandler,
  putVoiceConnectorGroupsVoiceConnectorGroupIdRouteHandler,
  putVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRouteHandler,
  putVoiceConnectorsVoiceConnectorIdLoggingConfigurationRouteHandler,
  putVoiceConnectorsVoiceConnectorIdOriginationRouteHandler,
  putVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRouteHandler,
  putVoiceConnectorsVoiceConnectorIdRouteHandler,
  putVoiceConnectorsVoiceConnectorIdStreamingConfigurationRouteHandler,
  putVoiceConnectorsVoiceConnectorIdTerminationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberRoute,
    postAccountsAccountIdUsersUserIdOperationAssociatePhoneNumberRouteHandler,
  )
  .openapi(
    postVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersRoute,
    postVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersRouteHandler,
  )
  .openapi(
    postVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersRoute,
    postVoiceConnectorGroupsVoiceConnectorGroupIdOperationAssociatePhoneNumbersRouteHandler,
  )
  .openapi(
    postAccountsAccountIdOperationAssociateSigninDelegateGroupsRoute,
    postAccountsAccountIdOperationAssociateSigninDelegateGroupsRouteHandler,
  )
  .openapi(
    postMeetingsMeetingIdAttendeesOperationBatchCreateRoute,
    postMeetingsMeetingIdAttendeesOperationBatchCreateRouteHandler,
  )
  .openapi(
    postChannelsChannelArnMembershipsOperationBatchCreateRoute,
    postChannelsChannelArnMembershipsOperationBatchCreateRouteHandler,
  )
  .openapi(
    postAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateRoute,
    postAccountsAccountIdRoomsRoomIdMembershipsOperationBatchCreateRouteHandler,
  )
  .openapi(
    postPhoneNumbersOperationBatchDeleteRoute,
    postPhoneNumbersOperationBatchDeleteRouteHandler,
  )
  .openapi(
    postAccountsAccountIdUsersOperationSuspendRoute,
    postAccountsAccountIdUsersOperationSuspendRouteHandler,
  )
  .openapi(
    postAccountsAccountIdUsersOperationUnsuspendRoute,
    postAccountsAccountIdUsersOperationUnsuspendRouteHandler,
  )
  .openapi(
    postPhoneNumbersOperationBatchUpdateRoute,
    postPhoneNumbersOperationBatchUpdateRouteHandler,
  )
  .openapi(postAccountsAccountIdUsersRoute, postAccountsAccountIdUsersRouteHandler)
  .openapi(getAccountsAccountIdUsersRoute, getAccountsAccountIdUsersRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAppInstancesRoute, postAppInstancesRouteHandler)
  .openapi(getAppInstancesRoute, getAppInstancesRouteHandler)
  .openapi(
    postAppInstancesAppInstanceArnAdminsRoute,
    postAppInstancesAppInstanceArnAdminsRouteHandler,
  )
  .openapi(
    getAppInstancesAppInstanceArnAdminsRoute,
    getAppInstancesAppInstanceArnAdminsRouteHandler,
  )
  .openapi(postAppInstanceUsersRoute, postAppInstanceUsersRouteHandler)
  .openapi(postMeetingsMeetingIdAttendeesRoute, postMeetingsMeetingIdAttendeesRouteHandler)
  .openapi(getMeetingsMeetingIdAttendeesRoute, getMeetingsMeetingIdAttendeesRouteHandler)
  .openapi(postAccountsAccountIdBotsRoute, postAccountsAccountIdBotsRouteHandler)
  .openapi(getAccountsAccountIdBotsRoute, getAccountsAccountIdBotsRouteHandler)
  .openapi(postChannelsRoute, postChannelsRouteHandler)
  .openapi(postChannelsChannelArnBansRoute, postChannelsChannelArnBansRouteHandler)
  .openapi(getChannelsChannelArnBansRoute, getChannelsChannelArnBansRouteHandler)
  .openapi(postChannelsChannelArnMembershipsRoute, postChannelsChannelArnMembershipsRouteHandler)
  .openapi(getChannelsChannelArnMembershipsRoute, getChannelsChannelArnMembershipsRouteHandler)
  .openapi(postChannelsChannelArnModeratorsRoute, postChannelsChannelArnModeratorsRouteHandler)
  .openapi(getChannelsChannelArnModeratorsRoute, getChannelsChannelArnModeratorsRouteHandler)
  .openapi(postMediaCapturePipelinesRoute, postMediaCapturePipelinesRouteHandler)
  .openapi(getMediaCapturePipelinesRoute, getMediaCapturePipelinesRouteHandler)
  .openapi(postMeetingsRoute, postMeetingsRouteHandler)
  .openapi(getMeetingsRoute, getMeetingsRouteHandler)
  .openapi(postMeetingsMeetingIdDialOutsRoute, postMeetingsMeetingIdDialOutsRouteHandler)
  .openapi(
    postMeetingsOperationCreateAttendeesRoute,
    postMeetingsOperationCreateAttendeesRouteHandler,
  )
  .openapi(postPhoneNumberOrdersRoute, postPhoneNumberOrdersRouteHandler)
  .openapi(getPhoneNumberOrdersRoute, getPhoneNumberOrdersRouteHandler)
  .openapi(
    postVoiceConnectorsVoiceConnectorIdProxySessionsRoute,
    postVoiceConnectorsVoiceConnectorIdProxySessionsRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdProxySessionsRoute,
    getVoiceConnectorsVoiceConnectorIdProxySessionsRouteHandler,
  )
  .openapi(postAccountsAccountIdRoomsRoute, postAccountsAccountIdRoomsRouteHandler)
  .openapi(getAccountsAccountIdRoomsRoute, getAccountsAccountIdRoomsRouteHandler)
  .openapi(
    postAccountsAccountIdRoomsRoomIdMembershipsRoute,
    postAccountsAccountIdRoomsRoomIdMembershipsRouteHandler,
  )
  .openapi(
    getAccountsAccountIdRoomsRoomIdMembershipsRoute,
    getAccountsAccountIdRoomsRoomIdMembershipsRouteHandler,
  )
  .openapi(postSipMediaApplicationsRoute, postSipMediaApplicationsRouteHandler)
  .openapi(getSipMediaApplicationsRoute, getSipMediaApplicationsRouteHandler)
  .openapi(
    postSipMediaApplicationsSipMediaApplicationIdCallsRoute,
    postSipMediaApplicationsSipMediaApplicationIdCallsRouteHandler,
  )
  .openapi(postSipRulesRoute, postSipRulesRouteHandler)
  .openapi(getSipRulesRoute, getSipRulesRouteHandler)
  .openapi(
    postAccountsAccountIdUsersOperationCreateRoute,
    postAccountsAccountIdUsersOperationCreateRouteHandler,
  )
  .openapi(postVoiceConnectorsRoute, postVoiceConnectorsRouteHandler)
  .openapi(getVoiceConnectorsRoute, getVoiceConnectorsRouteHandler)
  .openapi(postVoiceConnectorGroupsRoute, postVoiceConnectorGroupsRouteHandler)
  .openapi(getVoiceConnectorGroupsRoute, getVoiceConnectorGroupsRouteHandler)
  .openapi(deleteAccountsAccountIdRoute, deleteAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(postAccountsAccountIdRoute, postAccountsAccountIdRouteHandler)
  .openapi(deleteAppInstancesAppInstanceArnRoute, deleteAppInstancesAppInstanceArnRouteHandler)
  .openapi(getAppInstancesAppInstanceArnRoute, getAppInstancesAppInstanceArnRouteHandler)
  .openapi(putAppInstancesAppInstanceArnRoute, putAppInstancesAppInstanceArnRouteHandler)
  .openapi(
    deleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute,
    deleteAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRouteHandler,
  )
  .openapi(
    getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRoute,
    getAppInstancesAppInstanceArnAdminsAppInstanceAdminArnRouteHandler,
  )
  .openapi(
    deleteAppInstancesAppInstanceArnStreamingConfigurationsRoute,
    deleteAppInstancesAppInstanceArnStreamingConfigurationsRouteHandler,
  )
  .openapi(
    getAppInstancesAppInstanceArnStreamingConfigurationsRoute,
    getAppInstancesAppInstanceArnStreamingConfigurationsRouteHandler,
  )
  .openapi(
    putAppInstancesAppInstanceArnStreamingConfigurationsRoute,
    putAppInstancesAppInstanceArnStreamingConfigurationsRouteHandler,
  )
  .openapi(
    deleteAppInstanceUsersAppInstanceUserArnRoute,
    deleteAppInstanceUsersAppInstanceUserArnRouteHandler,
  )
  .openapi(
    getAppInstanceUsersAppInstanceUserArnRoute,
    getAppInstanceUsersAppInstanceUserArnRouteHandler,
  )
  .openapi(
    putAppInstanceUsersAppInstanceUserArnRoute,
    putAppInstanceUsersAppInstanceUserArnRouteHandler,
  )
  .openapi(
    deleteMeetingsMeetingIdAttendeesAttendeeIdRoute,
    deleteMeetingsMeetingIdAttendeesAttendeeIdRouteHandler,
  )
  .openapi(
    getMeetingsMeetingIdAttendeesAttendeeIdRoute,
    getMeetingsMeetingIdAttendeesAttendeeIdRouteHandler,
  )
  .openapi(deleteChannelsChannelArnRoute, deleteChannelsChannelArnRouteHandler)
  .openapi(getChannelsChannelArnRoute, getChannelsChannelArnRouteHandler)
  .openapi(putChannelsChannelArnRoute, putChannelsChannelArnRouteHandler)
  .openapi(
    deleteChannelsChannelArnBansMemberArnRoute,
    deleteChannelsChannelArnBansMemberArnRouteHandler,
  )
  .openapi(getChannelsChannelArnBansMemberArnRoute, getChannelsChannelArnBansMemberArnRouteHandler)
  .openapi(
    deleteChannelsChannelArnMembershipsMemberArnRoute,
    deleteChannelsChannelArnMembershipsMemberArnRouteHandler,
  )
  .openapi(
    getChannelsChannelArnMembershipsMemberArnRoute,
    getChannelsChannelArnMembershipsMemberArnRouteHandler,
  )
  .openapi(
    deleteChannelsChannelArnMessagesMessageIdRoute,
    deleteChannelsChannelArnMessagesMessageIdRouteHandler,
  )
  .openapi(
    getChannelsChannelArnMessagesMessageIdRoute,
    getChannelsChannelArnMessagesMessageIdRouteHandler,
  )
  .openapi(
    putChannelsChannelArnMessagesMessageIdRoute,
    putChannelsChannelArnMessagesMessageIdRouteHandler,
  )
  .openapi(
    deleteChannelsChannelArnModeratorsChannelModeratorArnRoute,
    deleteChannelsChannelArnModeratorsChannelModeratorArnRouteHandler,
  )
  .openapi(
    getChannelsChannelArnModeratorsChannelModeratorArnRoute,
    getChannelsChannelArnModeratorsChannelModeratorArnRouteHandler,
  )
  .openapi(
    deleteAccountsAccountIdBotsBotIdEventsConfigurationRoute,
    deleteAccountsAccountIdBotsBotIdEventsConfigurationRouteHandler,
  )
  .openapi(
    getAccountsAccountIdBotsBotIdEventsConfigurationRoute,
    getAccountsAccountIdBotsBotIdEventsConfigurationRouteHandler,
  )
  .openapi(
    putAccountsAccountIdBotsBotIdEventsConfigurationRoute,
    putAccountsAccountIdBotsBotIdEventsConfigurationRouteHandler,
  )
  .openapi(
    deleteMediaCapturePipelinesMediaPipelineIdRoute,
    deleteMediaCapturePipelinesMediaPipelineIdRouteHandler,
  )
  .openapi(
    getMediaCapturePipelinesMediaPipelineIdRoute,
    getMediaCapturePipelinesMediaPipelineIdRouteHandler,
  )
  .openapi(deleteMeetingsMeetingIdRoute, deleteMeetingsMeetingIdRouteHandler)
  .openapi(getMeetingsMeetingIdRoute, getMeetingsMeetingIdRouteHandler)
  .openapi(deletePhoneNumbersPhoneNumberIdRoute, deletePhoneNumbersPhoneNumberIdRouteHandler)
  .openapi(getPhoneNumbersPhoneNumberIdRoute, getPhoneNumbersPhoneNumberIdRouteHandler)
  .openapi(postPhoneNumbersPhoneNumberIdRoute, postPhoneNumbersPhoneNumberIdRouteHandler)
  .openapi(
    deleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
    deleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
    getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRouteHandler,
  )
  .openapi(
    postVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
    postVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRouteHandler,
  )
  .openapi(deleteAccountsAccountIdRoomsRoomIdRoute, deleteAccountsAccountIdRoomsRoomIdRouteHandler)
  .openapi(getAccountsAccountIdRoomsRoomIdRoute, getAccountsAccountIdRoomsRoomIdRouteHandler)
  .openapi(postAccountsAccountIdRoomsRoomIdRoute, postAccountsAccountIdRoomsRoomIdRouteHandler)
  .openapi(
    deleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute,
    deleteAccountsAccountIdRoomsRoomIdMembershipsMemberIdRouteHandler,
  )
  .openapi(
    postAccountsAccountIdRoomsRoomIdMembershipsMemberIdRoute,
    postAccountsAccountIdRoomsRoomIdMembershipsMemberIdRouteHandler,
  )
  .openapi(
    deleteSipMediaApplicationsSipMediaApplicationIdRoute,
    deleteSipMediaApplicationsSipMediaApplicationIdRouteHandler,
  )
  .openapi(
    getSipMediaApplicationsSipMediaApplicationIdRoute,
    getSipMediaApplicationsSipMediaApplicationIdRouteHandler,
  )
  .openapi(
    putSipMediaApplicationsSipMediaApplicationIdRoute,
    putSipMediaApplicationsSipMediaApplicationIdRouteHandler,
  )
  .openapi(deleteSipRulesSipRuleIdRoute, deleteSipRulesSipRuleIdRouteHandler)
  .openapi(getSipRulesSipRuleIdRoute, getSipRulesSipRuleIdRouteHandler)
  .openapi(putSipRulesSipRuleIdRoute, putSipRulesSipRuleIdRouteHandler)
  .openapi(
    deleteVoiceConnectorsVoiceConnectorIdRoute,
    deleteVoiceConnectorsVoiceConnectorIdRouteHandler,
  )
  .openapi(getVoiceConnectorsVoiceConnectorIdRoute, getVoiceConnectorsVoiceConnectorIdRouteHandler)
  .openapi(putVoiceConnectorsVoiceConnectorIdRoute, putVoiceConnectorsVoiceConnectorIdRouteHandler)
  .openapi(
    deleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
    deleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
    getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRouteHandler,
  )
  .openapi(
    putVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
    putVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRouteHandler,
  )
  .openapi(
    deleteVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
    deleteVoiceConnectorGroupsVoiceConnectorGroupIdRouteHandler,
  )
  .openapi(
    getVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
    getVoiceConnectorGroupsVoiceConnectorGroupIdRouteHandler,
  )
  .openapi(
    putVoiceConnectorGroupsVoiceConnectorGroupIdRoute,
    putVoiceConnectorGroupsVoiceConnectorGroupIdRouteHandler,
  )
  .openapi(
    deleteVoiceConnectorsVoiceConnectorIdOriginationRoute,
    deleteVoiceConnectorsVoiceConnectorIdOriginationRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdOriginationRoute,
    getVoiceConnectorsVoiceConnectorIdOriginationRouteHandler,
  )
  .openapi(
    putVoiceConnectorsVoiceConnectorIdOriginationRoute,
    putVoiceConnectorsVoiceConnectorIdOriginationRouteHandler,
  )
  .openapi(
    deleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
    deleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
    getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRouteHandler,
  )
  .openapi(
    putVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
    putVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRouteHandler,
  )
  .openapi(
    deleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
    deleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
    getVoiceConnectorsVoiceConnectorIdStreamingConfigurationRouteHandler,
  )
  .openapi(
    putVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
    putVoiceConnectorsVoiceConnectorIdStreamingConfigurationRouteHandler,
  )
  .openapi(
    deleteVoiceConnectorsVoiceConnectorIdTerminationRoute,
    deleteVoiceConnectorsVoiceConnectorIdTerminationRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdTerminationRoute,
    getVoiceConnectorsVoiceConnectorIdTerminationRouteHandler,
  )
  .openapi(
    putVoiceConnectorsVoiceConnectorIdTerminationRoute,
    putVoiceConnectorsVoiceConnectorIdTerminationRouteHandler,
  )
  .openapi(
    postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteRoute,
    postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteRouteHandler,
  )
  .openapi(
    getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnRoute,
    getChannelsChannelArnScopeAppInstanceUserMembershipAppInstanceUserArnRouteHandler,
  )
  .openapi(
    getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnRoute,
    getChannelsChannelArnScopeAppInstanceUserModeratedChannelAppInstanceUserArnRouteHandler,
  )
  .openapi(
    postAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberRoute,
    postAccountsAccountIdUsersUserIdOperationDisassociatePhoneNumberRouteHandler,
  )
  .openapi(
    postVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersRoute,
    postVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersRouteHandler,
  )
  .openapi(
    postVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersRoute,
    postVoiceConnectorGroupsVoiceConnectorGroupIdOperationDisassociatePhoneNumbersRouteHandler,
  )
  .openapi(
    postAccountsAccountIdOperationDisassociateSigninDelegateGroupsRoute,
    postAccountsAccountIdOperationDisassociateSigninDelegateGroupsRouteHandler,
  )
  .openapi(getAccountsAccountIdSettingsRoute, getAccountsAccountIdSettingsRouteHandler)
  .openapi(putAccountsAccountIdSettingsRoute, putAccountsAccountIdSettingsRouteHandler)
  .openapi(
    getAppInstancesAppInstanceArnRetentionSettingsRoute,
    getAppInstancesAppInstanceArnRetentionSettingsRouteHandler,
  )
  .openapi(
    putAppInstancesAppInstanceArnRetentionSettingsRoute,
    putAppInstancesAppInstanceArnRetentionSettingsRouteHandler,
  )
  .openapi(getAccountsAccountIdBotsBotIdRoute, getAccountsAccountIdBotsBotIdRouteHandler)
  .openapi(postAccountsAccountIdBotsBotIdRoute, postAccountsAccountIdBotsBotIdRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(putSettingsRoute, putSettingsRouteHandler)
  .openapi(getEndpointsMessagingSessionRoute, getEndpointsMessagingSessionRouteHandler)
  .openapi(
    getPhoneNumberOrdersPhoneNumberOrderIdRoute,
    getPhoneNumberOrdersPhoneNumberOrderIdRouteHandler,
  )
  .openapi(getSettingsPhoneNumberRoute, getSettingsPhoneNumberRouteHandler)
  .openapi(putSettingsPhoneNumberRoute, putSettingsPhoneNumberRouteHandler)
  .openapi(
    getAccountsAccountIdRetentionSettingsRoute,
    getAccountsAccountIdRetentionSettingsRouteHandler,
  )
  .openapi(
    putAccountsAccountIdRetentionSettingsRoute,
    putAccountsAccountIdRetentionSettingsRouteHandler,
  )
  .openapi(
    getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute,
    getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRouteHandler,
  )
  .openapi(
    putSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute,
    putSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRouteHandler,
  )
  .openapi(getAccountsAccountIdUsersUserIdRoute, getAccountsAccountIdUsersUserIdRouteHandler)
  .openapi(postAccountsAccountIdUsersUserIdRoute, postAccountsAccountIdUsersUserIdRouteHandler)
  .openapi(
    getAccountsAccountIdUsersUserIdSettingsRoute,
    getAccountsAccountIdUsersUserIdSettingsRouteHandler,
  )
  .openapi(
    putAccountsAccountIdUsersUserIdSettingsRoute,
    putAccountsAccountIdUsersUserIdSettingsRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute,
    getVoiceConnectorsVoiceConnectorIdLoggingConfigurationRouteHandler,
  )
  .openapi(
    putVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute,
    putVoiceConnectorsVoiceConnectorIdLoggingConfigurationRouteHandler,
  )
  .openapi(
    getVoiceConnectorsVoiceConnectorIdTerminationHealthRoute,
    getVoiceConnectorsVoiceConnectorIdTerminationHealthRouteHandler,
  )
  .openapi(
    postAccountsAccountIdUsersOperationAddRoute,
    postAccountsAccountIdUsersOperationAddRouteHandler,
  )
  .openapi(getAppInstanceUsersAppInstanceArnRoute, getAppInstanceUsersAppInstanceArnRouteHandler)
  .openapi(
    getMeetingsMeetingIdAttendeesAttendeeIdTagsRoute,
    getMeetingsMeetingIdAttendeesAttendeeIdTagsRouteHandler,
  )
  .openapi(
    getChannelsScopeAppInstanceUserMembershipsRoute,
    getChannelsScopeAppInstanceUserMembershipsRouteHandler,
  )
  .openapi(getChannelsChannelArnMessagesRoute, getChannelsChannelArnMessagesRouteHandler)
  .openapi(postChannelsChannelArnMessagesRoute, postChannelsChannelArnMessagesRouteHandler)
  .openapi(getChannelsAppInstanceArnRoute, getChannelsAppInstanceArnRouteHandler)
  .openapi(
    getChannelsScopeAppInstanceUserModeratedChannelsRoute,
    getChannelsScopeAppInstanceUserModeratedChannelsRouteHandler,
  )
  .openapi(getMeetingsMeetingIdTagsRoute, getMeetingsMeetingIdTagsRouteHandler)
  .openapi(getPhoneNumbersRoute, getPhoneNumbersRouteHandler)
  .openapi(getPhoneNumberCountriesProductTypeRoute, getPhoneNumberCountriesProductTypeRouteHandler)
  .openapi(getTagsArnRoute, getTagsArnRouteHandler)
  .openapi(
    getVoiceConnectorsVoiceConnectorIdTerminationCredentialsRoute,
    getVoiceConnectorsVoiceConnectorIdTerminationCredentialsRouteHandler,
  )
  .openapi(
    postAccountsAccountIdUsersUserIdOperationLogoutRoute,
    postAccountsAccountIdUsersUserIdOperationLogoutRouteHandler,
  )
  .openapi(
    postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutRoute,
    postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutRouteHandler,
  )
  .openapi(
    postChannelsChannelArnMessagesMessageIdOperationRedactRoute,
    postChannelsChannelArnMessagesMessageIdOperationRedactRouteHandler,
  )
  .openapi(
    postAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactRoute,
    postAccountsAccountIdConversationsConversationIdMessagesMessageIdOperationRedactRouteHandler,
  )
  .openapi(
    postAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactRoute,
    postAccountsAccountIdRoomsRoomIdMessagesMessageIdOperationRedactRouteHandler,
  )
  .openapi(
    postAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenRoute,
    postAccountsAccountIdBotsBotIdOperationRegenerateSecurityTokenRouteHandler,
  )
  .openapi(
    postAccountsAccountIdUsersUserIdOperationResetPersonalPinRoute,
    postAccountsAccountIdUsersUserIdOperationResetPersonalPinRouteHandler,
  )
  .openapi(
    postPhoneNumbersPhoneNumberIdOperationRestoreRoute,
    postPhoneNumbersPhoneNumberIdOperationRestoreRouteHandler,
  )
  .openapi(getSearchTypePhoneNumbersRoute, getSearchTypePhoneNumbersRouteHandler)
  .openapi(
    postMeetingsMeetingIdTranscriptionOperationStartRoute,
    postMeetingsMeetingIdTranscriptionOperationStartRouteHandler,
  )
  .openapi(
    postMeetingsMeetingIdTranscriptionOperationStopRoute,
    postMeetingsMeetingIdTranscriptionOperationStopRouteHandler,
  )
  .openapi(
    postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddRoute,
    postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationAddRouteHandler,
  )
  .openapi(
    postMeetingsMeetingIdTagsOperationAddRoute,
    postMeetingsMeetingIdTagsOperationAddRouteHandler,
  )
  .openapi(postTagsOperationTagResourceRoute, postTagsOperationTagResourceRouteHandler)
  .openapi(
    postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteRoute,
    postMeetingsMeetingIdAttendeesAttendeeIdTagsOperationDeleteRouteHandler,
  )
  .openapi(
    postMeetingsMeetingIdTagsOperationDeleteRoute,
    postMeetingsMeetingIdTagsOperationDeleteRouteHandler,
  )
  .openapi(postTagsOperationUntagResourceRoute, postTagsOperationUntagResourceRouteHandler)
  .openapi(putChannelsChannelArnReadMarkerRoute, putChannelsChannelArnReadMarkerRouteHandler)
  .openapi(
    postSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdRoute,
    postSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdRouteHandler,
  )
  .openapi(postEmergencyCallingAddressRoute, postEmergencyCallingAddressRouteHandler)

export default app
