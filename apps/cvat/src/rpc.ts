import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiAssets(
  args: InferRequestType<typeof client.api.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets.$post(args, options))
}

export async function getApiAssetsUuid(
  args: InferRequestType<(typeof client.api.assets)[':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets[':uuid'].$get(args, options))
}

export async function deleteApiAssetsUuid(
  args: InferRequestType<(typeof client.api.assets)[':uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.assets[':uuid'].$delete(args, options))
}

export async function getApiAuthAccessTokens(
  args: InferRequestType<typeof client.api.auth.access_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.access_tokens.$get(args, options))
}

export async function postApiAuthAccessTokens(
  args: InferRequestType<typeof client.api.auth.access_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.access_tokens.$post(args, options))
}

export async function getApiAuthAccessTokensId(
  args: InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.access_tokens[':id'].$get(args, options))
}

export async function deleteApiAuthAccessTokensId(
  args: InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.access_tokens[':id'].$delete(args, options))
}

export async function patchApiAuthAccessTokensId(
  args: InferRequestType<(typeof client.api.auth.access_tokens)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.access_tokens[':id'].$patch(args, options))
}

export async function getApiAuthAccessTokensSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth.access_tokens.self.$get(undefined, options))
}

export async function postApiAuthLogin(
  args: InferRequestType<typeof client.api.auth.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.login.$post(args, options))
}

export async function postApiAuthLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth.logout.$post(undefined, options))
}

export async function postApiAuthPasswordChange(
  args: InferRequestType<typeof client.api.auth.password.change.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.password.change.$post(args, options))
}

export async function postApiAuthPasswordReset(
  args: InferRequestType<typeof client.api.auth.password.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.password.reset.$post(args, options))
}

export async function postApiAuthPasswordResetConfirm(
  args: InferRequestType<typeof client.api.auth.password.reset.confirm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.password.reset.confirm.$post(args, options))
}

export async function postApiAuthRegister(
  args: InferRequestType<typeof client.api.auth.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.auth.register.$post(args, options))
}

export async function getApiAuthRules(options?: ClientRequestOptions) {
  return await parseResponse(client.api.auth.rules.$get(undefined, options))
}

export async function getApiCloudstorages(
  args: InferRequestType<typeof client.api.cloudstorages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages.$get(args, options))
}

export async function postApiCloudstorages(
  args: InferRequestType<typeof client.api.cloudstorages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages.$post(args, options))
}

export async function getApiCloudstoragesId(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages[':id'].$get(args, options))
}

export async function deleteApiCloudstoragesId(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages[':id'].$delete(args, options))
}

export async function patchApiCloudstoragesId(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages[':id'].$patch(args, options))
}

export async function getApiCloudstoragesIdActions(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages[':id'].actions.$get(args, options))
}

export async function getApiCloudstoragesIdContentV2(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['content-v2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages[':id']['content-v2'].$get(args, options))
}

export async function getApiCloudstoragesIdPreview(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages[':id'].preview.$get(args, options))
}

export async function getApiCloudstoragesIdStatus(
  args: InferRequestType<(typeof client.api.cloudstorages)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.cloudstorages[':id'].status.$get(args, options))
}

export async function getApiComments(
  args: InferRequestType<typeof client.api.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments.$get(args, options))
}

export async function postApiComments(
  args: InferRequestType<typeof client.api.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments.$post(args, options))
}

export async function getApiCommentsId(
  args: InferRequestType<(typeof client.api.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments[':id'].$get(args, options))
}

export async function deleteApiCommentsId(
  args: InferRequestType<(typeof client.api.comments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments[':id'].$delete(args, options))
}

export async function patchApiCommentsId(
  args: InferRequestType<(typeof client.api.comments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comments[':id'].$patch(args, options))
}

export async function postApiConsensusMerges(
  args: InferRequestType<typeof client.api.consensus.merges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consensus.merges.$post(args, options))
}

export async function getApiConsensusSettings(
  args: InferRequestType<typeof client.api.consensus.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consensus.settings.$get(args, options))
}

export async function getApiConsensusSettingsId(
  args: InferRequestType<(typeof client.api.consensus.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consensus.settings[':id'].$get(args, options))
}

export async function patchApiConsensusSettingsId(
  args: InferRequestType<(typeof client.api.consensus.settings)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consensus.settings[':id'].$patch(args, options))
}

export async function getApiEvents(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.events.$get(args, options))
}

export async function postApiEvents(
  args: InferRequestType<typeof client.api.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.events.$post(args, options))
}

export async function postApiEventsExport(
  args: InferRequestType<typeof client.api.events.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.events.export.$post(args, options))
}

export async function getApiGrowth(
  args: InferRequestType<typeof client.api.growth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.growth.$get(args, options))
}

export async function getApiGrowthId(
  args: InferRequestType<(typeof client.api.growth)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.growth[':id'].$get(args, options))
}

export async function patchApiGrowthId(
  args: InferRequestType<(typeof client.api.growth)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.growth[':id'].$patch(args, options))
}

export async function postApiGuides(
  args: InferRequestType<typeof client.api.guides.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.guides.$post(args, options))
}

export async function getApiGuidesId(
  args: InferRequestType<(typeof client.api.guides)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.guides[':id'].$get(args, options))
}

export async function deleteApiGuidesId(
  args: InferRequestType<(typeof client.api.guides)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.guides[':id'].$delete(args, options))
}

export async function patchApiGuidesId(
  args: InferRequestType<(typeof client.api.guides)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.guides[':id'].$patch(args, options))
}

export async function getApiInvitations(
  args: InferRequestType<typeof client.api.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invitations.$get(args, options))
}

export async function postApiInvitations(
  args: InferRequestType<typeof client.api.invitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invitations.$post(args, options))
}

export async function getApiInvitationsKey(
  args: InferRequestType<(typeof client.api.invitations)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invitations[':key'].$get(args, options))
}

export async function deleteApiInvitationsKey(
  args: InferRequestType<(typeof client.api.invitations)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invitations[':key'].$delete(args, options))
}

export async function postApiInvitationsKeyAccept(
  args: InferRequestType<(typeof client.api.invitations)[':key']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invitations[':key'].accept.$post(args, options))
}

export async function postApiInvitationsKeyDecline(
  args: InferRequestType<(typeof client.api.invitations)[':key']['decline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invitations[':key'].decline.$post(args, options))
}

export async function postApiInvitationsKeyResend(
  args: InferRequestType<(typeof client.api.invitations)[':key']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.invitations[':key'].resend.$post(args, options))
}

export async function getApiIssues(
  args: InferRequestType<typeof client.api.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.issues.$get(args, options))
}

export async function postApiIssues(
  args: InferRequestType<typeof client.api.issues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.issues.$post(args, options))
}

export async function getApiIssuesId(
  args: InferRequestType<(typeof client.api.issues)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.issues[':id'].$get(args, options))
}

export async function deleteApiIssuesId(
  args: InferRequestType<(typeof client.api.issues)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.issues[':id'].$delete(args, options))
}

export async function patchApiIssuesId(
  args: InferRequestType<(typeof client.api.issues)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.issues[':id'].$patch(args, options))
}

export async function getApiJobs(
  args: InferRequestType<typeof client.api.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs.$get(args, options))
}

export async function postApiJobs(
  args: InferRequestType<typeof client.api.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs.$post(args, options))
}

export async function getApiJobsId(
  args: InferRequestType<(typeof client.api.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].$get(args, options))
}

export async function deleteApiJobsId(
  args: InferRequestType<(typeof client.api.jobs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].$delete(args, options))
}

export async function patchApiJobsId(
  args: InferRequestType<(typeof client.api.jobs)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].$patch(args, options))
}

export async function getApiJobsIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].annotations.index.$get(args, options))
}

export async function putApiJobsIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].annotations.index.$put(args, options))
}

export async function postApiJobsIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].annotations.index.$post(args, options))
}

export async function deleteApiJobsIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].annotations.index.$delete(args, options))
}

export async function patchApiJobsIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.jobs)[':id']['annotations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].annotations.index.$patch(args, options))
}

export async function getApiJobsIdData(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].data.$get(args, options))
}

export async function getApiJobsIdDataMeta(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].data.meta.$get(args, options))
}

export async function patchApiJobsIdDataMeta(
  args: InferRequestType<(typeof client.api.jobs)[':id']['data']['meta']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].data.meta.$patch(args, options))
}

export async function postApiJobsIdDatasetExport(
  args: InferRequestType<(typeof client.api.jobs)[':id']['dataset']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].dataset.export.$post(args, options))
}

export async function getApiJobsIdPreview(
  args: InferRequestType<(typeof client.api.jobs)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].preview.$get(args, options))
}

export async function getApiJobsIdValidationLayout(
  args: InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].validation_layout.$get(args, options))
}

export async function patchApiJobsIdValidationLayout(
  args: InferRequestType<(typeof client.api.jobs)[':id']['validation_layout']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.jobs[':id'].validation_layout.$patch(args, options))
}

export async function getApiLabels(
  args: InferRequestType<typeof client.api.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.labels.$get(args, options))
}

export async function getApiLabelsId(
  args: InferRequestType<(typeof client.api.labels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.labels[':id'].$get(args, options))
}

export async function deleteApiLabelsId(
  args: InferRequestType<(typeof client.api.labels)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.labels[':id'].$delete(args, options))
}

export async function patchApiLabelsId(
  args: InferRequestType<(typeof client.api.labels)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.labels[':id'].$patch(args, options))
}

export async function getApiLambdaFunctions(options?: ClientRequestOptions) {
  return await parseResponse(client.api.lambda.functions.$get(undefined, options))
}

export async function getApiLambdaFunctionsFuncId(
  args: InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda.functions[':func_id'].$get(args, options))
}

export async function postApiLambdaFunctionsFuncId(
  args: InferRequestType<(typeof client.api.lambda.functions)[':func_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda.functions[':func_id'].$post(args, options))
}

export async function getApiLambdaRequests(options?: ClientRequestOptions) {
  return await parseResponse(client.api.lambda.requests.$get(undefined, options))
}

export async function postApiLambdaRequests(
  args: InferRequestType<typeof client.api.lambda.requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda.requests.$post(args, options))
}

export async function getApiLambdaRequestsId(
  args: InferRequestType<(typeof client.api.lambda.requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda.requests[':id'].$get(args, options))
}

export async function deleteApiLambdaRequestsId(
  args: InferRequestType<(typeof client.api.lambda.requests)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lambda.requests[':id'].$delete(args, options))
}

export async function getApiMemberships(
  args: InferRequestType<typeof client.api.memberships.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memberships.$get(args, options))
}

export async function getApiMembershipsId(
  args: InferRequestType<(typeof client.api.memberships)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memberships[':id'].$get(args, options))
}

export async function deleteApiMembershipsId(
  args: InferRequestType<(typeof client.api.memberships)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memberships[':id'].$delete(args, options))
}

export async function patchApiMembershipsId(
  args: InferRequestType<(typeof client.api.memberships)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.memberships[':id'].$patch(args, options))
}

export async function getApiOrganizations(
  args: InferRequestType<typeof client.api.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations.$get(args, options))
}

export async function postApiOrganizations(
  args: InferRequestType<typeof client.api.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations.$post(args, options))
}

export async function getApiOrganizationsId(
  args: InferRequestType<(typeof client.api.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':id'].$get(args, options))
}

export async function deleteApiOrganizationsId(
  args: InferRequestType<(typeof client.api.organizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':id'].$delete(args, options))
}

export async function patchApiOrganizationsId(
  args: InferRequestType<(typeof client.api.organizations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.organizations[':id'].$patch(args, options))
}

export async function getApiProjects(
  args: InferRequestType<typeof client.api.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects.$get(args, options))
}

export async function postApiProjects(
  args: InferRequestType<typeof client.api.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects.$post(args, options))
}

export async function getApiProjectsId(
  args: InferRequestType<(typeof client.api.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects[':id'].$get(args, options))
}

export async function deleteApiProjectsId(
  args: InferRequestType<(typeof client.api.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects[':id'].$delete(args, options))
}

export async function patchApiProjectsId(
  args: InferRequestType<(typeof client.api.projects)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects[':id'].$patch(args, options))
}

export async function postApiProjectsIdBackupExport(
  args: InferRequestType<(typeof client.api.projects)[':id']['backup']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects[':id'].backup.export.$post(args, options))
}

export async function postApiProjectsIdDatasetIndex(
  args: InferRequestType<(typeof client.api.projects)[':id']['dataset']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects[':id'].dataset.index.$post(args, options))
}

export async function postApiProjectsIdDatasetExport(
  args: InferRequestType<(typeof client.api.projects)[':id']['dataset']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects[':id'].dataset.export.$post(args, options))
}

export async function getApiProjectsIdPreview(
  args: InferRequestType<(typeof client.api.projects)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects[':id'].preview.$get(args, options))
}

export async function postApiProjectsBackupIndex(
  args: InferRequestType<typeof client.api.projects.backup.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.projects.backup.index.$post(args, options))
}

export async function getApiQualityConflicts(
  args: InferRequestType<typeof client.api.quality.conflicts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.conflicts.$get(args, options))
}

export async function getApiQualityReports(
  args: InferRequestType<typeof client.api.quality.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.reports.$get(args, options))
}

export async function postApiQualityReports(
  args: InferRequestType<typeof client.api.quality.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.reports.$post(args, options))
}

export async function getApiQualityReportsId(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.reports[':id'].$get(args, options))
}

export async function getApiQualityReportsIdConfusion(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.reports[':id'].confusion.$get(args, options))
}

export async function getApiQualityReportsIdConfusionMatrix(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['confusion']['matrix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.reports[':id'].confusion.matrix.$get(args, options))
}

export async function getApiQualityReportsIdData(
  args: InferRequestType<(typeof client.api.quality.reports)[':id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.reports[':id'].data.$get(args, options))
}

export async function getApiQualitySettings(
  args: InferRequestType<typeof client.api.quality.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings.$get(args, options))
}

export async function getApiQualitySettingsId(
  args: InferRequestType<(typeof client.api.quality.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings[':id'].$get(args, options))
}

export async function putApiQualitySettingsId(
  args: InferRequestType<(typeof client.api.quality.settings)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings[':id'].$put(args, options))
}

export async function patchApiQualitySettingsId(
  args: InferRequestType<(typeof client.api.quality.settings)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings[':id'].$patch(args, options))
}

export async function getApiQualitySettingsRequirements(
  args: InferRequestType<typeof client.api.quality.settings.requirements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings.requirements.$get(args, options))
}

export async function postApiQualitySettingsRequirements(
  args: InferRequestType<typeof client.api.quality.settings.requirements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings.requirements.$post(args, options))
}

export async function getApiQualitySettingsRequirementsId(
  args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings.requirements[':id'].$get(args, options))
}

export async function putApiQualitySettingsRequirementsId(
  args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings.requirements[':id'].$put(args, options))
}

export async function deleteApiQualitySettingsRequirementsId(
  args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings.requirements[':id'].$delete(args, options))
}

export async function patchApiQualitySettingsRequirementsId(
  args: InferRequestType<(typeof client.api.quality.settings.requirements)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings.requirements[':id'].$patch(args, options))
}

export async function postApiQualitySettingsRequirementsBulk(
  args: InferRequestType<typeof client.api.quality.settings.requirements.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.quality.settings.requirements.bulk.$post(args, options))
}

export async function getApiRequests(
  args: InferRequestType<typeof client.api.requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.requests.$get(args, options))
}

export async function getApiRequestsId(
  args: InferRequestType<(typeof client.api.requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.requests[':id'].$get(args, options))
}

export async function postApiRequestsIdCancel(
  args: InferRequestType<(typeof client.api.requests)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.requests[':id'].cancel.$post(args, options))
}

export async function getApiSchemaIndex(
  args: InferRequestType<typeof client.api.schema.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.schema.index.$get(args, options))
}

export async function getApiServerAbout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.server.about.$get(undefined, options))
}

export async function getApiServerAnnotationFormats(options?: ClientRequestOptions) {
  return await parseResponse(client.api.server.annotation.formats.$get(undefined, options))
}

export async function getApiServerPlugins(options?: ClientRequestOptions) {
  return await parseResponse(client.api.server.plugins.$get(undefined, options))
}

export async function getApiServerShare(
  args: InferRequestType<typeof client.api.server.share.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.server.share.$get(args, options))
}

export async function getApiTasks(
  args: InferRequestType<typeof client.api.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks.$get(args, options))
}

export async function postApiTasks(
  args: InferRequestType<typeof client.api.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks.$post(args, options))
}

export async function getApiTasksId(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].$get(args, options))
}

export async function deleteApiTasksId(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].$delete(args, options))
}

export async function patchApiTasksId(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].$patch(args, options))
}

export async function getApiTasksIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].annotations.index.$get(args, options))
}

export async function putApiTasksIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].annotations.index.$put(args, options))
}

export async function postApiTasksIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].annotations.index.$post(args, options))
}

export async function deleteApiTasksIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].annotations.index.$delete(args, options))
}

export async function patchApiTasksIdAnnotationsIndex(
  args: InferRequestType<(typeof client.api.tasks)[':id']['annotations']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].annotations.index.$patch(args, options))
}

export async function postApiTasksIdBackupExport(
  args: InferRequestType<(typeof client.api.tasks)[':id']['backup']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].backup.export.$post(args, options))
}

export async function getApiTasksIdDataIndex(
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].data.index.$get(args, options))
}

export async function postApiTasksIdDataIndex(
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].data.index.$post(args, options))
}

export async function getApiTasksIdDataMeta(
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].data.meta.$get(args, options))
}

export async function patchApiTasksIdDataMeta(
  args: InferRequestType<(typeof client.api.tasks)[':id']['data']['meta']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].data.meta.$patch(args, options))
}

export async function postApiTasksIdDatasetExport(
  args: InferRequestType<(typeof client.api.tasks)[':id']['dataset']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].dataset.export.$post(args, options))
}

export async function getApiTasksIdPreview(
  args: InferRequestType<(typeof client.api.tasks)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].preview.$get(args, options))
}

export async function getApiTasksIdStatus(
  args: InferRequestType<(typeof client.api.tasks)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].status.$get(args, options))
}

export async function getApiTasksIdValidationLayout(
  args: InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].validation_layout.$get(args, options))
}

export async function patchApiTasksIdValidationLayout(
  args: InferRequestType<(typeof client.api.tasks)[':id']['validation_layout']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].validation_layout.$patch(args, options))
}

export async function postApiTasksBackupIndex(
  args: InferRequestType<typeof client.api.tasks.backup.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks.backup.index.$post(args, options))
}

export async function getApiUsers(
  args: InferRequestType<typeof client.api.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.$get(args, options))
}

export async function getApiUsersId(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].$get(args, options))
}

export async function deleteApiUsersId(
  args: InferRequestType<(typeof client.api.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].$delete(args, options))
}

export async function patchApiUsersId(
  args: InferRequestType<(typeof client.api.users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].$patch(args, options))
}

export async function getApiUsersSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.api.users.self.$get(undefined, options))
}

export async function getApiWebhooks(
  args: InferRequestType<typeof client.api.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks.$get(args, options))
}

export async function postApiWebhooks(
  args: InferRequestType<typeof client.api.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks.$post(args, options))
}

export async function getApiWebhooksId(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':id'].$get(args, options))
}

export async function putApiWebhooksId(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':id'].$put(args, options))
}

export async function deleteApiWebhooksId(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':id'].$delete(args, options))
}

export async function patchApiWebhooksId(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':id'].$patch(args, options))
}

export async function getApiWebhooksIdDeliveries(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['deliveries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':id'].deliveries.$get(args, options))
}

export async function getApiWebhooksIdDeliveriesDeliveryId(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.webhooks[':id'].deliveries[':delivery_id'].$get(args, options),
  )
}

export async function postApiWebhooksIdDeliveriesDeliveryIdRedelivery(
  args: InferRequestType<
    (typeof client.api.webhooks)[':id']['deliveries'][':delivery_id']['redelivery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.webhooks[':id'].deliveries[':delivery_id'].redelivery.$post(args, options),
  )
}

export async function postApiWebhooksIdPing(
  args: InferRequestType<(typeof client.api.webhooks)[':id']['ping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks[':id'].ping.$post(args, options))
}

export async function getApiWebhooksEvents(
  args: InferRequestType<typeof client.api.webhooks.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.webhooks.events.$get(args, options))
}
