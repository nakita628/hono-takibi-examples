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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1SettingsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsAddCustomOAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsRemoveCustomOAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsRefreshOAuthServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SetupWizardParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServiceConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CloudConnectWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CloudManualRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CloudRegistrationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CloudWorkspaceRegisterDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DnsResolveTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DnsResolveSrvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1E2eFetchMyKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1E2eGetUsersOfRoomWithoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eSetRoomKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eSetUserPublicAndPrivateKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eUpdateGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eRequestSubscriptionKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eAcceptSuggestedGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eRejectSuggestedGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1E2eFetchUsersWaitingForGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eProvideUsersSuggestedGroupKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1E2eResetRoomKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UploadImportFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadPublicImportFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StartImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GetImportFileDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GetImportProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GetLatestImportOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadPendingFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DownloadPendingAvatarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GetCurrentImportOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportAddUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstancesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationReportsByUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationUserReportedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationReportInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ModerationDismissReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ModerationUserDeleteReportedMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ModerationDismissUserReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationUserReportsByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ModerationUserReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SessionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SessionsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SessionsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SessionsInfoAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SessionsLogoutMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PwGetPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceRingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceAddParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceShareChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceJoinableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediaCallsStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediaCallsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AuditAuditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuditMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuditOmnichannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
