import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiV1SettingsPublicRouteHandler: RouteHandler<
  typeof getApiV1SettingsPublicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SettingsOauthRouteHandler: RouteHandler<
  typeof getApiV1SettingsOauthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SettingsRouteHandler: RouteHandler<typeof getApiV1SettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1SettingsRouteHandler: RouteHandler<typeof postApiV1SettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1SettingsAddCustomOAuthRouteHandler: RouteHandler<
  typeof postApiV1SettingsAddCustomOAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SettingsRemoveCustomOAuthRouteHandler: RouteHandler<
  typeof postApiV1SettingsRemoveCustomOAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SettingsRefreshOAuthServicesRouteHandler: RouteHandler<
  typeof postApiV1SettingsRefreshOAuthServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SettingsIdRouteHandler: RouteHandler<
  typeof postApiV1SettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SettingsIdRouteHandler: RouteHandler<typeof getApiV1SettingsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1SetupWizardParametersRouteHandler: RouteHandler<
  typeof getApiV1SetupWizardParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ServiceConfigurationsRouteHandler: RouteHandler<
  typeof getApiV1ServiceConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CloudConnectWorkspaceRouteHandler: RouteHandler<
  typeof postApiV1CloudConnectWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CloudManualRegisterRouteHandler: RouteHandler<
  typeof postApiV1CloudManualRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CloudRegistrationStatusRouteHandler: RouteHandler<
  typeof getApiV1CloudRegistrationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CloudWorkspaceRegisterDataRouteHandler: RouteHandler<
  typeof getApiV1CloudWorkspaceRegisterDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DnsResolveTxtRouteHandler: RouteHandler<
  typeof postApiV1DnsResolveTxtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DnsResolveSrvRouteHandler: RouteHandler<
  typeof postApiV1DnsResolveSrvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1E2eFetchMyKeysRouteHandler: RouteHandler<
  typeof getApiV1E2eFetchMyKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1E2eGetUsersOfRoomWithoutKeyRouteHandler: RouteHandler<
  typeof getApiV1E2eGetUsersOfRoomWithoutKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1E2eSetRoomKeyIDRouteHandler: RouteHandler<
  typeof postApiV1E2eSetRoomKeyIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1E2eSetUserPublicAndPrivateKeysRouteHandler: RouteHandler<
  typeof postApiV1E2eSetUserPublicAndPrivateKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1E2eUpdateGroupKeyRouteHandler: RouteHandler<
  typeof postApiV1E2eUpdateGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1E2eRequestSubscriptionKeysRouteHandler: RouteHandler<
  typeof postApiV1E2eRequestSubscriptionKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1E2eAcceptSuggestedGroupKeyRouteHandler: RouteHandler<
  typeof postApiV1E2eAcceptSuggestedGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1E2eRejectSuggestedGroupKeyRouteHandler: RouteHandler<
  typeof postApiV1E2eRejectSuggestedGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1E2eFetchUsersWaitingForGroupKeyRouteHandler: RouteHandler<
  typeof getApiV1E2eFetchUsersWaitingForGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1E2eProvideUsersSuggestedGroupKeysRouteHandler: RouteHandler<
  typeof postApiV1E2eProvideUsersSuggestedGroupKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1E2eResetRoomKeyRouteHandler: RouteHandler<
  typeof postApiV1E2eResetRoomKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UploadImportFileRouteHandler: RouteHandler<
  typeof postApiV1UploadImportFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DownloadPublicImportFileRouteHandler: RouteHandler<
  typeof postApiV1DownloadPublicImportFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1StartImportRouteHandler: RouteHandler<
  typeof postApiV1StartImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GetImportFileDataRouteHandler: RouteHandler<
  typeof getApiV1GetImportFileDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GetImportProgressRouteHandler: RouteHandler<
  typeof getApiV1GetImportProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GetLatestImportOperationsRouteHandler: RouteHandler<
  typeof getApiV1GetLatestImportOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DownloadPendingFilesRouteHandler: RouteHandler<
  typeof postApiV1DownloadPendingFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1DownloadPendingAvatarsRouteHandler: RouteHandler<
  typeof postApiV1DownloadPendingAvatarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GetCurrentImportOperationRouteHandler: RouteHandler<
  typeof getApiV1GetCurrentImportOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ImportersListRouteHandler: RouteHandler<
  typeof getApiV1ImportersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ImportNewRouteHandler: RouteHandler<typeof postApiV1ImportNewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1ImportAddUsersRouteHandler: RouteHandler<
  typeof postApiV1ImportAddUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ImportRunRouteHandler: RouteHandler<typeof postApiV1ImportRunRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ImportStatusRouteHandler: RouteHandler<
  typeof getApiV1ImportStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ImportClearRouteHandler: RouteHandler<
  typeof postApiV1ImportClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstancesGetRouteHandler: RouteHandler<
  typeof getApiV1InstancesGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ModerationReportsByUsersRouteHandler: RouteHandler<
  typeof getApiV1ModerationReportsByUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ModerationUserReportedMessagesRouteHandler: RouteHandler<
  typeof getApiV1ModerationUserReportedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ModerationReportsRouteHandler: RouteHandler<
  typeof getApiV1ModerationReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ModerationReportInfoRouteHandler: RouteHandler<
  typeof getApiV1ModerationReportInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ModerationDismissReportsRouteHandler: RouteHandler<
  typeof postApiV1ModerationDismissReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ModerationUserDeleteReportedMessagesRouteHandler: RouteHandler<
  typeof postApiV1ModerationUserDeleteReportedMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ModerationDismissUserReportsRouteHandler: RouteHandler<
  typeof postApiV1ModerationDismissUserReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ModerationUserReportsByUserIdRouteHandler: RouteHandler<
  typeof getApiV1ModerationUserReportsByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ModerationUserReportsRouteHandler: RouteHandler<
  typeof getApiV1ModerationUserReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SessionsListRouteHandler: RouteHandler<
  typeof getApiV1SessionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SessionsListAllRouteHandler: RouteHandler<
  typeof getApiV1SessionsListAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SessionsInfoRouteHandler: RouteHandler<
  typeof getApiV1SessionsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SessionsInfoAdminRouteHandler: RouteHandler<
  typeof getApiV1SessionsInfoAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SessionsLogoutMeRouteHandler: RouteHandler<
  typeof postApiV1SessionsLogoutMeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SessionsLogoutRouteHandler: RouteHandler<
  typeof postApiV1SessionsLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PwGetPolicyRouteHandler: RouteHandler<
  typeof getApiV1PwGetPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoConferenceCapabilitiesRouteHandler: RouteHandler<
  typeof getApiV1VideoConferenceCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoConferenceListRouteHandler: RouteHandler<
  typeof getApiV1VideoConferenceListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoConferenceInfoRouteHandler: RouteHandler<
  typeof getApiV1VideoConferenceInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoConferenceProvidersRouteHandler: RouteHandler<
  typeof getApiV1VideoConferenceProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceStartRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceJoinRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceJoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceCancelRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceDeclineRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceLeaveRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceHeartbeatRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceRingRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceRingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceAddParticipantsRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceAddParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceRenameRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1VideoConferenceShareChatRouteHandler: RouteHandler<
  typeof postApiV1VideoConferenceShareChatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VideoConferenceJoinableRouteHandler: RouteHandler<
  typeof getApiV1VideoConferenceJoinableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MediaCallsStateRouteHandler: RouteHandler<
  typeof getApiV1MediaCallsStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MediaCallsInfoRouteHandler: RouteHandler<
  typeof getApiV1MediaCallsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AuditAuditionsRouteHandler: RouteHandler<
  typeof getApiV1AuditAuditionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AuditMessagesRouteHandler: RouteHandler<
  typeof postApiV1AuditMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AuditOmnichannelMessagesRouteHandler: RouteHandler<
  typeof postApiV1AuditOmnichannelMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
