import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReposOwnerRepoActionsArtifactsArtifactIdRoute,
  deleteReposOwnerRepoActionsRunnersRunnerIdRoute,
  deleteReposOwnerRepoActionsRunsRunRoute,
  deleteReposOwnerRepoActionsSecretsSecretnameRoute,
  deleteReposOwnerRepoActionsVariablesVariablenameRoute,
  deleteReposOwnerRepoAvatarRoute,
  deleteReposOwnerRepoBranchesBranchRoute,
  deleteReposOwnerRepoBranchProtectionsNameRoute,
  deleteReposOwnerRepoCollaboratorsCollaboratorRoute,
  deleteReposOwnerRepoContentsFilepathRoute,
  deleteReposOwnerRepoHooksGitIdRoute,
  deleteReposOwnerRepoHooksIdRoute,
  deleteReposOwnerRepoKeysIdRoute,
  deleteReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueIdRoute,
  deleteReposOwnerRepoProjectsIdColumnsColumnIdRoute,
  deleteReposOwnerRepoProjectsIdRoute,
  deleteReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute,
  deleteReposOwnerRepoPullsIndexMergeRoute,
  deleteReposOwnerRepoPullsIndexRequestedReviewersRoute,
  deleteReposOwnerRepoPullsIndexReviewsIdRoute,
  deleteReposOwnerRepoPushMirrorsNameRoute,
  deleteReposOwnerRepoReleasesIdAssetsAttachmentIdRoute,
  deleteReposOwnerRepoReleasesIdRoute,
  deleteReposOwnerRepoReleasesTagsTagRoute,
  deleteReposOwnerRepoRoute,
  deleteReposOwnerRepoSubscriptionRoute,
  deleteReposOwnerRepoTagProtectionsIdRoute,
  deleteReposOwnerRepoTagsTagRoute,
  deleteReposOwnerRepoTeamsTeamRoute,
  deleteReposOwnerRepoTopicsTopicRoute,
  deleteReposOwnerRepoWikiPagePageNameRoute,
  getRepositoriesIdRoute,
  getReposOwnerRepoActionsArtifactsArtifactIdRoute,
  getReposOwnerRepoActionsArtifactsArtifactIdZipRoute,
  getReposOwnerRepoActionsArtifactsRoute,
  getReposOwnerRepoActionsJobsJobIdLogsRoute,
  getReposOwnerRepoActionsJobsJobIdRoute,
  getReposOwnerRepoActionsJobsRoute,
  getReposOwnerRepoActionsRunnersRoute,
  getReposOwnerRepoActionsRunnersRunnerIdRoute,
  getReposOwnerRepoActionsRunsRoute,
  getReposOwnerRepoActionsRunsRunArtifactsRoute,
  getReposOwnerRepoActionsRunsRunAttemptsAttemptJobsRoute,
  getReposOwnerRepoActionsRunsRunAttemptsAttemptRoute,
  getReposOwnerRepoActionsRunsRunJobsRoute,
  getReposOwnerRepoActionsRunsRunLogsRoute,
  getReposOwnerRepoActionsRunsRunRoute,
  getReposOwnerRepoActionsSecretsRoute,
  getReposOwnerRepoActionsTasksRoute,
  getReposOwnerRepoActionsVariablesRoute,
  getReposOwnerRepoActionsVariablesVariablenameRoute,
  getReposOwnerRepoActionsWorkflowsRoute,
  getReposOwnerRepoActionsWorkflowsWorkflowIdRoute,
  getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRoute,
  getReposOwnerRepoActivitiesFeedsRoute,
  getReposOwnerRepoArchiveArchiveRoute,
  getReposOwnerRepoAssigneesAssigneeRoute,
  getReposOwnerRepoAssigneesRoute,
  getReposOwnerRepoBranchesBranchRoute,
  getReposOwnerRepoBranchesRoute,
  getReposOwnerRepoBranchProtectionsNameRoute,
  getReposOwnerRepoBranchProtectionsRoute,
  getReposOwnerRepoCodeSearchRoute,
  getReposOwnerRepoCollaboratorsCollaboratorPermissionRoute,
  getReposOwnerRepoCollaboratorsCollaboratorRoute,
  getReposOwnerRepoCollaboratorsRoute,
  getReposOwnerRepoCommitsRefStatusesRoute,
  getReposOwnerRepoCommitsRefStatusRoute,
  getReposOwnerRepoCommitsRoute,
  getReposOwnerRepoCommitsShaPullRoute,
  getReposOwnerRepoCompareBaseheadRoute,
  getReposOwnerRepoContentsExtFilepathRoute,
  getReposOwnerRepoContentsFilepathRoute,
  getReposOwnerRepoContentsRoute,
  getReposOwnerRepoEditorconfigFilepathRoute,
  getReposOwnerRepoFileContentsRoute,
  getReposOwnerRepoForksRoute,
  getReposOwnerRepoGitBlobsShaRoute,
  getReposOwnerRepoGitCommitsShaDiffTypeRoute,
  getReposOwnerRepoGitCommitsShaRoute,
  getReposOwnerRepoGitNotesShaRoute,
  getReposOwnerRepoGitRefsRefRoute,
  getReposOwnerRepoGitRefsRoute,
  getReposOwnerRepoGitTagsShaRoute,
  getReposOwnerRepoGitTreesShaRoute,
  getReposOwnerRepoHooksGitIdRoute,
  getReposOwnerRepoHooksGitRoute,
  getReposOwnerRepoHooksIdDeliveriesRoute,
  getReposOwnerRepoHooksIdDeliveriesUuidRoute,
  getReposOwnerRepoHooksIdRoute,
  getReposOwnerRepoHooksRoute,
  getReposOwnerRepoIssueConfigRoute,
  getReposOwnerRepoIssueConfigValidateRoute,
  getReposOwnerRepoIssuesPinnedRoute,
  getReposOwnerRepoIssueTemplatesRoute,
  getReposOwnerRepoKeysIdRoute,
  getReposOwnerRepoKeysRoute,
  getReposOwnerRepoLanguagesRoute,
  getReposOwnerRepoLicensesRoute,
  getReposOwnerRepoMediaFilepathRoute,
  getReposOwnerRepoNewPinAllowedRoute,
  getReposOwnerRepoProjectsIdColumnsColumnIdIssuesRoute,
  getReposOwnerRepoProjectsIdColumnsColumnIdRoute,
  getReposOwnerRepoProjectsIdColumnsRoute,
  getReposOwnerRepoProjectsIdRoute,
  getReposOwnerRepoProjectsIdWorkflowsRoute,
  getReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute,
  getReposOwnerRepoProjectsRoute,
  getReposOwnerRepoPullsBaseHeadRoute,
  getReposOwnerRepoPullsIndexCommitsRoute,
  getReposOwnerRepoPullsIndexDiffTypeRoute,
  getReposOwnerRepoPullsIndexFilesRoute,
  getReposOwnerRepoPullsIndexMergeRoute,
  getReposOwnerRepoPullsIndexReviewsIdCommentsRoute,
  getReposOwnerRepoPullsIndexReviewsIdRoute,
  getReposOwnerRepoPullsIndexReviewsRoute,
  getReposOwnerRepoPullsIndexRoute,
  getReposOwnerRepoPullsPinnedRoute,
  getReposOwnerRepoPullsRoute,
  getReposOwnerRepoPushMirrorsNameRoute,
  getReposOwnerRepoPushMirrorsRoute,
  getReposOwnerRepoRawFilepathRoute,
  getReposOwnerRepoReleasesIdAssetsAttachmentIdRoute,
  getReposOwnerRepoReleasesIdAssetsRoute,
  getReposOwnerRepoReleasesIdRoute,
  getReposOwnerRepoReleasesLatestRoute,
  getReposOwnerRepoReleasesRoute,
  getReposOwnerRepoReleasesTagsTagRoute,
  getReposOwnerRepoReviewersRoute,
  getReposOwnerRepoRoute,
  getReposOwnerRepoSigningKeyGpgRoute,
  getReposOwnerRepoSigningKeyPubRoute,
  getReposOwnerRepoStargazersRoute,
  getReposOwnerRepoStatusesShaRoute,
  getReposOwnerRepoSubscribersRoute,
  getReposOwnerRepoSubscriptionRoute,
  getReposOwnerRepoTagProtectionsIdRoute,
  getReposOwnerRepoTagProtectionsRoute,
  getReposOwnerRepoTagsRoute,
  getReposOwnerRepoTagsTagRoute,
  getReposOwnerRepoTeamsRoute,
  getReposOwnerRepoTeamsTeamRoute,
  getReposOwnerRepoTimesRoute,
  getReposOwnerRepoTimesUserRoute,
  getReposOwnerRepoTopicsRoute,
  getReposOwnerRepoWikiPagePageNameRoute,
  getReposOwnerRepoWikiPagesRoute,
  getReposOwnerRepoWikiRevisionsPageNameRoute,
  getReposSearchRoute,
  getSearchCodeRoute,
  getTopicsSearchRoute,
  patchReposOwnerRepoActionsRunnersRunnerIdRoute,
  patchReposOwnerRepoBranchesBranchRoute,
  patchReposOwnerRepoBranchProtectionsNameRoute,
  patchReposOwnerRepoHooksGitIdRoute,
  patchReposOwnerRepoHooksIdRoute,
  patchReposOwnerRepoProjectsIdColumnsColumnIdRoute,
  patchReposOwnerRepoProjectsIdRoute,
  patchReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute,
  patchReposOwnerRepoPullsIndexRoute,
  patchReposOwnerRepoReleasesIdAssetsAttachmentIdRoute,
  patchReposOwnerRepoReleasesIdRoute,
  patchReposOwnerRepoRoute,
  patchReposOwnerRepoTagProtectionsIdRoute,
  patchReposOwnerRepoWikiPagePageNameRoute,
  postReposMigrateRoute,
  postReposOwnerRepoActionsRunnersRegistrationTokenRoute,
  postReposOwnerRepoActionsRunsRunApproveRoute,
  postReposOwnerRepoActionsRunsRunCancelRoute,
  postReposOwnerRepoActionsRunsRunForceCancelRoute,
  postReposOwnerRepoActionsRunsRunJobsJobIdRerunRoute,
  postReposOwnerRepoActionsRunsRunRerunFailedJobsRoute,
  postReposOwnerRepoActionsRunsRunRerunRoute,
  postReposOwnerRepoActionsVariablesVariablenameRoute,
  postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRoute,
  postReposOwnerRepoAvatarRoute,
  postReposOwnerRepoBranchesRoute,
  postReposOwnerRepoBranchProtectionsPriorityRoute,
  postReposOwnerRepoBranchProtectionsRoute,
  postReposOwnerRepoContentsFilepathRoute,
  postReposOwnerRepoContentsRoute,
  postReposOwnerRepoDiffpatchRoute,
  postReposOwnerRepoFileContentsRoute,
  postReposOwnerRepoForksRoute,
  postReposOwnerRepoHooksIdTestsRoute,
  postReposOwnerRepoHooksRoute,
  postReposOwnerRepoKeysRoute,
  postReposOwnerRepoKeysTokensRoute,
  postReposOwnerRepoMergeUpstreamRoute,
  postReposOwnerRepoMirrorSyncRoute,
  postReposOwnerRepoProjectsIdColumnsColumnIdDefaultRoute,
  postReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueIdRoute,
  postReposOwnerRepoProjectsIdColumnsMoveRoute,
  postReposOwnerRepoProjectsIdColumnsRoute,
  postReposOwnerRepoProjectsIdIssuesIssueIdMoveRoute,
  postReposOwnerRepoProjectsIdWorkflowsRoute,
  postReposOwnerRepoProjectsRoute,
  postReposOwnerRepoPullsCommentsIdResolveRoute,
  postReposOwnerRepoPullsCommentsIdUnresolveRoute,
  postReposOwnerRepoPullsIndexCommentsIdRepliesRoute,
  postReposOwnerRepoPullsIndexMergeRoute,
  postReposOwnerRepoPullsIndexRequestedReviewersRoute,
  postReposOwnerRepoPullsIndexReviewsIdDismissalsRoute,
  postReposOwnerRepoPullsIndexReviewsIdRoute,
  postReposOwnerRepoPullsIndexReviewsIdUndismissalsRoute,
  postReposOwnerRepoPullsIndexReviewsRoute,
  postReposOwnerRepoPullsIndexUpdateRoute,
  postReposOwnerRepoPullsRoute,
  postReposOwnerRepoPushMirrorsRoute,
  postReposOwnerRepoPushMirrorsSyncRoute,
  postReposOwnerRepoReleasesIdAssetsRoute,
  postReposOwnerRepoReleasesRoute,
  postReposOwnerRepoStatusesShaRoute,
  postReposOwnerRepoTagProtectionsRoute,
  postReposOwnerRepoTagsRoute,
  postReposOwnerRepoTransferAcceptRoute,
  postReposOwnerRepoTransferRejectRoute,
  postReposOwnerRepoTransferRoute,
  postReposOwnerRepoWikiNewRoute,
  postReposTemplateOwnerTemplateRepoGenerateRoute,
  putReposOwnerRepoActionsSecretsSecretnameRoute,
  putReposOwnerRepoActionsVariablesVariablenameRoute,
  putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRoute,
  putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRoute,
  putReposOwnerRepoBranchesBranchRoute,
  putReposOwnerRepoCollaboratorsCollaboratorRoute,
  putReposOwnerRepoContentsFilepathRoute,
  putReposOwnerRepoSubscriptionRoute,
  putReposOwnerRepoTeamsTeamRoute,
  putReposOwnerRepoTopicsRoute,
  putReposOwnerRepoTopicsTopicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repositoryHandler = app
  .openapi(postReposMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsArtifactIdZipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunAttemptsAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunAttemptsAttemptJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunForceCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunJobsJobIdRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunRerunFailedJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsSecretsSecretnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsSecretsSecretnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsVariablesVariablenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActivitiesFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoArchiveArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAssigneesAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchProtectionsPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchProtectionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchProtectionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoBranchProtectionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCollaboratorsCollaboratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCollaboratorsCollaboratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoCollaboratorsCollaboratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCollaboratorsCollaboratorPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsShaPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCompareBaseheadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoContentsExtFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoContentsFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoContentsFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoContentsFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoContentsFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoDiffpatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEditorconfigFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoFileContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoFileContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitBlobsShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitCommitsShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitCommitsShaDiffTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitNotesShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitRefsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitTagsShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitTreesShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksGitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoHooksGitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksGitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoHooksGitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksIdDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksIdDeliveriesUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoHooksIdTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssueConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssueConfigValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssueTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesPinnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoKeysTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMediaFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMergeUpstreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMirrorSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoNewPinAllowedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoProjectsIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoProjectsIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoProjectsIdColumnsMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoProjectsIdColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoProjectsIdColumnsColumnIdDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoProjectsIdColumnsColumnIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoProjectsIdIssuesIssueIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoProjectsIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoProjectsIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsCommentsIdResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsCommentsIdUnresolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPinnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsBaseHeadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoPullsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsIndexDiffTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsIndexCommentsIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsIndexCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsIndexFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsIndexMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsIndexMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsIndexMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsIndexRequestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsIndexRequestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsIndexReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsIndexReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsIndexReviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsIndexReviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsIndexReviewsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsIndexReviewsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsIndexReviewsIdDismissalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsIndexReviewsIdUndismissalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsIndexUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPushMirrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPushMirrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPushMirrorsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPushMirrorsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPushMirrorsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRawFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoReleasesTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoReleasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoReleasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoReleasesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoReleasesIdAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesIdAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoReleasesIdAssetsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSigningKeyGpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSigningKeyPubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStargazersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStatusesShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoStatusesShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTagProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoTagProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoTagProtectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTagProtectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoTagProtectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoTeamsTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTeamsTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoTeamsTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTimesUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoTopicsTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoTopicsTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoTransferAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoTransferRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoWikiNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoWikiPagePageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoWikiPagePageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoWikiPagePageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoWikiPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoWikiRevisionsPageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposTemplateOwnerTemplateRepoGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopicsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
