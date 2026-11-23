import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AuditAuditionsRoute,
  getApiV1CloudRegistrationStatusRoute,
  getApiV1CloudWorkspaceRegisterDataRoute,
  getApiV1E2eFetchMyKeysRoute,
  getApiV1E2eFetchUsersWaitingForGroupKeyRoute,
  getApiV1E2eGetUsersOfRoomWithoutKeyRoute,
  getApiV1GetCurrentImportOperationRoute,
  getApiV1GetImportFileDataRoute,
  getApiV1GetImportProgressRoute,
  getApiV1GetLatestImportOperationsRoute,
  getApiV1ImportersListRoute,
  getApiV1ImportStatusRoute,
  getApiV1InstancesGetRoute,
  getApiV1MediaCallsInfoRoute,
  getApiV1MediaCallsStateRoute,
  getApiV1ModerationReportInfoRoute,
  getApiV1ModerationReportsByUsersRoute,
  getApiV1ModerationReportsRoute,
  getApiV1ModerationUserReportedMessagesRoute,
  getApiV1ModerationUserReportsByUserIdRoute,
  getApiV1ModerationUserReportsRoute,
  getApiV1PwGetPolicyRoute,
  getApiV1ServiceConfigurationsRoute,
  getApiV1SessionsInfoAdminRoute,
  getApiV1SessionsInfoRoute,
  getApiV1SessionsListAllRoute,
  getApiV1SessionsListRoute,
  getApiV1SettingsIdRoute,
  getApiV1SettingsOauthRoute,
  getApiV1SettingsPublicRoute,
  getApiV1SettingsRoute,
  getApiV1SetupWizardParametersRoute,
  getApiV1VideoConferenceCapabilitiesRoute,
  getApiV1VideoConferenceInfoRoute,
  getApiV1VideoConferenceJoinableRoute,
  getApiV1VideoConferenceListRoute,
  getApiV1VideoConferenceProvidersRoute,
  postApiV1AuditMessagesRoute,
  postApiV1AuditOmnichannelMessagesRoute,
  postApiV1CloudConnectWorkspaceRoute,
  postApiV1CloudManualRegisterRoute,
  postApiV1DnsResolveSrvRoute,
  postApiV1DnsResolveTxtRoute,
  postApiV1DownloadPendingAvatarsRoute,
  postApiV1DownloadPendingFilesRoute,
  postApiV1DownloadPublicImportFileRoute,
  postApiV1E2eAcceptSuggestedGroupKeyRoute,
  postApiV1E2eProvideUsersSuggestedGroupKeysRoute,
  postApiV1E2eRejectSuggestedGroupKeyRoute,
  postApiV1E2eRequestSubscriptionKeysRoute,
  postApiV1E2eResetRoomKeyRoute,
  postApiV1E2eSetRoomKeyIDRoute,
  postApiV1E2eSetUserPublicAndPrivateKeysRoute,
  postApiV1E2eUpdateGroupKeyRoute,
  postApiV1ImportAddUsersRoute,
  postApiV1ImportClearRoute,
  postApiV1ImportNewRoute,
  postApiV1ImportRunRoute,
  postApiV1ModerationDismissReportsRoute,
  postApiV1ModerationDismissUserReportsRoute,
  postApiV1ModerationUserDeleteReportedMessagesRoute,
  postApiV1SessionsLogoutMeRoute,
  postApiV1SessionsLogoutRoute,
  postApiV1SettingsAddCustomOAuthRoute,
  postApiV1SettingsIdRoute,
  postApiV1SettingsRefreshOAuthServicesRoute,
  postApiV1SettingsRemoveCustomOAuthRoute,
  postApiV1SettingsRoute,
  postApiV1StartImportRoute,
  postApiV1UploadImportFileRoute,
  postApiV1VideoConferenceAddParticipantsRoute,
  postApiV1VideoConferenceCancelRoute,
  postApiV1VideoConferenceDeclineRoute,
  postApiV1VideoConferenceHeartbeatRoute,
  postApiV1VideoConferenceJoinRoute,
  postApiV1VideoConferenceLeaveRoute,
  postApiV1VideoConferenceRenameRoute,
  postApiV1VideoConferenceRingRoute,
  postApiV1VideoConferenceShareChatRoute,
  postApiV1VideoConferenceStartRoute,
} from './routes'
import {
  getApiV1AuditAuditionsRouteHandler,
  getApiV1CloudRegistrationStatusRouteHandler,
  getApiV1CloudWorkspaceRegisterDataRouteHandler,
  getApiV1E2eFetchMyKeysRouteHandler,
  getApiV1E2eFetchUsersWaitingForGroupKeyRouteHandler,
  getApiV1E2eGetUsersOfRoomWithoutKeyRouteHandler,
  getApiV1GetCurrentImportOperationRouteHandler,
  getApiV1GetImportFileDataRouteHandler,
  getApiV1GetImportProgressRouteHandler,
  getApiV1GetLatestImportOperationsRouteHandler,
  getApiV1ImportersListRouteHandler,
  getApiV1ImportStatusRouteHandler,
  getApiV1InstancesGetRouteHandler,
  getApiV1MediaCallsInfoRouteHandler,
  getApiV1MediaCallsStateRouteHandler,
  getApiV1ModerationReportInfoRouteHandler,
  getApiV1ModerationReportsByUsersRouteHandler,
  getApiV1ModerationReportsRouteHandler,
  getApiV1ModerationUserReportedMessagesRouteHandler,
  getApiV1ModerationUserReportsByUserIdRouteHandler,
  getApiV1ModerationUserReportsRouteHandler,
  getApiV1PwGetPolicyRouteHandler,
  getApiV1ServiceConfigurationsRouteHandler,
  getApiV1SessionsInfoAdminRouteHandler,
  getApiV1SessionsInfoRouteHandler,
  getApiV1SessionsListAllRouteHandler,
  getApiV1SessionsListRouteHandler,
  getApiV1SettingsIdRouteHandler,
  getApiV1SettingsOauthRouteHandler,
  getApiV1SettingsPublicRouteHandler,
  getApiV1SettingsRouteHandler,
  getApiV1SetupWizardParametersRouteHandler,
  getApiV1VideoConferenceCapabilitiesRouteHandler,
  getApiV1VideoConferenceInfoRouteHandler,
  getApiV1VideoConferenceJoinableRouteHandler,
  getApiV1VideoConferenceListRouteHandler,
  getApiV1VideoConferenceProvidersRouteHandler,
  postApiV1AuditMessagesRouteHandler,
  postApiV1AuditOmnichannelMessagesRouteHandler,
  postApiV1CloudConnectWorkspaceRouteHandler,
  postApiV1CloudManualRegisterRouteHandler,
  postApiV1DnsResolveSrvRouteHandler,
  postApiV1DnsResolveTxtRouteHandler,
  postApiV1DownloadPendingAvatarsRouteHandler,
  postApiV1DownloadPendingFilesRouteHandler,
  postApiV1DownloadPublicImportFileRouteHandler,
  postApiV1E2eAcceptSuggestedGroupKeyRouteHandler,
  postApiV1E2eProvideUsersSuggestedGroupKeysRouteHandler,
  postApiV1E2eRejectSuggestedGroupKeyRouteHandler,
  postApiV1E2eRequestSubscriptionKeysRouteHandler,
  postApiV1E2eResetRoomKeyRouteHandler,
  postApiV1E2eSetRoomKeyIDRouteHandler,
  postApiV1E2eSetUserPublicAndPrivateKeysRouteHandler,
  postApiV1E2eUpdateGroupKeyRouteHandler,
  postApiV1ImportAddUsersRouteHandler,
  postApiV1ImportClearRouteHandler,
  postApiV1ImportNewRouteHandler,
  postApiV1ImportRunRouteHandler,
  postApiV1ModerationDismissReportsRouteHandler,
  postApiV1ModerationDismissUserReportsRouteHandler,
  postApiV1ModerationUserDeleteReportedMessagesRouteHandler,
  postApiV1SessionsLogoutMeRouteHandler,
  postApiV1SessionsLogoutRouteHandler,
  postApiV1SettingsAddCustomOAuthRouteHandler,
  postApiV1SettingsIdRouteHandler,
  postApiV1SettingsRefreshOAuthServicesRouteHandler,
  postApiV1SettingsRemoveCustomOAuthRouteHandler,
  postApiV1SettingsRouteHandler,
  postApiV1StartImportRouteHandler,
  postApiV1UploadImportFileRouteHandler,
  postApiV1VideoConferenceAddParticipantsRouteHandler,
  postApiV1VideoConferenceCancelRouteHandler,
  postApiV1VideoConferenceDeclineRouteHandler,
  postApiV1VideoConferenceHeartbeatRouteHandler,
  postApiV1VideoConferenceJoinRouteHandler,
  postApiV1VideoConferenceLeaveRouteHandler,
  postApiV1VideoConferenceRenameRouteHandler,
  postApiV1VideoConferenceRingRouteHandler,
  postApiV1VideoConferenceShareChatRouteHandler,
  postApiV1VideoConferenceStartRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1SettingsPublicRoute, getApiV1SettingsPublicRouteHandler)
  .openapi(getApiV1SettingsOauthRoute, getApiV1SettingsOauthRouteHandler)
  .openapi(getApiV1SettingsRoute, getApiV1SettingsRouteHandler)
  .openapi(postApiV1SettingsRoute, postApiV1SettingsRouteHandler)
  .openapi(postApiV1SettingsAddCustomOAuthRoute, postApiV1SettingsAddCustomOAuthRouteHandler)
  .openapi(postApiV1SettingsRemoveCustomOAuthRoute, postApiV1SettingsRemoveCustomOAuthRouteHandler)
  .openapi(
    postApiV1SettingsRefreshOAuthServicesRoute,
    postApiV1SettingsRefreshOAuthServicesRouteHandler,
  )
  .openapi(postApiV1SettingsIdRoute, postApiV1SettingsIdRouteHandler)
  .openapi(getApiV1SettingsIdRoute, getApiV1SettingsIdRouteHandler)
  .openapi(getApiV1SetupWizardParametersRoute, getApiV1SetupWizardParametersRouteHandler)
  .openapi(getApiV1ServiceConfigurationsRoute, getApiV1ServiceConfigurationsRouteHandler)
  .openapi(postApiV1CloudConnectWorkspaceRoute, postApiV1CloudConnectWorkspaceRouteHandler)
  .openapi(postApiV1CloudManualRegisterRoute, postApiV1CloudManualRegisterRouteHandler)
  .openapi(getApiV1CloudRegistrationStatusRoute, getApiV1CloudRegistrationStatusRouteHandler)
  .openapi(getApiV1CloudWorkspaceRegisterDataRoute, getApiV1CloudWorkspaceRegisterDataRouteHandler)
  .openapi(postApiV1DnsResolveTxtRoute, postApiV1DnsResolveTxtRouteHandler)
  .openapi(postApiV1DnsResolveSrvRoute, postApiV1DnsResolveSrvRouteHandler)
  .openapi(getApiV1E2eFetchMyKeysRoute, getApiV1E2eFetchMyKeysRouteHandler)
  .openapi(
    getApiV1E2eGetUsersOfRoomWithoutKeyRoute,
    getApiV1E2eGetUsersOfRoomWithoutKeyRouteHandler,
  )
  .openapi(postApiV1E2eSetRoomKeyIDRoute, postApiV1E2eSetRoomKeyIDRouteHandler)
  .openapi(
    postApiV1E2eSetUserPublicAndPrivateKeysRoute,
    postApiV1E2eSetUserPublicAndPrivateKeysRouteHandler,
  )
  .openapi(postApiV1E2eUpdateGroupKeyRoute, postApiV1E2eUpdateGroupKeyRouteHandler)
  .openapi(
    postApiV1E2eRequestSubscriptionKeysRoute,
    postApiV1E2eRequestSubscriptionKeysRouteHandler,
  )
  .openapi(
    postApiV1E2eAcceptSuggestedGroupKeyRoute,
    postApiV1E2eAcceptSuggestedGroupKeyRouteHandler,
  )
  .openapi(
    postApiV1E2eRejectSuggestedGroupKeyRoute,
    postApiV1E2eRejectSuggestedGroupKeyRouteHandler,
  )
  .openapi(
    getApiV1E2eFetchUsersWaitingForGroupKeyRoute,
    getApiV1E2eFetchUsersWaitingForGroupKeyRouteHandler,
  )
  .openapi(
    postApiV1E2eProvideUsersSuggestedGroupKeysRoute,
    postApiV1E2eProvideUsersSuggestedGroupKeysRouteHandler,
  )
  .openapi(postApiV1E2eResetRoomKeyRoute, postApiV1E2eResetRoomKeyRouteHandler)
  .openapi(postApiV1UploadImportFileRoute, postApiV1UploadImportFileRouteHandler)
  .openapi(postApiV1DownloadPublicImportFileRoute, postApiV1DownloadPublicImportFileRouteHandler)
  .openapi(postApiV1StartImportRoute, postApiV1StartImportRouteHandler)
  .openapi(getApiV1GetImportFileDataRoute, getApiV1GetImportFileDataRouteHandler)
  .openapi(getApiV1GetImportProgressRoute, getApiV1GetImportProgressRouteHandler)
  .openapi(getApiV1GetLatestImportOperationsRoute, getApiV1GetLatestImportOperationsRouteHandler)
  .openapi(postApiV1DownloadPendingFilesRoute, postApiV1DownloadPendingFilesRouteHandler)
  .openapi(postApiV1DownloadPendingAvatarsRoute, postApiV1DownloadPendingAvatarsRouteHandler)
  .openapi(getApiV1GetCurrentImportOperationRoute, getApiV1GetCurrentImportOperationRouteHandler)
  .openapi(getApiV1ImportersListRoute, getApiV1ImportersListRouteHandler)
  .openapi(postApiV1ImportNewRoute, postApiV1ImportNewRouteHandler)
  .openapi(postApiV1ImportAddUsersRoute, postApiV1ImportAddUsersRouteHandler)
  .openapi(postApiV1ImportRunRoute, postApiV1ImportRunRouteHandler)
  .openapi(getApiV1ImportStatusRoute, getApiV1ImportStatusRouteHandler)
  .openapi(postApiV1ImportClearRoute, postApiV1ImportClearRouteHandler)
  .openapi(getApiV1InstancesGetRoute, getApiV1InstancesGetRouteHandler)
  .openapi(getApiV1ModerationReportsByUsersRoute, getApiV1ModerationReportsByUsersRouteHandler)
  .openapi(
    getApiV1ModerationUserReportedMessagesRoute,
    getApiV1ModerationUserReportedMessagesRouteHandler,
  )
  .openapi(getApiV1ModerationReportsRoute, getApiV1ModerationReportsRouteHandler)
  .openapi(getApiV1ModerationReportInfoRoute, getApiV1ModerationReportInfoRouteHandler)
  .openapi(postApiV1ModerationDismissReportsRoute, postApiV1ModerationDismissReportsRouteHandler)
  .openapi(
    postApiV1ModerationUserDeleteReportedMessagesRoute,
    postApiV1ModerationUserDeleteReportedMessagesRouteHandler,
  )
  .openapi(
    postApiV1ModerationDismissUserReportsRoute,
    postApiV1ModerationDismissUserReportsRouteHandler,
  )
  .openapi(
    getApiV1ModerationUserReportsByUserIdRoute,
    getApiV1ModerationUserReportsByUserIdRouteHandler,
  )
  .openapi(getApiV1ModerationUserReportsRoute, getApiV1ModerationUserReportsRouteHandler)
  .openapi(getApiV1SessionsListRoute, getApiV1SessionsListRouteHandler)
  .openapi(getApiV1SessionsListAllRoute, getApiV1SessionsListAllRouteHandler)
  .openapi(getApiV1SessionsInfoRoute, getApiV1SessionsInfoRouteHandler)
  .openapi(getApiV1SessionsInfoAdminRoute, getApiV1SessionsInfoAdminRouteHandler)
  .openapi(postApiV1SessionsLogoutMeRoute, postApiV1SessionsLogoutMeRouteHandler)
  .openapi(postApiV1SessionsLogoutRoute, postApiV1SessionsLogoutRouteHandler)
  .openapi(getApiV1PwGetPolicyRoute, getApiV1PwGetPolicyRouteHandler)
  .openapi(
    getApiV1VideoConferenceCapabilitiesRoute,
    getApiV1VideoConferenceCapabilitiesRouteHandler,
  )
  .openapi(getApiV1VideoConferenceListRoute, getApiV1VideoConferenceListRouteHandler)
  .openapi(getApiV1VideoConferenceInfoRoute, getApiV1VideoConferenceInfoRouteHandler)
  .openapi(getApiV1VideoConferenceProvidersRoute, getApiV1VideoConferenceProvidersRouteHandler)
  .openapi(postApiV1VideoConferenceStartRoute, postApiV1VideoConferenceStartRouteHandler)
  .openapi(postApiV1VideoConferenceJoinRoute, postApiV1VideoConferenceJoinRouteHandler)
  .openapi(postApiV1VideoConferenceCancelRoute, postApiV1VideoConferenceCancelRouteHandler)
  .openapi(postApiV1VideoConferenceDeclineRoute, postApiV1VideoConferenceDeclineRouteHandler)
  .openapi(postApiV1VideoConferenceLeaveRoute, postApiV1VideoConferenceLeaveRouteHandler)
  .openapi(postApiV1VideoConferenceHeartbeatRoute, postApiV1VideoConferenceHeartbeatRouteHandler)
  .openapi(postApiV1VideoConferenceRingRoute, postApiV1VideoConferenceRingRouteHandler)
  .openapi(
    postApiV1VideoConferenceAddParticipantsRoute,
    postApiV1VideoConferenceAddParticipantsRouteHandler,
  )
  .openapi(postApiV1VideoConferenceRenameRoute, postApiV1VideoConferenceRenameRouteHandler)
  .openapi(postApiV1VideoConferenceShareChatRoute, postApiV1VideoConferenceShareChatRouteHandler)
  .openapi(getApiV1VideoConferenceJoinableRoute, getApiV1VideoConferenceJoinableRouteHandler)
  .openapi(getApiV1MediaCallsStateRoute, getApiV1MediaCallsStateRouteHandler)
  .openapi(getApiV1MediaCallsInfoRoute, getApiV1MediaCallsInfoRouteHandler)
  .openapi(getApiV1AuditAuditionsRoute, getApiV1AuditAuditionsRouteHandler)
  .openapi(postApiV1AuditMessagesRoute, postApiV1AuditMessagesRouteHandler)
  .openapi(postApiV1AuditOmnichannelMessagesRoute, postApiV1AuditOmnichannelMessagesRouteHandler)

export default app
