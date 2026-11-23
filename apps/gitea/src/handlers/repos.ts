import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
  deleteReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute,
  deleteReposOwnerRepoIssuesCommentsIdReactionsRoute,
  deleteReposOwnerRepoIssuesCommentsIdRoute,
  deleteReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute,
  deleteReposOwnerRepoIssuesIndexAssigneesRoute,
  deleteReposOwnerRepoIssuesIndexBlocksRoute,
  deleteReposOwnerRepoIssuesIndexCommentsIdRoute,
  deleteReposOwnerRepoIssuesIndexDependenciesRoute,
  deleteReposOwnerRepoIssuesIndexLabelsIdRoute,
  deleteReposOwnerRepoIssuesIndexLabelsRoute,
  deleteReposOwnerRepoIssuesIndexLockRoute,
  deleteReposOwnerRepoIssuesIndexPinRoute,
  deleteReposOwnerRepoIssuesIndexReactionsRoute,
  deleteReposOwnerRepoIssuesIndexRoute,
  deleteReposOwnerRepoIssuesIndexStopwatchDeleteRoute,
  deleteReposOwnerRepoIssuesIndexSubscriptionsUserRoute,
  deleteReposOwnerRepoIssuesIndexTimesIdRoute,
  deleteReposOwnerRepoIssuesIndexTimesRoute,
  deleteReposOwnerRepoKeysIdRoute,
  deleteReposOwnerRepoLabelsIdRoute,
  deleteReposOwnerRepoMilestonesIdRoute,
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
  getReposIssuesSearchRoute,
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
  getReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute,
  getReposOwnerRepoIssuesCommentsIdAssetsRoute,
  getReposOwnerRepoIssuesCommentsIdReactionsRoute,
  getReposOwnerRepoIssuesCommentsIdRoute,
  getReposOwnerRepoIssuesCommentsRoute,
  getReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute,
  getReposOwnerRepoIssuesIndexAssetsRoute,
  getReposOwnerRepoIssuesIndexAssigneesAssigneeRoute,
  getReposOwnerRepoIssuesIndexBlocksRoute,
  getReposOwnerRepoIssuesIndexCommentsRoute,
  getReposOwnerRepoIssuesIndexDependenciesRoute,
  getReposOwnerRepoIssuesIndexLabelsRoute,
  getReposOwnerRepoIssuesIndexReactionsRoute,
  getReposOwnerRepoIssuesIndexRoute,
  getReposOwnerRepoIssuesIndexSubscriptionsCheckRoute,
  getReposOwnerRepoIssuesIndexSubscriptionsRoute,
  getReposOwnerRepoIssuesIndexTimelineRoute,
  getReposOwnerRepoIssuesIndexTimesRoute,
  getReposOwnerRepoIssuesPinnedRoute,
  getReposOwnerRepoIssuesRoute,
  getReposOwnerRepoIssueTemplatesRoute,
  getReposOwnerRepoKeysIdRoute,
  getReposOwnerRepoKeysRoute,
  getReposOwnerRepoLabelsIdRoute,
  getReposOwnerRepoLabelsRoute,
  getReposOwnerRepoLanguagesRoute,
  getReposOwnerRepoLicensesRoute,
  getReposOwnerRepoMediaFilepathRoute,
  getReposOwnerRepoMilestonesIdRoute,
  getReposOwnerRepoMilestonesRoute,
  getReposOwnerRepoNewPinAllowedRoute,
  getReposOwnerRepoNotificationsRoute,
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
  patchReposOwnerRepoActionsRunnersRunnerIdRoute,
  patchReposOwnerRepoBranchesBranchRoute,
  patchReposOwnerRepoBranchProtectionsNameRoute,
  patchReposOwnerRepoHooksGitIdRoute,
  patchReposOwnerRepoHooksIdRoute,
  patchReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute,
  patchReposOwnerRepoIssuesCommentsIdRoute,
  patchReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute,
  patchReposOwnerRepoIssuesIndexCommentsIdRoute,
  patchReposOwnerRepoIssuesIndexPinPositionRoute,
  patchReposOwnerRepoIssuesIndexRoute,
  patchReposOwnerRepoLabelsIdRoute,
  patchReposOwnerRepoMilestonesIdRoute,
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
  postReposOwnerRepoIssuesCommentsIdAssetsRoute,
  postReposOwnerRepoIssuesCommentsIdReactionsRoute,
  postReposOwnerRepoIssuesIndexAssetsRoute,
  postReposOwnerRepoIssuesIndexAssigneesRoute,
  postReposOwnerRepoIssuesIndexBlocksRoute,
  postReposOwnerRepoIssuesIndexCommentsRoute,
  postReposOwnerRepoIssuesIndexDeadlineRoute,
  postReposOwnerRepoIssuesIndexDependenciesRoute,
  postReposOwnerRepoIssuesIndexLabelsRoute,
  postReposOwnerRepoIssuesIndexPinRoute,
  postReposOwnerRepoIssuesIndexReactionsRoute,
  postReposOwnerRepoIssuesIndexStopwatchStartRoute,
  postReposOwnerRepoIssuesIndexStopwatchStopRoute,
  postReposOwnerRepoIssuesIndexTimesRoute,
  postReposOwnerRepoIssuesRoute,
  postReposOwnerRepoKeysRoute,
  postReposOwnerRepoKeysTokensRoute,
  postReposOwnerRepoLabelsRoute,
  postReposOwnerRepoMergeUpstreamRoute,
  postReposOwnerRepoMilestonesRoute,
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
  putReposOwnerRepoIssuesIndexLabelsRoute,
  putReposOwnerRepoIssuesIndexLockRoute,
  putReposOwnerRepoIssuesIndexSubscriptionsUserRoute,
  putReposOwnerRepoNotificationsRoute,
  putReposOwnerRepoSubscriptionRoute,
  putReposOwnerRepoTeamsTeamRoute,
  putReposOwnerRepoTopicsRoute,
  putReposOwnerRepoTopicsTopicRoute,
} from '../routes'

export const getReposIssuesSearchRouteHandler: RouteHandler<
  typeof getReposIssuesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposMigrateRouteHandler: RouteHandler<typeof postReposMigrateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReposSearchRouteHandler: RouteHandler<typeof getReposSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRouteHandler: RouteHandler<typeof getReposOwnerRepoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsArtifactsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsArtifactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsArtifactsArtifactIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsArtifactsArtifactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsArtifactsArtifactIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsArtifactsArtifactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsArtifactsArtifactIdZipRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsArtifactsArtifactIdZipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsJobsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsJobsJobIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsJobsJobIdLogsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsJobsJobIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunnersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunnersRegistrationTokenRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunnersRegistrationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsRunnersRunnerIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunnersRunnerIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoActionsRunnersRunnerIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoActionsRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsRunsRunRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsRunsRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunApproveRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunArtifactsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunArtifactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunAttemptsAttemptRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunAttemptsAttemptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunAttemptsAttemptJobsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunAttemptsAttemptJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunCancelRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunForceCancelRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunForceCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunJobsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunJobsJobIdRerunRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunJobsJobIdRerunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunLogsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunRerunRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunRerunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunRerunFailedJobsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunRerunFailedJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsSecretsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsSecretsSecretnameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsSecretsSecretnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsSecretsSecretnameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsSecretsSecretnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsTasksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsVariablesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsVariablesVariablenameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsVariablesVariablenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsVariablesVariablenameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsVariablesVariablenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsVariablesVariablenameRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsVariablesVariablenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsVariablesVariablenameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsVariablesVariablenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsWorkflowsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActivitiesFeedsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActivitiesFeedsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoArchiveArchiveRouteHandler: RouteHandler<
  typeof getReposOwnerRepoArchiveArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAssigneesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAssigneesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAssigneesAssigneeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAssigneesAssigneeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoAvatarRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoAvatarRouteHandler: RouteHandler<
  typeof postReposOwnerRepoAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchProtectionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchProtectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchProtectionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchProtectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchProtectionsPriorityRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchProtectionsPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchProtectionsNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchProtectionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchProtectionsNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchProtectionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoBranchProtectionsNameRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoBranchProtectionsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoBranchesBranchRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoBranchesBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoBranchesBranchRouteHandler: RouteHandler<
  typeof putReposOwnerRepoBranchesBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeSearchRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCollaboratorsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCollaboratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoCollaboratorsCollaboratorRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoCollaboratorsCollaboratorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCollaboratorsCollaboratorRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCollaboratorsCollaboratorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoCollaboratorsCollaboratorRouteHandler: RouteHandler<
  typeof putReposOwnerRepoCollaboratorsCollaboratorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCollaboratorsCollaboratorPermissionRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCollaboratorsCollaboratorPermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRefStatusRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRefStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRefStatusesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRefStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsShaPullRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsShaPullRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCompareBaseheadRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCompareBaseheadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoContentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoContentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoContentsExtFilepathRouteHandler: RouteHandler<
  typeof getReposOwnerRepoContentsExtFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoContentsFilepathRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoContentsFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoContentsFilepathRouteHandler: RouteHandler<
  typeof getReposOwnerRepoContentsFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoContentsFilepathRouteHandler: RouteHandler<
  typeof postReposOwnerRepoContentsFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoContentsFilepathRouteHandler: RouteHandler<
  typeof putReposOwnerRepoContentsFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoDiffpatchRouteHandler: RouteHandler<
  typeof postReposOwnerRepoDiffpatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEditorconfigFilepathRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEditorconfigFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoFileContentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoFileContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoFileContentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoFileContentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoForksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoForksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoForksRouteHandler: RouteHandler<
  typeof postReposOwnerRepoForksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitBlobsShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitBlobsShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitCommitsShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitCommitsShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitCommitsShaDiffTypeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitCommitsShaDiffTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitNotesShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitNotesShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitRefsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitRefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitRefsRefRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitRefsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitTagsShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitTagsShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitTreesShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitTreesShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoHooksRouteHandler: RouteHandler<
  typeof postReposOwnerRepoHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksGitRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksGitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoHooksGitIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoHooksGitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksGitIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksGitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoHooksGitIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoHooksGitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoHooksIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoHooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoHooksIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoHooksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksIdDeliveriesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksIdDeliveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksIdDeliveriesUuidRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksIdDeliveriesUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoHooksIdTestsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoHooksIdTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssueConfigRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssueConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssueConfigValidateRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssueConfigValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssueTemplatesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssueTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesCommentsIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesCommentsIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesCommentsIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesCommentsIdAssetsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesCommentsIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesCommentsIdAssetsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesCommentsIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesCommentsIdAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesCommentsIdReactionsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesCommentsIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesCommentsIdReactionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesCommentsIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesCommentsIdReactionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesCommentsIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesPinnedRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesPinnedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesIndexRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexAssetsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexAssetsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesIndexAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesIndexAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexAssigneesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexAssigneesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexAssigneesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexAssigneesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexAssigneesAssigneeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexAssigneesAssigneeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexBlocksRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexBlocksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexBlocksRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexBlocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexCommentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexCommentsIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesIndexCommentsIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesIndexCommentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexDeadlineRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexDeadlineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexDependenciesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexDependenciesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexDependenciesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexLabelsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexLabelsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexLabelsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoIssuesIndexLabelsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoIssuesIndexLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexLabelsIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexLockRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoIssuesIndexLockRouteHandler: RouteHandler<
  typeof putReposOwnerRepoIssuesIndexLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexPinRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexPinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexPinRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexPinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesIndexPinPositionRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesIndexPinPositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexReactionsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexReactionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexReactionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexStopwatchDeleteRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexStopwatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexStopwatchStartRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexStopwatchStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexStopwatchStopRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexStopwatchStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexSubscriptionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexSubscriptionsCheckRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexSubscriptionsCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexSubscriptionsUserRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexSubscriptionsUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoIssuesIndexSubscriptionsUserRouteHandler: RouteHandler<
  typeof putReposOwnerRepoIssuesIndexSubscriptionsUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexTimelineRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexTimelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexTimesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIndexTimesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIndexTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIndexTimesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIndexTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIndexTimesIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIndexTimesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoKeysRouteHandler: RouteHandler<
  typeof getReposOwnerRepoKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoKeysRouteHandler: RouteHandler<
  typeof postReposOwnerRepoKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoKeysTokensRouteHandler: RouteHandler<
  typeof postReposOwnerRepoKeysTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoKeysIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoKeysIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoLabelsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoLabelsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoLabelsIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoLabelsIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoLabelsIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoLanguagesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoLicensesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoLicensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoMediaFilepathRouteHandler: RouteHandler<
  typeof getReposOwnerRepoMediaFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoMergeUpstreamRouteHandler: RouteHandler<
  typeof postReposOwnerRepoMergeUpstreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoMilestonesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoMilestonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoMilestonesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoMilestonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoMilestonesIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoMilestonesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoMilestonesIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoMilestonesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoMilestonesIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoMilestonesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoMirrorSyncRouteHandler: RouteHandler<
  typeof postReposOwnerRepoMirrorSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoNewPinAllowedRouteHandler: RouteHandler<
  typeof getReposOwnerRepoNewPinAllowedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoNotificationsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoNotificationsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoProjectsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoProjectsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoProjectsIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoProjectsIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoProjectsIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoProjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoProjectsIdColumnsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoProjectsIdColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoProjectsIdColumnsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoProjectsIdColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoProjectsIdColumnsMoveRouteHandler: RouteHandler<
  typeof postReposOwnerRepoProjectsIdColumnsMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoProjectsIdColumnsColumnIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoProjectsIdColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoProjectsIdColumnsColumnIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoProjectsIdColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoProjectsIdColumnsColumnIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoProjectsIdColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoProjectsIdColumnsColumnIdDefaultRouteHandler: RouteHandler<
  typeof postReposOwnerRepoProjectsIdColumnsColumnIdDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoProjectsIdColumnsColumnIdIssuesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoProjectsIdColumnsColumnIdIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueIdRouteHandler: RouteHandler<
  typeof postReposOwnerRepoProjectsIdColumnsColumnIdIssuesIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoProjectsIdIssuesIssueIdMoveRouteHandler: RouteHandler<
  typeof postReposOwnerRepoProjectsIdIssuesIssueIdMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoProjectsIdWorkflowsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoProjectsIdWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoProjectsIdWorkflowsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoProjectsIdWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoProjectsIdWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoProjectsIdWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoProjectsIdWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoProjectsIdWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsCommentsIdResolveRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsCommentsIdResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsCommentsIdUnresolveRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsCommentsIdUnresolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPinnedRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPinnedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsBaseHeadRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsBaseHeadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsIndexRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoPullsIndexRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoPullsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsIndexDiffTypeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsIndexDiffTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsIndexCommentsIdRepliesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsIndexCommentsIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsIndexCommitsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsIndexCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsIndexFilesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsIndexFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPullsIndexMergeRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPullsIndexMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsIndexMergeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsIndexMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsIndexMergeRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsIndexMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPullsIndexRequestedReviewersRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPullsIndexRequestedReviewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsIndexRequestedReviewersRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsIndexRequestedReviewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsIndexReviewsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsIndexReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsIndexReviewsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsIndexReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPullsIndexReviewsIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPullsIndexReviewsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsIndexReviewsIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsIndexReviewsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsIndexReviewsIdRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsIndexReviewsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsIndexReviewsIdCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsIndexReviewsIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsIndexReviewsIdDismissalsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsIndexReviewsIdDismissalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsIndexReviewsIdUndismissalsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsIndexReviewsIdUndismissalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsIndexUpdateRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsIndexUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPushMirrorsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPushMirrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPushMirrorsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPushMirrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPushMirrorsSyncRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPushMirrorsSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPushMirrorsNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPushMirrorsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPushMirrorsNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPushMirrorsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRawFilepathRouteHandler: RouteHandler<
  typeof getReposOwnerRepoRawFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoReleasesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesLatestRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoReleasesTagsTagRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoReleasesTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesTagsTagRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoReleasesIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoReleasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoReleasesIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoReleasesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesIdAssetsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoReleasesIdAssetsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoReleasesIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoReleasesIdAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoReleasesIdAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesIdAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesIdAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoReleasesIdAssetsAttachmentIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoReleasesIdAssetsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReviewersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReviewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSigningKeyGpgRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSigningKeyGpgRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSigningKeyPubRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSigningKeyPubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStargazersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStargazersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStatusesShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStatusesShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoStatusesShaRouteHandler: RouteHandler<
  typeof postReposOwnerRepoStatusesShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSubscribersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSubscribersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoSubscriptionRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSubscriptionRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoSubscriptionRouteHandler: RouteHandler<
  typeof putReposOwnerRepoSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTagProtectionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTagProtectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoTagProtectionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoTagProtectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoTagProtectionsIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoTagProtectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTagProtectionsIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTagProtectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoTagProtectionsIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoTagProtectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTagsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoTagsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoTagsTagRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTagsTagRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTeamsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoTeamsTeamRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoTeamsTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTeamsTeamRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTeamsTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoTeamsTeamRouteHandler: RouteHandler<
  typeof putReposOwnerRepoTeamsTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTimesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTimesUserRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTimesUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTopicsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoTopicsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoTopicsTopicRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoTopicsTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoTopicsTopicRouteHandler: RouteHandler<
  typeof putReposOwnerRepoTopicsTopicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoTransferRouteHandler: RouteHandler<
  typeof postReposOwnerRepoTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoTransferAcceptRouteHandler: RouteHandler<
  typeof postReposOwnerRepoTransferAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoTransferRejectRouteHandler: RouteHandler<
  typeof postReposOwnerRepoTransferRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoWikiNewRouteHandler: RouteHandler<
  typeof postReposOwnerRepoWikiNewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoWikiPagePageNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoWikiPagePageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoWikiPagePageNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoWikiPagePageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoWikiPagePageNameRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoWikiPagePageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoWikiPagesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoWikiPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoWikiRevisionsPageNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoWikiRevisionsPageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposTemplateOwnerTemplateRepoGenerateRouteHandler: RouteHandler<
  typeof postReposTemplateOwnerTemplateRepoGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
