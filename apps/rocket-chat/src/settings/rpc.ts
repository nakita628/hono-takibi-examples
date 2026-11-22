import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1SettingsPublic(
  args: InferRequestType<(typeof client.api.v1)['settings.public']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['settings.public'].$get(args, options))
}

export async function getApiV1SettingsOauth(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['settings.oauth'].$get(undefined, options))
}

export async function getApiV1Settings(
  args: InferRequestType<typeof client.api.v1.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings.$get(args, options))
}

export async function postApiV1Settings(
  args: InferRequestType<typeof client.api.v1.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings.$post(args, options))
}

export async function postApiV1SettingsAddCustomOAuth(
  args: InferRequestType<(typeof client.api.v1)['settings.addCustomOAuth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['settings.addCustomOAuth'].$post(args, options))
}

export async function postApiV1SettingsRemoveCustomOAuth(
  args: InferRequestType<(typeof client.api.v1)['settings.removeCustomOAuth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['settings.removeCustomOAuth'].$post(args, options))
}

export async function postApiV1SettingsRefreshOAuthServices(
  args: InferRequestType<(typeof client.api.v1)['settings.refreshOAuthServices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['settings.refreshOAuthServices'].$post(args, options))
}

export async function getApiV1SettingsId(
  args: InferRequestType<(typeof client.api.v1.settings)[':_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings[':_id'].$get(args, options))
}

export async function postApiV1SettingsId(
  args: InferRequestType<(typeof client.api.v1.settings)[':_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.settings[':_id'].$post(args, options))
}

export async function getApiV1SetupWizardParameters(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['setupWizard.parameters'].$get(undefined, options))
}

export async function getApiV1ServiceConfigurations(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1['service.configurations'].$get(undefined, options))
}

export async function postApiV1CloudConnectWorkspace(
  args: InferRequestType<(typeof client.api.v1)['cloud.connectWorkspace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['cloud.connectWorkspace'].$post(args, options))
}

export async function postApiV1CloudManualRegister(
  args: InferRequestType<(typeof client.api.v1)['cloud.manualRegister']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['cloud.manualRegister'].$post(args, options))
}

export async function getApiV1CloudRegistrationStatus(
  args: InferRequestType<(typeof client.api.v1)['cloud.registrationStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['cloud.registrationStatus'].$get(args, options))
}

export async function getApiV1CloudWorkspaceRegisterData(
  args: InferRequestType<(typeof client.api.v1)['cloud.workspaceRegisterData']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['cloud.workspaceRegisterData'].$get(args, options))
}

export async function postApiV1DnsResolveTxt(
  args: InferRequestType<(typeof client.api.v1)['dns.resolve.txt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dns.resolve.txt'].$post(args, options))
}

export async function postApiV1DnsResolveSrv(
  args: InferRequestType<(typeof client.api.v1)['dns.resolve.srv']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['dns.resolve.srv'].$post(args, options))
}

export async function getApiV1E2eFetchMyKeys(
  args: InferRequestType<(typeof client.api.v1)['e2e.fetchMyKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.fetchMyKeys'].$get(args, options))
}

export async function getApiV1E2eGetUsersOfRoomWithoutKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.getUsersOfRoomWithoutKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.getUsersOfRoomWithoutKey'].$get(args, options))
}

export async function postApiV1E2eSetRoomKeyID(
  args: InferRequestType<(typeof client.api.v1)['e2e.setRoomKeyID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.setRoomKeyID'].$post(args, options))
}

export async function postApiV1E2eSetUserPublicAndPrivateKeys(
  args: InferRequestType<(typeof client.api.v1)['e2e.setUserPublicAndPrivateKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.setUserPublicAndPrivateKeys'].$post(args, options))
}

export async function postApiV1E2eUpdateGroupKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.updateGroupKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.updateGroupKey'].$post(args, options))
}

export async function postApiV1E2eRequestSubscriptionKeys(
  args: InferRequestType<(typeof client.api.v1)['e2e.requestSubscriptionKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.requestSubscriptionKeys'].$post(args, options))
}

export async function postApiV1E2eAcceptSuggestedGroupKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.acceptSuggestedGroupKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.acceptSuggestedGroupKey'].$post(args, options))
}

export async function postApiV1E2eRejectSuggestedGroupKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.rejectSuggestedGroupKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.rejectSuggestedGroupKey'].$post(args, options))
}

export async function getApiV1E2eFetchUsersWaitingForGroupKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.fetchUsersWaitingForGroupKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.fetchUsersWaitingForGroupKey'].$get(args, options))
}

export async function postApiV1E2eProvideUsersSuggestedGroupKeys(
  args: InferRequestType<(typeof client.api.v1)['e2e.provideUsersSuggestedGroupKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['e2e.provideUsersSuggestedGroupKeys'].$post(args, options),
  )
}

export async function postApiV1E2eResetRoomKey(
  args: InferRequestType<(typeof client.api.v1)['e2e.resetRoomKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['e2e.resetRoomKey'].$post(args, options))
}

export async function postApiV1UploadImportFile(
  args: InferRequestType<typeof client.api.v1.uploadImportFile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.uploadImportFile.$post(args, options))
}

export async function postApiV1DownloadPublicImportFile(
  args: InferRequestType<typeof client.api.v1.downloadPublicImportFile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadPublicImportFile.$post(args, options))
}

export async function postApiV1StartImport(
  args: InferRequestType<typeof client.api.v1.startImport.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.startImport.$post(args, options))
}

export async function getApiV1GetImportFileData(
  args: InferRequestType<typeof client.api.v1.getImportFileData.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.getImportFileData.$get(args, options))
}

export async function getApiV1GetImportProgress(
  args: InferRequestType<typeof client.api.v1.getImportProgress.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.getImportProgress.$get(args, options))
}

export async function getApiV1GetLatestImportOperations(
  args: InferRequestType<typeof client.api.v1.getLatestImportOperations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.getLatestImportOperations.$get(args, options))
}

export async function postApiV1DownloadPendingFiles(
  args: InferRequestType<typeof client.api.v1.downloadPendingFiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadPendingFiles.$post(args, options))
}

export async function postApiV1DownloadPendingAvatars(
  args: InferRequestType<typeof client.api.v1.downloadPendingAvatars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.downloadPendingAvatars.$post(args, options))
}

export async function getApiV1GetCurrentImportOperation(
  args: InferRequestType<typeof client.api.v1.getCurrentImportOperation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.getCurrentImportOperation.$get(args, options))
}

export async function getApiV1ImportersList(
  args: InferRequestType<(typeof client.api.v1)['importers.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['importers.list'].$get(args, options))
}

export async function postApiV1ImportNew(
  args: InferRequestType<(typeof client.api.v1)['import.new']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['import.new'].$post(args, options))
}

export async function postApiV1ImportAddUsers(
  args: InferRequestType<(typeof client.api.v1)['import.addUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['import.addUsers'].$post(args, options))
}

export async function postApiV1ImportRun(
  args: InferRequestType<(typeof client.api.v1)['import.run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['import.run'].$post(args, options))
}

export async function getApiV1ImportStatus(
  args: InferRequestType<(typeof client.api.v1)['import.status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['import.status'].$get(args, options))
}

export async function postApiV1ImportClear(
  args: InferRequestType<(typeof client.api.v1)['import.clear']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['import.clear'].$post(args, options))
}

export async function getApiV1InstancesGet(
  args: InferRequestType<(typeof client.api.v1)['instances.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['instances.get'].$get(args, options))
}

export async function getApiV1ModerationReportsByUsers(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportsByUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.reportsByUsers'].$get(args, options))
}

export async function getApiV1ModerationUserReportedMessages(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.reportedMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.user.reportedMessages'].$get(args, options))
}

export async function getApiV1ModerationReports(
  args: InferRequestType<(typeof client.api.v1)['moderation.reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.reports'].$get(args, options))
}

export async function getApiV1ModerationReportInfo(
  args: InferRequestType<(typeof client.api.v1)['moderation.reportInfo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.reportInfo'].$get(args, options))
}

export async function postApiV1ModerationDismissReports(
  args: InferRequestType<(typeof client.api.v1)['moderation.dismissReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.dismissReports'].$post(args, options))
}

export async function postApiV1ModerationUserDeleteReportedMessages(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.deleteReportedMessages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['moderation.user.deleteReportedMessages'].$post(args, options),
  )
}

export async function postApiV1ModerationDismissUserReports(
  args: InferRequestType<(typeof client.api.v1)['moderation.dismissUserReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.dismissUserReports'].$post(args, options))
}

export async function getApiV1ModerationUserReportsByUserId(
  args: InferRequestType<(typeof client.api.v1)['moderation.user.reportsByUserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.user.reportsByUserId'].$get(args, options))
}

export async function getApiV1ModerationUserReports(
  args: InferRequestType<(typeof client.api.v1)['moderation.userReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['moderation.userReports'].$get(args, options))
}

export async function getApiV1SessionsList(
  args: InferRequestType<typeof client.api.v1.sessions.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sessions.list.$get(args, options))
}

export async function getApiV1SessionsListAll(
  args: InferRequestType<(typeof client.api.v1.sessions)['list.all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sessions['list.all'].$get(args, options))
}

export async function getApiV1SessionsInfo(
  args: InferRequestType<typeof client.api.v1.sessions.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sessions.info.$get(args, options))
}

export async function getApiV1SessionsInfoAdmin(
  args: InferRequestType<(typeof client.api.v1.sessions)['info.admin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sessions['info.admin'].$get(args, options))
}

export async function postApiV1SessionsLogoutMe(
  args: InferRequestType<(typeof client.api.v1.sessions)['logout.me']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sessions['logout.me'].$post(args, options))
}

export async function postApiV1SessionsLogout(
  args: InferRequestType<typeof client.api.v1.sessions.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.sessions.logout.$post(args, options))
}

export async function getApiV1PwGetPolicy(
  args: InferRequestType<(typeof client.api.v1)['pw.getPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['pw.getPolicy'].$get(args, options))
}

export async function getApiV1VideoConferenceCapabilities(
  args: InferRequestType<(typeof client.api.v1)['video-conference.capabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.capabilities'].$get(args, options))
}

export async function getApiV1VideoConferenceList(
  args: InferRequestType<(typeof client.api.v1)['video-conference.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.list'].$get(args, options))
}

export async function getApiV1VideoConferenceInfo(
  args: InferRequestType<(typeof client.api.v1)['video-conference.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.info'].$get(args, options))
}

export async function getApiV1VideoConferenceProviders(
  args: InferRequestType<(typeof client.api.v1)['video-conference.providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.providers'].$get(args, options))
}

export async function postApiV1VideoConferenceStart(
  args: InferRequestType<(typeof client.api.v1)['video-conference.start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.start'].$post(args, options))
}

export async function postApiV1VideoConferenceJoin(
  args: InferRequestType<(typeof client.api.v1)['video-conference.join']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.join'].$post(args, options))
}

export async function postApiV1VideoConferenceCancel(
  args: InferRequestType<(typeof client.api.v1)['video-conference.cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.cancel'].$post(args, options))
}

export async function postApiV1VideoConferenceDecline(
  args: InferRequestType<(typeof client.api.v1)['video-conference.decline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.decline'].$post(args, options))
}

export async function postApiV1VideoConferenceLeave(
  args: InferRequestType<(typeof client.api.v1)['video-conference.leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.leave'].$post(args, options))
}

export async function postApiV1VideoConferenceHeartbeat(
  args: InferRequestType<(typeof client.api.v1)['video-conference.heartbeat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.heartbeat'].$post(args, options))
}

export async function postApiV1VideoConferenceRing(
  args: InferRequestType<(typeof client.api.v1)['video-conference.ring']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.ring'].$post(args, options))
}

export async function postApiV1VideoConferenceAddParticipants(
  args: InferRequestType<(typeof client.api.v1)['video-conference.add-participants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1['video-conference.add-participants'].$post(args, options),
  )
}

export async function postApiV1VideoConferenceRename(
  args: InferRequestType<(typeof client.api.v1)['video-conference.rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.rename'].$post(args, options))
}

export async function postApiV1VideoConferenceShareChat(
  args: InferRequestType<(typeof client.api.v1)['video-conference.share-chat']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.share-chat'].$post(args, options))
}

export async function getApiV1VideoConferenceJoinable(
  args: InferRequestType<(typeof client.api.v1)['video-conference.joinable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['video-conference.joinable'].$get(args, options))
}

export async function getApiV1MediaCallsState(
  args: InferRequestType<(typeof client.api.v1)['media-calls.state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['media-calls.state'].$get(args, options))
}

export async function getApiV1MediaCallsInfo(
  args: InferRequestType<(typeof client.api.v1)['media-calls.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['media-calls.info'].$get(args, options))
}

export async function getApiV1AuditAuditions(
  args: InferRequestType<(typeof client.api.v1)['audit.auditions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['audit.auditions'].$get(args, options))
}

export async function postApiV1AuditMessages(
  args: InferRequestType<(typeof client.api.v1)['audit.messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['audit.messages'].$post(args, options))
}

export async function postApiV1AuditOmnichannelMessages(
  args: InferRequestType<(typeof client.api.v1)['audit.omnichannelMessages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1['audit.omnichannelMessages'].$post(args, options))
}
